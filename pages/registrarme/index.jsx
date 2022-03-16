import Head from 'next/head'
import { useApp } from '@context/AppContext'
import { useEffect } from 'react'

import styles from './registrarme.module.scss'

const Registrarme = () => {
  const { setLoader } = useApp()

  useEffect(() => {
    setLoader(false)
  }, [])

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
        </section>
      </main>
    </>
  )
}

export default Registrarme
