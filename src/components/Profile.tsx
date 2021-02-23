import styles  from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/bgodii.png" alt="Renan Dantas"/>
      <div>
        <strong>Renan Dantas</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1</p>
      </div>
    </div>
  )
}