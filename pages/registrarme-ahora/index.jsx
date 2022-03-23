import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Head from 'next/head'
import PlayBtn from '@components/SVG/PlayBtn/PlayBtn'

import styles from './styles/registrarme.module.scss'

const Registrarme = () => {
  const router = useRouter()

  useEffect(() => {
    window.fbq('track', 'PageView')
    window.fbq('track', 'ViewContent')

    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: document.URL,
      send_to: `${process.env.NEXT_PUBLIC_GTAG_ID}`
    })
  }, [])

  const goAula = () => {
    router.replace('/aula/[step]', '/aula/1')
  }
  return (
    <>
      <Head>
        <title>Entrenamiento Online 100% Gratuito | Importa desde USA</title>
      </Head>
      <main className={styles.main}>
        <picture className={styles.bg}>
          <source media='(min-width: 800px)' srcSet='/assets/bg_desk.webp' type='image/webp' />
          <source media='(min-width: 800px)' srcSet='/assets/bg_desk.png' />
          <source srcSet='/assets/bg_mb.webp' type='image/webp' />
          <img src='/assets/bg_mb.png' />
        </picture>
        <section className={styles.top}>
          Entrenamiento Online <strong>100% Gratuito</strong>
        </section>
        <section className={styles.present}>
          <h1>¿COMO <strong>IMPORTAR DESDE USA</strong> SIN SALIR DE TU CASA 🏠?</h1>
          <div className={styles.present_cont}>
            <picture
              className={styles.present_video}
              onClick={goAula}
            >
              <PlayBtn className={styles.present_video_icon} />
              <source srcSet='/assets/video.webp' type='image/webp' />
              <img src='/assets/video.png' />
            </picture>
            <div className={styles.present_text}>
              <p>El paso a paso que te permitirá conseguir hasta 70% de descuento comprando productos originales en USA y traerlos hasta la puerta de tu CASA 🏠</p>
              <button onClick={goAula}>QUIERO INGRESAR AL ENTRENAMIENTO</button>
            </div>
          </div>
          <p className={styles.present_p}>Accede al entrenamiento y descubre como yo y cientos de alumnos lo estamos haciendo</p>
        </section>
        <section className={styles.copy}>
          <span>Emprendelandia 2022</span>
        </section>
      </main>
    </>
  )
}

export default Registrarme
