import { useEffect, useState } from 'react'
import SPeople from './SPeople'
import styles from './visitcounter.module.css'

export const VisitCounter = ({ min = 101, max = 115 }) => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setCounter(Math.floor(Math.random() * (min - max) + max))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(Math.floor(Math.random() * (min - max) + max))
    }, 12000)
    return () => clearInterval(interval)
  }, [counter])

  return (
    <section className={styles.cont}>
      <SPeople className={styles.icon} />
      <span className={styles.number} style={{ '--vwrs': counter }} />
    </section>
  )
}
