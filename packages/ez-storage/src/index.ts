type IStorageType = 'localStorage' | 'sessionStorage' | 'memory';

type IStorageOptions = {
  prefix?: string;
  version?: number;
  expire?: number;
};

type IStorageRaw<T> = IStorageOptions & {
  value: T;
};

type IAsyncStorageOptions<T, P = any> = IStorageOptions & {
  getter?: (params: P) => Promise<T>;
  setter?: (value: T) => Promise<T>;
};

enum TimeSpan {
  second = 1000,
  minute = 60 * 1000,
  hour = 3600 * 1000,
  day = 24 * 3600 * 1000,
  week = 7 * 24 * 3600 * 1000,
  month = 30 * 24 * 3600 * 1000,
  year = 365 * 24 * 3600 * 1000,
}

const memory = new Map();

const memoryStorage = Object.freeze({
  getItem: function <T = any>(key: any): T | null {
    return memory.get(key);
  },
  setItem: function <T = any>(key: any, value: T) {
    memory.set(key, value);
  },
  removeItem: function (key: any): boolean {
    return memory.delete(key);
  },
});

const getInstance = (type: IStorageType): Storage | typeof memoryStorage => {
  switch (type) {
    case 'localStorage':
    case 'sessionStorage':
      return window[type];
    case 'memory':
    default:
      return memoryStorage;
  }
};

const getDefaultExpire = () => Date.now() + TimeSpan.year;

const isExpire = (expire?: number) => {
  if (expire === -1) return false;
  if (typeof expire === 'number') return expire < +new Date();
  return false;
};

const getStorageImp = (type: IStorageType) => {
  const storage = getInstance(type);

  return {
    set: function <T = any>(key: string, value: T): boolean {
      try {
        storage.setItem(key, (type === 'memory' ? value : JSON.stringify(value)) as any);
        return true;
      } catch (error) {
        console.error('Error storing data:', error);
        return false;
      }
    },

    get: function <T = any>(key: string): T | null {
      try {
        const value = storage.getItem(key);
        if (type === 'memory') return value;
        return value ? JSON.parse(value as any) : null;
      } catch (error) {
        console.error('Error getting data:', error);
        return null;
      }
    },

    remove: function (key: string): boolean {
      try {
        storage.removeItem(key);
        return true;
      } catch (error) {
        console.error('Error removing data:', error);
        return false;
      }
    },
  };
};

const createImp = <T>(type: IStorageType, key: string, options: IStorageOptions = {}) => {
  const storageImp = getStorageImp(type);

  if (!storageImp) throw new Error('getStorageImp error!');

  let name = key;

  if (options.prefix) name = `${options.prefix}_${key}`;

  if (!options.expire) options.expire = getDefaultExpire();

  return Object.freeze({
    name,
    get: () => {
      const raw = storageImp.get<IStorageRaw<T>>(name);
      if (isExpire(raw?.expire)) {
        storageImp.remove(name);
        return null;
      }
      return raw ? raw.value : null;
    },
    set: (value: T) => storageImp.set<IStorageRaw<T>>(name, { ...options, value }),
    remove: () => storageImp.remove(name),
  });
};

const createCache = <T = any>(type: IStorageType, key: string, options: IStorageOptions = {}) => createImp<T>(type, key, options);

const createAsync = <T>(cacheType: IStorageType, key: string, options: IAsyncStorageOptions<T> = {}) => {
  const cache = createCache(cacheType, key, options);

  const getter = typeof options.getter === 'function' ? options.getter : () => null;
  const setter = typeof options.setter === 'function' ? options.setter : null;

  return Object.freeze({
    name: key,
    get: async (params?: Parameters<typeof getter>) => {
      const raw = cache.get();

      if (raw) return raw;

      const value = await getter(params);
      cache.set(value);
      return value;
    },
    set: async (value: T) => {
      if (setter) await setter(value);
      else cache.set(value);
    },
    remove: () => cache.remove(),
  });
};

const createMemory = <T = any>(key: string, options: IStorageOptions = {}) => createImp<T>('memory', key, options);
const createLocal = <T = any>(key: string, options: IStorageOptions = {}) => createImp<T>('localStorage', key, options);
const createSession = <T = any>(key: string, options: IStorageOptions = {}) => createImp<T>('sessionStorage', key, options);
const createAsyncMemory = <T = any>(key: string, options: IAsyncStorageOptions<T> = {}) => createAsync<T>('memory', key, options);
const createAsyncLocal = <T = any>(key: string, options: IAsyncStorageOptions<T> = {}) => createAsync<T>('localStorage', key, options);
const createAsyncSession = <T = any>(key: string, options: IAsyncStorageOptions<T> = {}) => createAsync<T>('sessionStorage', key, options);

const EzStore = {
  /**
   * @description sync method
   */
  createCache,
  createMemory,
  createLocal,
  createSession,
  /**
   * @description async method
   */
  createAsync,
  createAsyncMemory,
  createAsyncLocal,
  createAsyncSession,
  /**
   * @description preset timeSpan
   */
  TimeSpan,
};

export { TimeSpan };
export type EzStoreInstance = ReturnType<typeof createCache | typeof createAsync>;
export { createCache, createMemory, createLocal, createSession, createAsync, createAsyncMemory, createAsyncLocal, createAsyncSession };

export default EzStore;
