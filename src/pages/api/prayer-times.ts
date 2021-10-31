const nc = require('next-connect');
const cors = require('cors')

import { prayerTimesApiKey } from "./../../../config.json";
import { NextApiRequest, NextApiResponse } from "next";
import dayjs from "dayjs";

const handler = nc().use(cors()).get(async (req: NextApiRequest, res: NextApiResponse) => {

  const response = await fetch(
    `https://www.londonprayertimes.com/api/times/?format=json&key=${prayerTimesApiKey}&year=${dayjs().year()}&month=${
      dayjs().month() + 1
    }`
  )

  const prayerTimes = await response.json()

  res.statusCode = 200
  res.send(prayerTimes)

})

export default handler