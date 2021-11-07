// @ts-nocheck

export const convertTime = (twelveHourTime: string | number) => {
  if (twelveHourTime == null) return

  const [time, modifier] = twelveHourTime.split(' ')
  let [hours, minutes] = time.split(':')

  if (hours === '12') hours = '00'
  if (modifier === 'PM') hours = parseInt(hours, 10) + 12

  return `${hours}:${minutes}`
}
