import dayjs from "dayjs"
import { atom } from "recoil"

export const dateState = atom({
  key: 'date',
  default: dayjs().startOf('day')
})
