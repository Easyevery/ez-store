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

## 全部用法

```tsx | pure
// cacheSource file
import EzStore from '@easyevery/ez-store';

export const c = EzStore.createLocal<boolean>('key', {
  prefix: '平台A',
  expire: -1, // 永不过期，默认一年
});

// 在任意地方使用
import createLocal from './cacheSource';
activeCache.set(true);
activeCache.get();
activeCache.remove();
activeCache.name;
```

## 设置过期

```tsx | pure
export const activeBCache = EzStore.createLocal<boolean>('key', {
  prefix: '平台A',
  expire: dayjs().add('day', 1).valueOf(), // 1天后过期
});

export const activeBCache = EzStore.createLocal<boolean>('key', {
  prefix: '平台A',
  expire: EzStore.TimeSpan.day * 2, // 2天后过期
});
```

## interface:

```tsx | pure
// 统一的 出入参
function createLocal<T = any>(key, options);
function createSession<T = any>(key, options);
function createMemory<T = any>(
  key: string,
  options?: {
    prefix?: string;
    version?: number;
    expire?: number;
  },
): Readonly<{
  name: string;
  get: () => T | null;
  set: (value: T) => boolean;
  remove: () => boolean;
}>;

// 内置一个时间戳常量
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

## 安装

```bash | pure
npm i @easyevery/ez-store
```
