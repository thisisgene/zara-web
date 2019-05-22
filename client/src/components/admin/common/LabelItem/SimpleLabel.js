import React from 'react'

import styles from './LabelItem.module.sass'

const SimpleLable = ({ onEditClick, color, title }) => {
  return (
    <div
      className={styles['label-item--basic']}
      onClick={onEditClick || null}
      style={{ backgroundColor: color }}
    >
      <span
        className={styles['label-item--basic__fill']}
        style={{ backgroundColor: color }}
      />
      <div
        className={styles['label-item--basic__text']}
        style={{ '--color': color }}
      >
        {title}
      </div>
    </div>
  )
}

export default SimpleLable
