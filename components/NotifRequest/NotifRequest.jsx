import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useTransition, animated as a, config } from 'react-spring'
import OneSignal from 'react-onesignal'
import { useAula } from '@context/AulaContext'

import styles from './notifrequest.module.css'

export const NotifRequest = ({ showIn }) => {
  const { step, setPauseVideo } = useAula()
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (step === showIn) {
      OneSignal.init({
        appId: `${process.env.NEXT_PUBLIC_ONESIGNAL_ID}`,
        welcomeNotification: {
          disable: true
        },
        allowLocalhostAsSecureOrigin: true
      })
      setPauseVideo(true)
      setShow(true)
    }
  }, [step])

  const subscribeOnesignal = async () => {
    await OneSignal.showNativePrompt()
    setShow(false)
    setPauseVideo(false)
  }

  const transition = useTransition(show, {
    initial: { opacity: 0 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.default
  })

  return transition((style, item) =>
    item &&
      <a.div
        className={styles.section}
        style={style}
      >
        <div className={styles.cont}>
          <picture className={styles.bell}>
            <Image src='/assets/bell.png' width={200} height={258} />
          </picture>
          <h2>HABILITA LAS NOTIFICACIONES</h2>
          <p>Ya casi terminas el entrenamiento, pero aún tengo más contenido de valor que quiero darte.<br /><br />Habilita las notificaciones y sigamos en contacto 😉
          </p>
          <button
            className={styles.btnallow}
            onClick={subscribeOnesignal}
          >Si, permitir
          </button>
          <button
            onClick={() => {
              setShow(false)
              setPauseVideo(false)
            }}
          >Talvez luego
          </button>
        </div>
      </a.div>
  )
}
