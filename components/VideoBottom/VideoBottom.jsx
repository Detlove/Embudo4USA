import { useAula } from '@context/AulaContext'
import styles from './videobottom.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { NextLesson } from '@components/NexLesson/NextLesson'
import { LastStep } from '@components/LastStep/LastStep'

export const VideoBottom = () => {
  const { rStep, data, step, unlock } = useAula()

  const sectionVariants = {
    enter: {
      opacity: 0,
      x: '3%'
    },
    active: {
      opacity: 1,
      x: 0
    },
    exit: {
      opacity: 0,
      x: '-3%'
    }
  }

  return (
    <AnimatePresence
      exitBeforeEnter
      initial={false}
    >
      <motion.section
        className={styles.cont}
        key={step}
        initial='enter'
        animate='active'
        exit='exit'
        variants={sectionVariants}
        transition={{
          type: 'spring',
          duration: 0.5
        }}
      >
        {
          step < 4 &&
            <NextLesson {...{ data, step }} />
        }
        {
          step >= 4 &&
            <LastStep {...{ unlock, rStep }} />
        }
      </motion.section>
    </AnimatePresence>
  )
}
