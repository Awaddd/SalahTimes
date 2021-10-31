import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import PrayerTimes from '../components/PrayerTimes'

const Index = () => {
  return (
    <Main meta={<Meta />}>
      <main className="px-3 py-4 text-gray-200 bg-blue-500">
        {/* <h1 className="text-2xl font-bold">London</h1> */}
        <section className="text-center">
          {/* next prayer  & countdown*/}
          <h2 className="text-2xl font-bold">-10:47:59</h2>
          <h3 className="font-semibold">05:12</h3>
          {/* <span className="text-sm">31 Oct</span> */}
        </section>
        <section className="mt-4">
          {/* prayer times */}
          <PrayerTimes />
        </section>
        <section>
          {/* controls */}
        </section>
      </main>
    </Main>
  );
};

export default Index;
