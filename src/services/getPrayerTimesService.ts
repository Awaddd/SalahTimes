
export const getPrayerTimes = () => fetch('http://localhost:3000/api/prayer-times').then(res => res.json())
