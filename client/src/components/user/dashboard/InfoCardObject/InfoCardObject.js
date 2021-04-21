import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import IconObject from '../IconObject/IconObject'

import cx from 'classnames'
import styles from './InfoCardObject.module.sass'
import ButtonObject from '../ButtonObject/ButtonObject'

class InfoCardObject extends Component {
  render() {
    const { direction, card, lang } = this.props
    return (
      <div
        className={cx(styles['info-card'], {
          [styles[card.color]]: card.color,
          [styles[direction]]: direction,
        })}
      >
        <div>
          <div className={styles['info-card--title-box']}>
            {card.image && <IconObject image={card.image} />}
            <h2>{card.title}</h2>
            {card.titleImage && (
              <div className={styles['title-image']}>
                <img src={`/assets/img/${card.titleImage}`} alt="" />
              </div>
            )}
          </div>
          <div className={styles['info-card--body']}>
            <div
              className={styles['info-card--body__text']}
              dangerouslySetInnerHTML={{ __html: card.text }}
            />
            {card.listItems && (
              <ul className={styles['info-card--body__list']}>
                {card.listItems &&
                  card.listItems.map((item, index) => (
                    <li key={index}>
                      <IconObject image="listArrow" />
                      <span>{item.text}</span>
                    </li>
                  ))}
              </ul>
            )}
            {card.buttons && (
              <div className={styles['info-card--body__buttons']}>
                {card.buttons.map((button, index) => (
                  <div style={{ marginBottom: '15px' }}>
                    <ButtonObject key={index} button={button} lang={lang} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {card.linkType && card.linkType === 'button' ? (
          card.multiButton === true ? (
            <div className={styles['info-box--buttons']}>
              {card.buttons.map((button, index) => (
                <div className={styles['info-card--button']} key={index}>
                  <ButtonObject button={button} lang={lang} />
                </div>
              ))}
            </div>
          ) : (
            card.button && (
              <div className={styles['info-card--button']}>
                <ButtonObject button={card.button} lang={lang} />
              </div>
            )
          )
        ) : (
          <div className={styles['info-card--link']}>
            {card.linkPath === 'external' ? (
              <a target="blank" href={card.link}>
                {card.linkText}
              </a>
            ) : (
              <Link to={`/${lang}/${card.link}`}>{card.linkText}</Link>
            )}
          </div>
        )}
      </div>
    )
  }
}

export default InfoCardObject
