import { createAsyncMemory } from '@easyevery/ez-store';

type Option = { value: string; label: string; key: string };
function randomString(length: number) {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = length; i > 0; --i) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

export const getAsyncCache = createAsyncMemory<Option[]>('GET_ASYNC_CACHE', {
  getter: async () => {
    const res = await new Promise<Option[]>((resolve) => {
      setTimeout(() => {
        resolve(
          new Array(10).fill(1).map(() => {
            const val = randomString(4);
            return { value: val, label: val, key: val };
          }),
        );
      }, 1000);
    });
    console.log('%c Line:6 🥚', 'color:#2eafb0', res);

    return res;
  },
  // expire: EzStore.TimeSpan.second * 10,
});
