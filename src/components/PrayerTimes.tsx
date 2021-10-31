const PrayerTimes = () => {
  return (
    <div className="w-full p-4 text-gray-900 bg-gray-200 rounded">
      <main className="grid grid-cols-2 px-2">
        <ul>
          <li>Fajr</li>
          <li>Sunrise</li>
          <li>Dhuhr</li>
          <li>Asr</li>
          <li>Maghrib</li>
          <li>Isha</li>
        </ul>
        <ul className="justify-self-end">
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