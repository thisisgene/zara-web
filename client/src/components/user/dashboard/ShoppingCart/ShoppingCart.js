import React, { Component } from 'react'

import styles from './ShoppingCart.module.sass'

export default class ShoppingCart extends Component {
  render() {
    const {
      content,
      lang,
      emptyCart,
      decreaseCount,
      increaseCount
    } = this.props
    return (
      <div className={styles['shopping-cart']}>
        <div>
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
                <div>{item.title}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }
}
