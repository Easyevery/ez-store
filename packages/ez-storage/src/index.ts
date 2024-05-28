type StoreType = 'localStorage' | 'sessionStorage' | 'memory';

type StoreOptions = {
  prefix?: string;
  expire?: number;
};

type StoreRaw<T> = StoreOptions & {
  value: T;
};

type AsyncStoreOptions<T> = StoreOptions & {
  getter?: () => Promise<T>;
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

const memoryStore = Object.freeze({
  getItem: function (key: string) {
    return memory.get(key);
  },
  setItem: function (key: string, value: any) {
    memory.set(key, value);
  },
  removeItem: function (key: string): boolean {
    return memory.delete(key);
  },
});

const getStoreInstance = (type: StoreType): Storage | typeof memoryStore => {
  switch (type) {
    case 'localStorage':
    case 'sessionStorage':
      return window[type];
    case 'memory':
    default:
      return memoryStore;
  }
};

const getDefaultExpire = () => Date.now() + TimeSpan.year;

const isExpire = (expire?: number) => {
  if (expire === -1) return false;
  if (typeof expire === 'number') return expire < +new Date();
  return false;
};

const globalConfig: Required<Pick<StoreOptions, 'prefix'>> = {
  prefix: '@@ez-store',
};

const setConfig = (options: Partial<Pick<StoreOptions, 'prefix'>> = {}): Required<Pick<StoreOptions, 'prefix'>> => {
  return Object.assign(globalConfig, options);
};

const getStoreImp = (type: StoreType) => {
  const store = getStoreInstance(type);

  return {
    set: function <T = any>(key: string, value: T): boolean {
      try {
        store.setItem(key, (type === 'memory' ? value : JSON.stringify(value)) as any);
        return true;
      } catch (error) {
        console.error('Error storing data:', error);
        return false;
      }
    },

    get: function <T = any>(key: string): T {
      try {
        const value = store.getItem(key);
        if (type === 'memory') return value;
        return value ? JSON.parse(value as any) : (null as T);
      } catch (error) {
        console.error('Error getting data:', error);
        return null as T;
      }
    },

    remove: function (key: string): boolean {
      try {
        store.removeItem(key);
        return true;
      } catch (error) {
        console.error('Error removing data:', error);
        return false;
      }
    },
  };
};

const createImp = <T>(type: StoreType, name: string, options: StoreOptions = {}) => {
  const storeImp = getStoreImp(type);

  if (!name) throw new Error('name invalid!');
  if (!type) throw new Error('type invalid!');
  if (!storeImp) throw new Error('getStoreImp!');

  if (!options.prefix) options.prefix = globalConfig.prefix;
  if (!options.expire) options.expire = getDefaultExpire();

  const key = `${options.prefix}_${name}`;

  return Object.freeze({
    name,
    key,
    get: () => {
      const raw = storeImp.get<StoreRaw<T>>(key);
      if (isExpire(raw?.expire)) {
        storeImp.remove(key);
        return null as T;
      }
      return raw ? raw.value : (null as T);
    },
    set: (value: T) => storeImp.set<StoreRaw<T>>(key, { ...options, value }),
    remove: () => storeImp.remove(key),
  });
};

const createSyncCache = <T = any>(type: StoreType, key: string, options: StoreOptions = {}) => createImp<T>(type, key, options);

const createAsyncCache = <T>(type: StoreType, key: string, options: AsyncStoreOptions<T> = {}) => {
  const cache = createSyncCache<T>(type, key, options);

  const getter = typeof options.getter === 'function' ? options.getter : () => null as T;
  const setter = typeof options.setter === 'function' ? options.setter : (val: T) => val;

  return Object.freeze({
    name: key,
    get: async () => {
      const raw = cache.get();
      if (raw) return raw;

      const value = await getter();

      if (value) cache.set(value);

      return value;
    },
    set: async (value: T) => cache.set(await setter(value)),
    remove: () => cache.remove(),
  });
};

const createMemory = <T = any>(key: string, options?: StoreOptions) => createImp<T>('memory', key, options);
const createLocal = <T = any>(key: string, options?: StoreOptions) => createImp<T>('localStorage', key, options);
const createSession = <T = any>(key: string, options?: StoreOptions) => createImp<T>('sessionStorage', key, options);
const createAsyncMemory = <T = any>(key: string, options?: AsyncStoreOptions<T>) => createAsyncCache<T>('memory', key, options);
const createAsyncLocal = <T = any>(key: string, options?: AsyncStoreOptions<T>) => createAsyncCache<T>('localStorage', key, options);
const createAsyncSession = <T = any>(key: string, options?: AsyncStoreOptions<T>) => createAsyncCache<T>('sessionStorage', key, options);

const EzStore = {
  /**
   * @description sync method
   */
  createSyncCache,
  createMemory,
  createLocal,
  createSession,
  /**
   * @description async method
   */
  createAsyncCache,
  createAsyncMemory,
  createAsyncLocal,
  createAsyncSession,
  /**
   * @description preset timeSpan
   */
  TimeSpan,
  /**
   * @description set globalConfig
   */
  setConfig,
};

export { TimeSpan };
export type EzStoreInstance<T> = ReturnType<typeof createSyncCache<T> | typeof createAsyncCache<T>>;
export {
  createSyncCache,
  createMemory,
  createLocal,
  createSession,
  createAsyncCache,
  createAsyncMemory,
  createAsyncLocal,
  createAsyncSession,
};

export default EzStore;
