---
hero:
  title: ez-store
  description: 以简单，统一的方式使用localStorage、sessionStorage、内存对象。
  actions:
    - text: Quick Start
      link: https://github.com/Easyevery/ez-store
    - text: Github
      link: https://github.com/Easyevery/ez-store
---

## 开始使用

### 1.创建同步缓存项

```tsx | pure
import EzStore from '@easyevery/ez-store';

export const activeCache = EzStore.createLocal<boolean>('active-a', {
  prefix: '平台A',
});

// 使用同步缓存项
activeCache.set(true);
activeCache.get();
```

### 2. 创建异步缓存项

```tsx | pure
import EzStore from '@easyevery/ez-store';

export const asyncCache = EzStore.createSession('test', {
  getter: async () => {
    return Promise.resolve({ id: 1 });
  },
  expire: EzStore.TimeSpan.day * 2, // 2天后过期
});

// 使用异步缓存项
await asyncCache.get();
await asyncCache.set({ id: 2 });
```

**注意：**

> getter: 异步缓存项优先从 cache 中取值，若没有则调用 getter 方法。

> setter: 异步缓存项优使用 setter 的返回值来设置缓存的值

### 3.支持设置过期时间

```tsx | pure
export const requestCache = EzStore.createLocal<boolean>('request', {
  prefix: '平台A',
  expire: dayjs().add('day', 1).valueOf(), // 1天后过期
});
```

## Interface

### 1. 缓存项

```tsx | pure
type Cache = Readonly<{
  name: string;
  get: () => T | null;
  set: (value: T) => boolean;
  remove: () => boolean;
}>;
```

### 2. 创建缓存项的方法

```tsx | pure
type IStoreOptions = { prefix?: string; version?: number; expire?: number };

function CreateCacheImp<T = any>(
  key: string,
  options?: IStoreOptions & {
    getter?: ((params: any) => Promise<T>) | (() => null);
    setter?: ((value: T) => Promise<T>) | ((val: T) => T);
  },
): Cache;
```

### 3. 额外提供一个内置的时间戳枚举

```tsx | pure
enum TimeSpan {
  second = 1000,
  minute = 60 * 1000,
  hour = 3600 * 1000,
  day = 24 * 3600 * 1000,
  week = 7 * 24 * 3600 * 1000,
  month = 30 * 24 * 3600 * 1000,
  year = 365 * 24 * 3600 * 1000,
}
```

## API

### 1.内置方法：创建特定类型的缓存项

<!-- prettier-ignore -->
| 方法 | 说明 | 类型 | 默认值 | 版本 |
| -------- | ------------ | ------------ | ------ | ------ |
| createLocal| 基于localStorate的同步缓存     | <a>CreateCacheImp</a>     |     -  |   -    |
| createSession| 基于sessionStorate的同步缓存     | <a>CreateCacheImp</a>     |     -  |   -    |
| createMemory| 基于内存的的同步缓存     | <a>CreateCacheImp</a>     |     -  |   -    |
| createAsyncLocal| 基于localStorate的异步缓存     | <a>CreateCacheImp</a>     |     -  |   -    |
| createAsyncSession   | 基于sessionStorate的异步缓存     | <a>CreateCacheImp</a>     |     -  |   -    |
| createAsyncMemory| 基于内存的的异步缓存     | <a>CreateCacheImp</a>     |     -  |   -    |

#### 入参

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| -------- | ------------ | ------------ | ------ | ------ |
| key      | 缓存的key     | `string`     |     -  |   -    |
| options  | 缓存的options     | <a>IStoreOptions</a>   |     -  |   -    |

### 2.内置方法：基于缓存类型创建缓存项

```tsx | pure
type StoreType = 'localStorage' | 'sessionStorage' | 'memory';

function SyncCacheImp<T = any>(
  type: StoreType,
  key: string,
  options?: IStoreOptions & {
    getter?: ((params: any) => Promise<T>) | (() => null);
    setter?: ((value: T) => Promise<T>) | ((val: T) => T);
  },
): Cache;
```

<!-- prettier-ignore -->
| 方法 | 说明 | 类型 | 默认值 | 版本 |
| -------- | ------------ | ------------ | ------ | ------ |
| createSyncCache| 根据<a>type</a>创建同步的缓存     | <a>SyncCacheImp</a>     |     -  |   -    |
| createAsyncCache| 根据<a>type</a>创建异步的缓存     | <a>SyncCacheImp</a>     |     -  |   -    |

相比 **createLocal、createAsyncLocal** 等方法，只是多了第一个参数 `type` ，但返回值都是缓存项`Cache`。

#### 入参

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| -------- | -------------| ------------ | ------ | ------ |
| type     | 缓存的类型     | <a>StoreType</a>     |     -  |   -    |
| key      | 缓存的key     | <a>string</a>          |     -  |   -    |
| options  | 缓存的options     | <a>IStoreOptions</a>   |     -  |   -    |

### 3.内置方法：设置全局统一前缀 setConfig

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| -------- | -------------| ------------ | ------ | ------ |
| options  | options     | <a>{prefix:string}</a>   |     -  |   -    |

### 4. 缓存项的属性和方法

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| -------- | -------------| ------------ | ------ | ------ |
| name     | 获取缓存的key     | <a>string</a>     |     -  |   -    |
| get      | 获取缓存的值     | <a>() => T | null;</a>          |     -  |   -    |
| set      | 设置缓存的值     | <a>(value: T) => boolean;</a>   |     -  |   -    |
| remove   | 移除缓存的值     | <a>() => boolean;</a>   |     -  |   -    |

## 安装

```bash | pure
npm i @easyevery/ez-store

yarn add @easyevery/ez-store
```
