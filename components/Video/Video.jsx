import Vimeo from '@u-wave/react-vimeo'
import { useState } from 'react'
import { useAula } from '@context/AulaContext'

import { motion, AnimatePresence } from 'framer-motion'

import styles from './video.module.css'
export const Video = () => {
  const { setUnlock, data, step, pauseVideo } = useAula()
  const { id, pageTitle } = data[step]

  const [finish, setFinish] = useState(false)

  const onTimeUpdate = ({ percent }) => {
    if (percent > data[step].pntToUnlock) {
      setUnlock(true)
    }
  }

  const onEnd = () => {
    setFinish(true)
  }

  const onSeeked = ({ percent }) => {
    const pnt = (percent * 100).toFixed(1)
    /* Send Event to Analytics */
    window.gtag('event', 'seek_player', {
      value: pnt,
      page_title: pageTitle,
      page_location: document.URL
    })
  }

  const variants = {
    enter: {
      opacity: 0,
      x: '3%'
    },
    center: {
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
      onExitComplete={() => {
        setFinish(false)
        setUnlock(false)
      }}
    >
      <motion.section
        className={styles.cont}
        key={id}
        initial='enter'
        animate='center'
        exit='exit'
        variants={variants}
        transition={{
          type: 'spring',
          duration: 0.5
        }}
      >
        <h1 className={styles.title}>{data[step].thtml}
        </h1>
        <Vimeo
          video={id}
          className={`${styles.player} ${finish ? styles.hide : ''}`}
          controls={false}
          showPortrait={false}
          showTitle={false}
          showByline={false}
          autoplay={!pauseVideo}
          color='FF6363'
          paused={pauseVideo}
          onSeeked={onSeeked}
          onTimeUpdate={onTimeUpdate}
          onEnd={onEnd}
        />
      </motion.section>
    </AnimatePresence>
  )
}
