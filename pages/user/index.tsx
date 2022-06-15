import React from 'react'
import styles from '../../styles/User.module.scss'

const User = () => {
  return (
    <div className={styles.user}>
        <h1 className='heading'>User heading</h1>
        <p className='para'>Lorem ipsum dolor sit amet.</p>
    </div>
  )
}

export default User