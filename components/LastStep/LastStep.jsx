import { motion, AnimatePresence } from 'framer-motion'
import { useAula } from '@context/AulaContext'
import { useState, useEffect } from 'react'

import SClock from './SClock'
import SGift from './SGift'

import styles from './laststep.module.css'

export const LastStep = (props) => {
  const { rStep } = props
  const { goPurchase, router, unlock } = useAula()

  const [iStep, setIStep] = useState(1)

  useEffect(() => {
    rStep === 4 && setIStep(1)
    unlock && setIStep(2)
    rStep === 5 && setIStep(3)
  }, [rStep, unlock])

  const sectionVariants = {
    enter: {
      opacity: 0
    },
    active: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  }

  const divVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 2
      }
    },
    hidden: { opacity: 0 }
  }

  const childrenVariants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5
      }
    },
    hidden: { opacity: 0 }
  }

  const handleGiftClick = () => {
    router.push('/aula/[step]', '/aula/5', {
      scroll: false
    })
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.section
        className={styles.cont}
        key={iStep}
        initial='enter'
        animate='active'
        exit='exit'
        transition={{
          duration: 1
        }}
        variants={sectionVariants}
      >
        {
          iStep === 1 &&
            <>
              <h3 className={styles.title}>Estamos preparando algo especial para ti</h3>
              <SClock
                className={styles.clock}
                width='80px'
                height='80px'
                stroke='#fff'
              />
              <p className={styles.text}>Continua reproduciendo el video, porque dentro de poco te revelaremos algo muy especial</p>
            </>
          }
        {
          iStep === 2 &&
            <>
              <h3 className={styles.title}>Presiona el regalo y revela el precio especial que tenemos para ti</h3>
              <SGift
                className={styles.gift}
                width='100px'
                height='100px'
                fill='#fff'
                onClick={handleGiftClick}
              />
            </>
          }
        {
          iStep === 3 &&
            <motion.div
              initial='hidden'
              animate='visible'
              variants={divVariants}
            >
              <motion.p variants={childrenVariants}>Sabemos que realmente quieres importar tus productos desde USA
              </motion.p>
              <motion.p className={styles.t2} variants={childrenVariants}>Por ello el precio especial que tenemos para ti
                tiene un <strong>DESCUENTO DE $50 USD!</strong>
              </motion.p>
              <motion.div
                className={styles.price}
                onClick={() => goPurchase('btn1')}
                variants={childrenVariants}
              >
                <span>Precio sin descuento: <s>$147 USD</s></span>
                <p>Ahora<strong>$97 USD</strong> </p>
              </motion.div>
            </motion.div>
        }
      </motion.section>
    </AnimatePresence>
  )
}
