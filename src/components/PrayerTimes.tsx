const PrayerTimes = () => {
  return (
    <div className="w-full p-4 text-gray-200 bg-gray-900 rounded-sm md:px-6">
      <h4 className="font-semibold text-center">London <span>(23 Oct)</span></h4>
      <main className="grid grid-cols-2 px-2 mt-4">
        <ul className="grid gap-1">
          <li>Fajr</li>
          <li>Sunrise</li>
          <li>Dhuhr</li>
          <li>Asr</li>
          <li>Maghrib</li>
          <li>Isha</li>
        </ul>
        <ul className="grid gap-1 justify-self-end">
          <li>05:12</li>
          <li>06:49</li>
          <li>11:49</li>
          <li>14:07</li>
          <li>16:38</li>
          <li>18:05</li>
        </ul>
      </main>
    </div>
  )
}

export default PrayerTimes