import Redis from './redis'

export const fetch = async <T>(key: string, fetcher: () => T, expires: number) => {
  const val = await get(key)
  if (val !== null) return val
  return set(key, fetcher, expires)
}

const get = async (key: string) => {
  const val = await Redis.get(key)
  return val === null ? null : JSON.parse(val)
}

const set = async <T>(key: string, fetcher: () => T, expires: number) => {
  console.log('fetching new', new Date())
  const data = await fetcher()
  await Redis.set(key, JSON.stringify(data), 'EX', expires)
  return data
}
