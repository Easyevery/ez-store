"use strict";(self.webpackChunkez_store=self.webpackChunkez_store||[]).push([[1904],{15561:function(a,n,e){e.r(n),e.d(n,{demos:function(){return o}});var t=e(67294),o={}},2687:function(a,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:`// cacheSource file
import EzStore from '@easyevery/ez-store';

export const activeCache = EzStore.createLocal<boolean>('key', {
  prefix: '\u5E73\u53F0A',
  expire: -1, // \u6C38\u4E0D\u8FC7\u671F\uFF0C\u9ED8\u8BA4\u4E00\u5E74
});

export const asyncCache = EzStore.createSession('test', {
  getter: async () => {
    return Promise.resolve({ id: 1 });
  },
});

// \u5728\u4EFB\u610F\u5730\u65B9\u4F7F\u7528
import { activeCache, asyncCache } from './cacheSource';
activeCache.set(true);
activeCache.get();
activeCache.remove();
activeCache.name;

// \u4F7F\u7528\u5F02\u6B65\u7684\u7F13\u5B58
await asyncCache.get();
await asyncCache.set({ id: 2 });
`,paraId:0,tocIndex:0},{value:`export const activeBCache = EzStore.createLocal<boolean>('key', {
  prefix: '\u5E73\u53F0A',
  expire: dayjs().add('day', 1).valueOf(), // 1\u5929\u540E\u8FC7\u671F
});

export const activeBCache = EzStore.createLocal<boolean>('key', {
  prefix: '\u5E73\u53F0A',
  expire: EzStore.TimeSpan.day * 2, // 2\u5929\u540E\u8FC7\u671F
});
`,paraId:1,tocIndex:1},{value:`// \u540C\u6B65\u7684
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

// \u5F02\u6B65\u7684
function createAsyncLocal<T = any>(key, options);
function createSession<T = any>(key, options);
function createAsyncMemory<T = any>(
  key: string,
  options?: {
    prefix?: string;
    version?: number;
    expire?: number;
    getter?: (params: P) => Promise<T>;
    setter?: (value: T) => Promise<T>;
  },
): Readonly<{
  name: string;
  get: () => T | null;
  set: (value: T) => boolean;
  remove: () => boolean;
}>;

// \u52A8\u6001\u521B\u5EFA\uFF1A\u4F20\u5165\u989D\u5916\u7684 type "localStorage" | "sessionStorage" | "memory" \u5373\u53EF\u9009\u62E9\u521B\u5EFA\u7684\u7F13\u5B58\u57FA\u4E8E\u54EA\u4E2A\u7C7B\u578B
function createCache<T = any>(type, key, options): EzCache;
function createAsync<T = any>(type, key, options): EzCache;

// \u5185\u7F6E\u4E00\u4E2A\u65F6\u95F4\u6233\u679A\u4E3E
enum TimeSpan {
  second = 1000,
  minute = 60 * 1000,
  hour = 3600 * 1000,
  day = 24 * 3600 * 1000,
  week = 7 * 24 * 3600 * 1000,
  month = 30 * 24 * 3600 * 1000,
  year = 365 * 24 * 3600 * 1000,
}
`,paraId:2,tocIndex:2},{value:`npm i @easyevery/ez-store
`,paraId:3,tocIndex:3}]}}]);
