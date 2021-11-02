import dayjs from "dayjs"
import { atom } from "recoil"

export const dateState = atom({
  key: 'dateState',
  default: dayjs().startOf('day')
})
