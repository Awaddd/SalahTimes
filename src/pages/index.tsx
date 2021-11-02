import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { getPrayerTimes } from '../services/getPrayerTimesService';
import PrayerTimes from '../components/PrayerTimes'
import Controls from '../components/Controls';

const Index = () => {

  const { error, isLoading, data } = useQuery('prayerTimes', getPrayerTimes)

  return (
    <Main meta={<Meta />}>
      <main className="h-full px-3 text-gray-200 md:py-10">
        <div className="max-w-screen-md md:mx-auto">
          {isLoading === false && error ? (
            (<p className="text-xl font-semibold text-center">Unable to fetch prayer times. Please try again later</p>)
          ) : (
            <>
              <section className="mt-6 text-center md:mt-0">
                <h2 className="text-2xl font-bold">-10:47:59</h2>
                <h3 className="font-semibold">05:12</h3>
              </section>
              <section className="mt-6 md:mt-8">
                <PrayerTimes data={data} isLoading={isLoading} />
              </section>
              <section className="grid grid-cols-2 gap-2 mt-2">
                <Controls />
              </section>
            </>
          )}
        </div>
      </main>
    </Main>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('prayerTimes', getPrayerTimes)

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default Index;
