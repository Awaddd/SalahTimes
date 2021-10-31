import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { useQuery } from 'react-query'
import PrayerTimes from '../components/PrayerTimes'

import { Button } from '@mantine/core';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { getPrayerTimes } from '../services/getPrayerTimesService';

const Index = (props: { prayerTimes: any }) => {

  const { data } = useQuery('prayerTimes', getPrayerTimes, { initialData: props.prayerTimes })

  return (
    <Main meta={<Meta />}>
      <main className="h-full px-3 text-gray-200 md:py-10">
        <div className="max-w-screen-md md:mx-auto">
          <section className="mt-6 text-center md:mt-0">
            <h2 className="text-2xl font-bold">-10:47:59</h2>
            <h3 className="font-semibold">05:12</h3>
          </section>
          <section className="mt-6 md:mt-8">
            <PrayerTimes prayerTimes={data} />
          </section>
          <section className="grid grid-cols-2 gap-2 mt-2">
            <div className="grid">
              <Button leftIcon={<FiArrowLeft />} className="bg-gray-900 rounded-sm h-9">Previous</Button>
            </div>
            <div className="grid">
              <Button rightIcon={<FiArrowRight />} className="bg-gray-900 rounded-sm h-9">Next</Button>
            </div>
          </section>
        </div>
      </main>
    </Main>
  );
};

export async function getServerSideProps() {
  const prayerTimes = await getPrayerTimes()
  return { props: { prayerTimes } }
}

export default Index;
