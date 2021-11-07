import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { fetch } from '../redis/cache'
import { getPrayerTimes } from '../services/getPrayerTimesService';
import PrayerTimes from '../components/PrayerTimes'
import Controls from '../components/Controls';
import { motion } from "framer-motion";

const Index = ({prayerTimes}: any) => {
  return (
    <Main meta={<Meta />}>
      <main className="h-full px-3 text-gray-200 md:py-10">
        <div className="max-w-screen-md md:mx-auto">
          <>
            <section className="mt-6 text-center md:mt-0">
              <h2 className="text-2xl font-bold">-10:47:59</h2>
              <h3 className="font-semibold">05:12</h3>
            </section>
            <motion.section variants={animation} initial="hidden" animate="visible" className="mt-6 md:mt-8">
              <PrayerTimes data={prayerTimes} />
              <Controls />
            </motion.section>
          </>
        </div>
      </main>
    </Main>
  );
};

export async function getServerSideProps() {
  const prayerTimes = await fetch('prayer-times', getPrayerTimes, 60 * 60 * 24)

  return {
    props: {
      prayerTimes
    }
  }
}

const animation = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default Index;
