type IStorageType = 'localStorage' | 'sessionStorage' | 'memory';

type IStorageOptions = {
  prefix?: string;
  version?: number;
  expire?: number;
};

type IStorageRaw<T> = IStorageOptions & {
  value: T;
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
  getItem: function <T = unknown>(key: any): T | null {
    return memory.get(key);
  },
  setItem: function <T = unknown>(key: any, value: T) {
    memory.set(key, value);
  },
  removeItem: function (key: any): boolean {
    return memory.delete(key);
  },
});

const getInstance = (type: IStorageType): any => {
  switch (type) {
    case 'localStorage':
    case 'sessionStorage':
    default:
      return window[type];
    case 'memory':
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
    set: function <T = unknown>(key: string, value: T): boolean {
      try {
        storage.setItem(key, JSON.stringify(value));
        return true;
      } catch (error) {
        console.error('Error storing data:', error);
        return false;
      }
    },

    get: function <T = unknown>(key: string): T | null {
      try {
        const value = storage.getItem(key);
        if (type === 'memory') {
          return value;
        }
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

const createMemory = <T = any>(key: string, options: IStorageOptions = {}) => createImp<T>('memory', key, options);

const createLocal = <T = any>(key: string, options: IStorageOptions = {}) => createImp<T>('localStorage', key, options);

const createSession = <T = any>(key: string, options: IStorageOptions = {}) => createImp<T>('sessionStorage', key, options);

const EzStore = {
  createMemory,
  createLocal,
  createSession,
  TimeSpan,
};

export { TimeSpan };
export { createMemory, createLocal, createSession };

export default EzStore;
