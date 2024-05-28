"use strict";(self.webpackChunkez_store=self.webpackChunkez_store||[]).push([[1904],{15561:function(I,e,a){a.r(e),a.d(e,{demos:function(){return n}});var d=a(67294),n={}},2687:function(I,e,a){a.r(e),a.d(e,{texts:function(){return d}});const d=[{value:`import EzStore from '@easyevery/ez-store';

export const activeCache = EzStore.createLocal<boolean>('active-a', {
  prefix: '\u5E73\u53F0A',
});

// \u4F7F\u7528\u540C\u6B65\u7F13\u5B58\u9879
activeCache.set(true);
activeCache.get();
`,paraId:0,tocIndex:1},{value:`import EzStore from '@easyevery/ez-store';

export const asyncCache = EzStore.createSession('test', {
  getter: async () => {
    return Promise.resolve({ id: 1 });
  },
  expire: EzStore.TimeSpan.day * 2, // 2\u5929\u540E\u8FC7\u671F
});

// \u4F7F\u7528\u5F02\u6B65\u7F13\u5B58\u9879
await asyncCache.get();
await asyncCache.set({ id: 2 });
`,paraId:1,tocIndex:2},{value:"\u6CE8\u610F\uFF1A",paraId:2,tocIndex:2},{value:"getter: \u5F02\u6B65\u7F13\u5B58\u9879\u4F18\u5148\u4ECE cache \u4E2D\u53D6\u503C\uFF0C\u82E5\u6CA1\u6709\u5219\u8C03\u7528 getter \u65B9\u6CD5\u3002",paraId:3,tocIndex:2},{value:"setter: \u5F02\u6B65\u7F13\u5B58\u9879\u4F18\u4F7F\u7528 setter \u7684\u8FD4\u56DE\u503C\u6765\u8BBE\u7F6E\u7F13\u5B58\u7684\u503C",paraId:4,tocIndex:2},{value:`export const requestCache = EzStore.createLocal<boolean>('request', {
  prefix: '\u5E73\u53F0A',
  expire: dayjs().add('day', 1).valueOf(), // 1\u5929\u540E\u8FC7\u671F
});
`,paraId:5,tocIndex:3},{value:`type Cache = Readonly<{
  name: string;
  get: () => T | null;
  set: (value: T) => boolean;
  remove: () => boolean;
}>;
`,paraId:6,tocIndex:5},{value:`type IStoreOptions = { prefix?: string; version?: number; expire?: number };

function CreateCacheImp<T = any>(
  key: string,
  options?: IStoreOptions & {
    getter?: ((params: any) => Promise<T>) | (() => null);
    setter?: ((value: T) => Promise<T>) | ((val: T) => T);
  },
): Cache;
`,paraId:7,tocIndex:6},{value:`enum TimeSpan {
  second = 1000,
  minute = 60 * 1000,
  hour = 3600 * 1000,
  day = 24 * 3600 * 1000,
  week = 7 * 24 * 3600 * 1000,
  month = 30 * 24 * 3600 * 1000,
  year = 365 * 24 * 3600 * 1000,
}
`,paraId:8,tocIndex:7},{value:"\u65B9\u6CD5",paraId:9,tocIndex:9},{value:"\u8BF4\u660E",paraId:9,tocIndex:9},{value:"\u7C7B\u578B",paraId:9,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:9},{value:"\u7248\u672C",paraId:9,tocIndex:9},{value:"createLocal",paraId:9,tocIndex:9},{value:"\u57FA\u4E8ElocalStorate\u7684\u540C\u6B65\u7F13\u5B58",paraId:9,tocIndex:9},{value:"CreateCacheImp",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"createSession",paraId:9,tocIndex:9},{value:"\u57FA\u4E8EsessionStorate\u7684\u540C\u6B65\u7F13\u5B58",paraId:9,tocIndex:9},{value:"CreateCacheImp",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"createMemory",paraId:9,tocIndex:9},{value:"\u57FA\u4E8E\u5185\u5B58\u7684\u7684\u540C\u6B65\u7F13\u5B58",paraId:9,tocIndex:9},{value:"CreateCacheImp",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"createAsyncLocal",paraId:9,tocIndex:9},{value:"\u57FA\u4E8ElocalStorate\u7684\u5F02\u6B65\u7F13\u5B58",paraId:9,tocIndex:9},{value:"CreateCacheImp",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"createAsyncSession",paraId:9,tocIndex:9},{value:"\u57FA\u4E8EsessionStorate\u7684\u5F02\u6B65\u7F13\u5B58",paraId:9,tocIndex:9},{value:"CreateCacheImp",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"createAsyncMemory",paraId:9,tocIndex:9},{value:"\u57FA\u4E8E\u5185\u5B58\u7684\u7684\u5F02\u6B65\u7F13\u5B58",paraId:9,tocIndex:9},{value:"CreateCacheImp",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"\u53C2\u6570",paraId:10,tocIndex:10},{value:"\u8BF4\u660E",paraId:10,tocIndex:10},{value:"\u7C7B\u578B",paraId:10,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:10},{value:"\u7248\u672C",paraId:10,tocIndex:10},{value:"key",paraId:10,tocIndex:10},{value:"\u7F13\u5B58\u7684key",paraId:10,tocIndex:10},{value:"string",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"options",paraId:10,tocIndex:10},{value:"\u7F13\u5B58\u7684options",paraId:10,tocIndex:10},{value:"IStoreOptions",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:`type StoreType = 'localStorage' | 'sessionStorage' | 'memory';

function SyncCacheImp<T = any>(
  type: StoreType,
  key: string,
  options?: IStoreOptions & {
    getter?: ((params: any) => Promise<T>) | (() => null);
    setter?: ((value: T) => Promise<T>) | ((val: T) => T);
  },
): Cache;
`,paraId:11,tocIndex:11},{value:"\u65B9\u6CD5",paraId:12,tocIndex:11},{value:"\u8BF4\u660E",paraId:12,tocIndex:11},{value:"\u7C7B\u578B",paraId:12,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:11},{value:"\u7248\u672C",paraId:12,tocIndex:11},{value:"createSyncCache",paraId:12,tocIndex:11},{value:"\u6839\u636E",paraId:12,tocIndex:11},{value:"type",paraId:12,tocIndex:11},{value:"\u521B\u5EFA\u540C\u6B65\u7684\u7F13\u5B58",paraId:12,tocIndex:11},{value:"SyncCacheImp",paraId:12,tocIndex:11},{value:"-",paraId:12,tocIndex:11},{value:"-",paraId:12,tocIndex:11},{value:"createAsyncCache",paraId:12,tocIndex:11},{value:"\u6839\u636E",paraId:12,tocIndex:11},{value:"type",paraId:12,tocIndex:11},{value:"\u521B\u5EFA\u5F02\u6B65\u7684\u7F13\u5B58",paraId:12,tocIndex:11},{value:"SyncCacheImp",paraId:12,tocIndex:11},{value:"-",paraId:12,tocIndex:11},{value:"-",paraId:12,tocIndex:11},{value:"\u76F8\u6BD4 ",paraId:13,tocIndex:11},{value:"createLocal\u3001createAsyncLocal",paraId:13,tocIndex:11},{value:" \u7B49\u65B9\u6CD5\uFF0C\u53EA\u662F\u591A\u4E86\u7B2C\u4E00\u4E2A\u53C2\u6570 ",paraId:13,tocIndex:11},{value:"type",paraId:13,tocIndex:11},{value:" \uFF0C\u4F46\u8FD4\u56DE\u503C\u90FD\u662F\u7F13\u5B58\u9879",paraId:13,tocIndex:11},{value:"Cache",paraId:13,tocIndex:11},{value:"\u3002",paraId:13,tocIndex:11},{value:"\u53C2\u6570",paraId:14,tocIndex:12},{value:"\u8BF4\u660E",paraId:14,tocIndex:12},{value:"\u7C7B\u578B",paraId:14,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:14,tocIndex:12},{value:"\u7248\u672C",paraId:14,tocIndex:12},{value:"type",paraId:14,tocIndex:12},{value:"\u7F13\u5B58\u7684\u7C7B\u578B",paraId:14,tocIndex:12},{value:"StoreType",paraId:14,tocIndex:12},{value:"-",paraId:14,tocIndex:12},{value:"-",paraId:14,tocIndex:12},{value:"key",paraId:14,tocIndex:12},{value:"\u7F13\u5B58\u7684key",paraId:14,tocIndex:12},{value:"string",paraId:14,tocIndex:12},{value:"-",paraId:14,tocIndex:12},{value:"-",paraId:14,tocIndex:12},{value:"options",paraId:14,tocIndex:12},{value:"\u7F13\u5B58\u7684options",paraId:14,tocIndex:12},{value:"IStoreOptions",paraId:14,tocIndex:12},{value:"-",paraId:14,tocIndex:12},{value:"-",paraId:14,tocIndex:12},{value:"\u53C2\u6570",paraId:15,tocIndex:13},{value:"\u8BF4\u660E",paraId:15,tocIndex:13},{value:"\u7C7B\u578B",paraId:15,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:15,tocIndex:13},{value:"\u7248\u672C",paraId:15,tocIndex:13},{value:"options",paraId:15,tocIndex:13},{value:"options",paraId:15,tocIndex:13},{value:"{prefix:string}",paraId:15,tocIndex:13},{value:"-",paraId:15,tocIndex:13},{value:"-",paraId:15,tocIndex:13},{value:"\u53C2\u6570",paraId:16,tocIndex:14},{value:"\u8BF4\u660E",paraId:16,tocIndex:14},{value:"\u7C7B\u578B",paraId:16,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:16,tocIndex:14},{value:"\u7248\u672C",paraId:16,tocIndex:14},{value:"name",paraId:16,tocIndex:14},{value:"\u83B7\u53D6\u7F13\u5B58\u7684key",paraId:16,tocIndex:14},{value:"string",paraId:16,tocIndex:14},{value:"-",paraId:16,tocIndex:14},{value:"-",paraId:16,tocIndex:14},{value:"get",paraId:16,tocIndex:14},{value:"\u83B7\u53D6\u7F13\u5B58\u7684\u503C",paraId:16,tocIndex:14},{value:"() => T",paraId:16,tocIndex:14},{value:"null;",paraId:16,tocIndex:14},{value:"-",paraId:16,tocIndex:14},{value:"set",paraId:16,tocIndex:14},{value:"\u8BBE\u7F6E\u7F13\u5B58\u7684\u503C",paraId:16,tocIndex:14},{value:"(value: T) => boolean;",paraId:16,tocIndex:14},{value:"-",paraId:16,tocIndex:14},{value:"-",paraId:16,tocIndex:14},{value:"remove",paraId:16,tocIndex:14},{value:"\u79FB\u9664\u7F13\u5B58\u7684\u503C",paraId:16,tocIndex:14},{value:"() => boolean;",paraId:16,tocIndex:14},{value:"-",paraId:16,tocIndex:14},{value:"-",paraId:16,tocIndex:14},{value:`npm i @easyevery/ez-store

yarn add @easyevery/ez-store
`,paraId:17,tocIndex:15}]}}]);
