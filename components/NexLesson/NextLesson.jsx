import styles from './nextlesson.module.scss'
import { useAula } from '@context/AulaContext'
import { motion, useAnimation } from 'framer-motion'

import SLock from './SLock'

const MotionSLock = motion(SLock)

export const NextLesson = (props) => {
  const { data, step } = props
  const { router, unlock } = useAula()

  const lockTry = useAnimation()

  const buttonVariants = {
    lock: {
      opacity: 0.7,
      x: 0
    },
    unlock: {
      opacity: 1,
      transition: {
        duration: 1
      }
    },
    unlock_bounce: {
      x: [0, -5, 5, -3, 3, -1, 1, 0],
      transition: {
        repeat: Infinity,
        duration: 2,
        repeatDelay: 0.5
      }
    },
    whileTap: {
      scale: 0.975
    }
  }

  const lockSVGVariants = {
    active: {
      opacity: 1
    },
    inactive: {
      opacity: 0
    }
  }

  const goNext = () => {
    unlock
      ? router.push('/aula/[step]', `/aula/${step + 1}`, {
          scroll: false
        })
      : lockTry.start({
        opacity: [0.9, 0, 0.9],
        transition: {
          repeat: 1,
          repeatType: 'mirror',
          duration: 0.6
        }
      })
  }

  return (
    <>
      <h3 className={styles.title}>Siguiente clase</h3>
      <motion.div
        className={styles.button}
        animate={unlock ? ['unlock', 'unlock_bounce'] : 'lock'}
        variants={buttonVariants}
        transition={{
          type: 'spring',
          duration: 0.5
        }}
        onClick={goNext}
        whileTap='whileTap'
      >
        <picture>
          <img src={`/assets/video-${step + 1}.png`} />
          <MotionSLock
            className={styles.lockicon}
            animate={unlock ? 'inactive' : 'active'}
            variants={lockSVGVariants}
          />
        </picture>
        <div className={styles.button_text}>
          <p className={styles.button_text_nc}>CLASE {step + 1}</p>
          <p className={styles.button_text_nct}>{data[step + 1].title}</p>
        </div>
      </motion.div>

      <motion.p
        className={styles.message}
        animate={lockTry}
      >
        Necesitas terminar de ver esta clase para desbloquear la siguiente
      </motion.p>
    </>
  )
}
