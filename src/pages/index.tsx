import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import PrayerTimes from '../components/PrayerTimes'
import { dateState } from '../state/global';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';

import clsx from 'clsx';
import { Button } from '@mantine/core';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const Index = () => {

  const [date, setDate] = useRecoilState(dateState)
  const [disabled, setDisabled] = useState<'prev' | 'next' | 'none'>('none')

  const deincrementDate = () => setDate(date => date.date() > 1 ? date.subtract(1, 'day') : date)
  const incrementDate = () => setDate(date => date.date() < date.daysInMonth() ? date.add(1, 'day') : date)

  useEffect(() => {
    if (date.date() === 1) setDisabled('prev')
    else if (date.date() === date.daysInMonth()) setDisabled('next')
    else if (disabled !== 'none' && (disabled === 'prev' || disabled === 'next')) setDisabled('none')
  }, [date, disabled])

  return (
    <Main meta={<Meta />}>
      <main className="h-full px-3 text-gray-200 md:py-10">
        <div className="max-w-screen-md md:mx-auto">
          <section className="mt-6 text-center md:mt-0">
            <h2 className="text-2xl font-bold">-10:47:59</h2>
            <h3 className="font-semibold">05:12</h3>
          </section>
          <section className="mt-6 md:mt-8">
            <PrayerTimes />
          </section>
          <section className="grid grid-cols-2 gap-2 mt-2">
            <div className="grid">
              <Button leftIcon={<FiArrowLeft />} className={clsx(activeButton, disabled === 'prev' && disabledButton)} onClick={deincrementDate}>Previous</Button>
            </div>
            <div className="grid">
              <Button rightIcon={<FiArrowRight />} className={clsx(activeButton, disabled === 'next' && disabledButton)} onClick={incrementDate}>Next</Button>
            </div>
          </section>
        </div>
      </main>
    </Main>
  );
};

const activeButton = "bg-gray-900 rounded-sm h-9"
const disabledButton ="bg-gray-darkest"

export default Index;
