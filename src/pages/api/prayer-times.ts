
import { NextApiRequest, NextApiResponse } from "next";
import { prayerTimesApiKey } from "./../../../config.json";
import dayjs from "dayjs";

export default async function handler (_: NextApiRequest, res: NextApiResponse) {

  const response = await fetch(
    `https://www.londonprayertimes.com/api/times/?format=json&key=${prayerTimesApiKey}&year=${dayjs().year()}&month=${
      dayjs().month() + 1
    }`
  )

  const prayerTimes = await response.json()
  res.status(200).send(prayerTimes)

}