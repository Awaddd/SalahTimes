import { dateState } from '../state/global';
import { useRecoilValue, useResetRecoilState } from 'recoil';

import clsx from 'clsx';
import dayjs from 'dayjs';
import { Loader, ActionIcon } from '@mantine/core';
import { FiRefreshCw } from 'react-icons/fi'
import { convertTime } from '../utils/helpers';

export interface PrayerTimesInterface {
  data: {
    times: {
      [key: string]: any
    }
  },
  isLoading?: boolean
}

const PrayerTimes = ({ data, isLoading }: PrayerTimesInterface) => {

  const date = useRecoilValue(dateState)
  const resetDate = useResetRecoilState(dateState)

  if (!data) return <></>

  const fajr = convertTime(`${data.times[date.format('YYYY-MM-DD')].fajr} AM`)
  const sunrise = convertTime(`${data.times[date.format('YYYY-MM-DD')].sunrise} AM`)

  const duhrDate = dayjs(`${date.format('YYYY-MM-DD')} ${data.times[date.format('YYYY-MM-DD')].dhuhr}`);
  const cap = dayjs(`${date.format('YYYY-MM-DD')} 11:00`)
  const duhr = convertTime(`${data.times[date.format('YYYY-MM-DD')].dhuhr} ${duhrDate > cap ? 'AM' : 'PM'}`)

  const asr = convertTime(`${data.times[date.format('YYYY-MM-DD')].asr} PM`)
  const maghrib = convertTime(`${data.times[date.format('YYYY-MM-DD')].magrib} PM`)
  const isha = convertTime(`${data.times[date.format('YYYY-MM-DD')].isha} PM`)

  return (
    <div className="w-full p-4 text-gray-200 bg-gray-900 rounded-sm md:px-6">
      <h4 className="font-semibold text-center">London</h4>
      <h3 className="relative text-center text-blue-400">
        <span className={clsx("mr-2", date.format('DD/MM/YYYY') == dayjs().startOf('day').format('DD/MM/YYYY') && "text-green-400")}>{date.format('DD MMMM')}</span>
        <ActionIcon variant="transparent" className="absolute inline text-gray-200" onClick={resetDate}>
          <FiRefreshCw />
        </ActionIcon>
      </h3>
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
            <li>{fajr}</li>
            <li>{sunrise}</li>
            <li>{duhr}</li>
            <li>{asr}</li>
            <li>{maghrib}</li>
            <li>{isha}</li>
          </ul>
        )}
      </main>
    </div>
  )
}

const placeholder = (
  <ul className="grid gap-1 justify-self-end">
    {[0, 0, 0, 0, 0, 0].map((_, k) => (
      <li key={k} className="grid items-center"><Loader size="sm" color="white" variant="dots" /></li>
    ))}
  </ul>
)

export default PrayerTimes