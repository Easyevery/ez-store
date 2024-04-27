<p><h1 align='center'>ez-store</h1></p>

<span style="margin-left:32px">ez-store</span> 以简单，统一的方式使用`localStorage`、`sessionStorage`、内存对象。

<p align="center">
<a href="https://www.npmjs.com/package/@easyevery/ez-store" target="__blank"><img src="https://img.shields.io/npm/v/@easyevery/ez-store?color=2B90B6&label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/@easyevery/ez-store" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@easyevery/ez-store?color=349dbe&label="></a>

</p>

## 使用

```tsx
// cacheSource file
import EzStore from '@easyevery/ez-store';
/* 使用 -1 设置永不过期 */
export const c = EzStore.createLocal<boolean>('key', {
  prefix: '平台A',
  expire: -1,
});

// 在任意地方使用
import createLocal from './cacheSource';
activeCache.set(true);
activeCache.get();
activeCache.remove();
activeCache.name;
```

- 设置过期

```tsx
/* 使用 dayjs 日期加减方法 设置过期 */
export const activeBCache = EzStore.createLocal<boolean>('key', {
  prefix: '平台A',
  expire: dayjs().add('day', 1).valueOf(), // 1天后过期
});

/* 使用 简单的内置时间戳枚举 设置过期 */
export const activeBCache = EzStore.createLocal<boolean>('key', {
  prefix: '平台A',
  expire: EzStore.TimeSpan.day * 2, // 2天后过期
});
```

## API:

```tsx
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

// 内置导出一个时间戳常量
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

```bash
npm i @easyevery/ez-store
```

## License

MIT
