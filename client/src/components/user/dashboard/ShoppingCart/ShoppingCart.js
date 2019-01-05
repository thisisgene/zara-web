import React, { Component } from 'react'

import LongText from '../LongText/LongText'

import styles from './ShoppingCart.module.sass'
import { shoppingCartText } from '../../pages/Wissen/Publikationen/rassismusReport_data'

export default class ShoppingCart extends Component {
  render() {
    const {
      content,
      lang,
      emptyCart,
      decreaseCount,
      increaseCount,
      shoppingCartText
    } = this.props
    return (
      <div className={styles['shopping-cart']}>
        {shoppingCartText && <div>{shoppingCartText[lang].text}</div>}
        <div className={styles['shopping-cart--title']}>
          {lang === 'de' ? 'Warenkorb' : 'Shopping Cart'}
        </div>
        <div className={styles['shopping-cart--empty-button']}>
          <button onClick={emptyCart}>
            {lang === 'de' ? 'Warenkorb leeren' : 'Empty Cart'}
          </button>
        </div>
        {content.map(item => (
          <div>
            {item.count > 0 && (
              <div className={styles['shopping-cart--item']}>
                <div className={styles['shopping-cart--item__count']}>
                  <button onClick={() => decreaseCount(item.id)}>-</button>
                  {item.count}
                  <button onClick={() => increaseCount(item.id)}>+</button>
                </div>
                <div className={styles['shopping-cart--item__title']}>
                  {item.title}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }
}
