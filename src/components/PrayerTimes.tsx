import { useQuery } from 'react-query'
import { getPrayerTimes } from '../services/getPrayerTimesService';
import { Loader } from '@mantine/core';

const PrayerTimes = () => {

  const { error, isLoading, data } = useQuery('prayerTimes', getPrayerTimes)
  if (error) return <p className="font-semibold text-red-400">Failed to fetch prayer times, please try again later</p>
  console.log(data)

  return (
    <div className="w-full p-4 text-gray-200 bg-gray-900 rounded-sm md:px-6">
      <h4 className="font-semibold text-center">London <span>(23 Oct)</span></h4>
      <main className="grid grid-cols-2 px-2 mt-4">
        <ul className="grid gap-1">
          <li>Fajr</li>
          <li>Sunrise</li>
          <li>Dhuhr</li>
          <li>Asr</li>
          <li>Maghrib</li>
          <li>Isha</li>
        </ul>
        {isLoading ? placeholder : (
          <ul className="grid gap-1 justify-self-end">
            <li>05:12</li>
            <li>06:49</li>
            <li>11:49</li>
            <li>14:07</li>
            <li>16:38</li>
            <li>18:05</li>
          </ul>
        )}
      </main>
    </div>
  )
}

const placeholder = (
  <ul className="grid gap-1 justify-self-end">
    {[0, 0, 0, 0, 0, 0].map((_, k) => (
      <li key={k}><Loader size="sm" color="white" variant="dots" /></li>
    ))}
  </ul>
)

export default PrayerTimes