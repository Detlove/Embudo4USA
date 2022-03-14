import Head from 'next/head'
import { AulaProvider, useAula } from '@context/AulaContext'

import { Analytics } from '@components/Analytics/Analytics'

import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { VisitCounter } from '@components/VisitCounter/VisitCounter'
import { Video } from '@components/Video/Video'
import { NextLesson } from '@components/NexLesson/NextLesson'
import { LastStep } from '@components/LastStep/LastStep'
import { Landing } from '@components/Landing/Landing'
import { Background } from '@components/Background/Background'
import { NotifRequest } from '@components/NotifRequest/NotifRequest'

import styles from './aula.module.css'

export default ({ setLoader }) => {
  return (
    <AulaProvider {...{ setLoader }}>
      <Aula />
    </AulaProvider>
  )
}

const Aula = () => {
  const {
    data,
    step,
    showLanding
  } = useAula()

  return (
    <>
      <Head>
        <title>Clase {step} | {data[step].title}</title>
      </Head>
      <Analytics />
      <NotifRequest showIn={4} />
      <main className={styles.cont}>
        <Background />
        <VisitCounter />
        <ProgressBar />
        <Video />
        {
          step < 4 &&
            <NextLesson />
        }
        {
          step >= 4 &&
            <LastStep />
        }
      </main>
      {
        showLanding &&
          <Landing />
      }
    </>
  )
}
