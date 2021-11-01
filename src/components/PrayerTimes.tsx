import { useQuery } from 'react-query'
import { getPrayerTimes } from '../services/getPrayerTimesService';
import { dateState } from '../state/global';
import { useRecoilValue } from 'recoil';
import { Loader } from '@mantine/core';

const PrayerTimes = () => {

  const date = useRecoilValue(dateState)

  const { error, isLoading, data } = useQuery('prayerTimes', getPrayerTimes)
  if (error) return <p className="font-semibold text-red-400">Failed to fetch prayer times, please try again later</p>
  if (!data) return <></>

  const times = data.times
  const current = times["2021-11-01"]

  return (
    <div className="w-full p-4 text-gray-200 bg-gray-900 rounded-sm md:px-6">
      <h4 className="font-semibold text-center">London</h4>
      <h3 className="text-center text-blue-400">{date.format('DD MMMM')}</h3>
      
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
            <li>{current.fajr}</li>
            <li>{current.sunrise}</li>
            <li>{current.dhuhr}</li>
            <li>{current.asr}</li>
            <li>{current.magrib}</li>
            <li>{current.isha}</li>
          </ul>
        )}
      </main>
    </div>
  )
}

/*
format reference
05:12
06:49
11:49
14:07
16:38
18:05
*/

const placeholder = (
  <ul className="grid gap-1 justify-self-end">
    {[0, 0, 0, 0, 0, 0].map((_, k) => (
      <li key={k}><Loader size="sm" color="white" variant="dots" /></li>
    ))}
  </ul>
)

export default PrayerTimes