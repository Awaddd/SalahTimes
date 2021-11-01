import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import PrayerTimes from '../components/PrayerTimes'
import { dateState } from '../state/global';
import { useSetRecoilState } from 'recoil';

import { Button } from '@mantine/core';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const Index = () => {

  const setDate = useSetRecoilState(dateState)

  const deincrementDate = () => setDate(date => date.date() > 1 ? date.subtract(1, 'day') : date)

  const incrementDate = () => setDate(date => date.date() < date.daysInMonth() ? date.add(1, 'day') : date)


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
              <Button leftIcon={<FiArrowLeft />} className="bg-gray-900 rounded-sm h-9" onClick={deincrementDate}>Previous</Button>
            </div>
            <div className="grid">
              <Button rightIcon={<FiArrowRight />} className="bg-gray-900 rounded-sm h-9" onClick={incrementDate}>Next</Button>
            </div>
          </section>
        </div>
      </main>
    </Main>
  );
};

export default Index;
