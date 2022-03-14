import { useState, useEffect } from 'react'
import { useAula } from '@context/AulaContext'
import styles from './progressbar.module.css'

export const ProgressBar = () => {
  const { step, dataLength } = useAula()
  const [val, setVal] = useState(0)

  useEffect(() => {
    const value = step * (100 / dataLength)
    setVal(value > 99 ? 99 : value)
  }, [step])

  return (
    <section className={styles.cont}>
      <p className={styles.text} style={{ '--pnt': val }}>% Completado</p>
      <div className={styles.bar}>
        <div className={styles.bar_fill} style={{ width: val + '%' }} />
      </div>
    </section>
  )
}
