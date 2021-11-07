import { dateState } from '../state/global';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';

import clsx from 'clsx';
import { Button } from '@mantine/core';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

function Controls() {

  const [date, setDate] = useRecoilState(dateState)
  const [disabled, setDisabled] = useState<'prev' | 'next' | 'none'>('none')

  const deincrementDate = () => setDate(date => date.date() > 1 ? date.subtract(1, 'day') : date)
  const incrementDate = () => setDate(date => date.date() < date.daysInMonth() ? date.add(1, 'day') : date)

  useEffect(() => {
    if (date.date() === 1) setDisabled('prev')
    else if (date.date() === date.daysInMonth()) setDisabled('next')
    else if (disabled !== 'none' && (disabled === 'prev' || disabled === 'next')) setDisabled('none')
  }, [date, disabled])

  return (
    <div className="grid grid-cols-2 gap-2 mt-2">
      <div className="grid">
        <Button leftIcon={<FiArrowLeft />} className={clsx(activeButton, disabled === 'prev' && disabledButton)} onClick={deincrementDate}>Previous</Button>
      </div>
      <div className="grid">
        <Button rightIcon={<FiArrowRight />} className={clsx(activeButton, disabled === 'next' && disabledButton)} onClick={incrementDate}>Next</Button>
      </div>
    </div>
  )
}

const activeButton = "bg-gray-900 rounded-sm h-9"
const disabledButton ="bg-gray-darkest"

export default Controls