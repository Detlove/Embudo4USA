import Head from 'next/head'
import { AulaProvider, useAula } from '@context/AulaContext'

import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { VisitCounter } from '@components/VisitCounter/VisitCounter'
import { Video } from '@components/Video/Video'
import { Landing } from '@components/Landing/Landing'
import { Background } from '@components/Background/Background'
import { VideoBottom } from '@components/VideoBottom/VideoBottom'

import styles from './aula.module.css'

export default (props) => {
  return (
    <AulaProvider>
      <Aula {...props} />
    </AulaProvider>
  )
}

const Aula = () => {
  const {
    data,
    step,
    rStep
  } = useAula()

  const { pageTitle } = data[step]

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main className={styles.section}>
        <Background />
        <VisitCounter />
        <section className={styles.cont}>
          <ProgressBar />
          <Video />
          <VideoBottom />
        </section>
      </main>
      {
        rStep === 5 &&
          <Landing />
      }
    </>
  )
}
