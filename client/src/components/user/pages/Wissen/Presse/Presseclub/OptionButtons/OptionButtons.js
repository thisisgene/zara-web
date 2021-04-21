import React from 'react'

import cx from 'classnames'
import styles from './OptionButtons.module.sass'

export default function OptionButtons(props) {
  const { content, lang, setActiveCategory, activeCategory } = props
  return (
    <div className={styles['button-wrapper']}>
      {content[lang].cards.map(card => (
        <div
          className={cx(styles['card'], {
            [styles['active']]: card.button.category === activeCategory,
            [styles['disabled']]:
              activeCategory !== '' && card.button.category !== activeCategory,
          })}
          onClick={() => setActiveCategory(card.button.category)}
        >
          <h1>{card.title}</h1>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  )
}
