const baseURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : 'https://salahtimes.vercel.app/'
export const getPrayerTimes = () => fetch(`${baseURL}/api/prayer-times`).then(res => res.json())
