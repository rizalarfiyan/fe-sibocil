import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

const useTimeLeft = (rawTimeLeft: number) => {
  const [formattedTime, setFormattedTime] = useState('00:00')
  const [timeLeft, setTimeLeft] = useState(rawTimeLeft)

  useEffect(() => {
    setTimeLeft(rawTimeLeft)
  }, [rawTimeLeft])

  useEffect(() => {
    const intervalId = setInterval(() => {
      const minutes = Math.floor(timeLeft / 60)
      const seconds = timeLeft % 60

      const formattedTime = dayjs()
        .set('minute', minutes)
        .set('second', seconds)
        .format('mm:ss')
      setFormattedTime(formattedTime)

      if (timeLeft >= 0) {
        setTimeLeft((prev) => prev - 1)
      } else {
        clearInterval(intervalId)
      }
    }, 1000)

    return () => clearInterval(intervalId)
  }, [timeLeft])

  return {
    isFinish: timeLeft < 0,
    time: formattedTime,
  }
}

export default useTimeLeft
