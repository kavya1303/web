import React from 'react'
import './AppStyles.css'
import styles from './AppStyles.module.css'

function AppStyles() {
  return (
    <div>
        <h1 className="success">Message sent sucessfully</h1>
        <h1 className="error">Message failed to deliver</h1>

        <br />
        <h1 className={styles.success}>Message sent sucessfully</h1>
        <h1 className={styles.error}>Message failed to deliver</h1>
    </div>
  )
}

export default AppStyles