import React, { Component } from 'react'

import ShoppingCart from '../ShoppingCart/ShoppingCart'

import styles from './MosaikGridObject.module.sass'

export default class MosaikGridObject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: [],
      showCart: false
    }
  }

  render() {
    const { content, lang } = this.props

    return (
      <div>
        <div className={styles['grid-container']}>
          {content.map((item, index) => (
            <a href={item.link}>
              <div key={index} className={styles['grid-item']}>
                <img src={`/assets/img/${item.image}`} alt={item.image} />
                <div className={styles['grid-item--links']}>
                  <div className={styles['grid-item--links__language']} />
                  <div>{item[lang].text}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    )
  }
}
