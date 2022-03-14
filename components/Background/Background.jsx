import styles from './background.module.css'
export const Background = () => {
  return (
    <picture className={styles.cont}>
      <source media='(min-width: 800px)' srcSet='/assets/bg_desk.webp' type='image/webp' />
      <source media='(min-width: 800px)' srcSet='/assets/bg_desk.png' />
      <source srcSet='/assets/bg_mb.webp' type='image/webp' />
      <img src='/assets/bg_mb.png' />
    </picture>
  )
}
