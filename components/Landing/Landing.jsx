import { useAula } from '@context/AulaContext'
import Script from 'next/script'
import Head from 'next/head'
import Image from 'next/image'

import styles from './landing.module.scss'

export const Landing = () => {
  const { goPurchase } = useAula()
  return (
    <>
      <Head>
        <link rel='stylesheet' type='text/css' href='/flipdown.css' />
      </Head>
      <Script src='/flipdown.js' strategy='afterInteractive' />
      <section className={styles.message}>
        <p id='test'>Pero como lo bueno no dura para siempre y sabemos <strong>el valor que aporta este entrenamiento</strong>, necesitamos ponerle un tiempo límite</p>
      </section>
      <section className={styles.sale} id='landing'>
        <div className={styles.sale_cont}>
          <div id='flipdown' className={`flipdown ${styles.flipdown}`} />
          <h2>¿ESTÁS LISTO PARA <strong>IMPORTAR TUS PRODUCTOS DESDE USA?</strong></h2>
          <picture
            className={styles.img}
            onClick={() => goPurchase('mockup')}
          >
            <Image src='/assets/box.png' width={600} height={445} layout='responsive' />
          </picture>
          <span className={styles.price}>ÚNICO PAGO DE <strong>$97 USD</strong></span>
          <span className={styles.price2}>o en 12 cuotas de <strong>$8 USD</strong></span>
          <button
            className={styles.button}
            onClick={() => goPurchase('btn2')}
          >
            !ESTOY LISTO, PARA IMPORTAR DESDE USA!
          </button>
          <picture className={styles.payments}>
            <Image
              src='/assets/payments.png'
              width={569}
              height={77}
              onClick={() => goPurchase('payments')}
            />
          </picture>
        </div>
      </section>
    </>
  )
}
