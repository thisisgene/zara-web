import React, { Component } from 'react'

import ShoppingCart from '../ShoppingCart/ShoppingCart'

import styles from './ImageGridObject.module.sass'

export default class ImageGridObject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: [],
      showCart: false
    }
  }
  componentDidMount() {
    let cartArray = []
    this.props.content.map(item => {
      cartArray.push({ id: item.id, title: item.title, count: 0 })
    })
    this.setState({
      cart: cartArray
    })
  }

  emptyCart = () => {
    let cartArray = this.state.cart

    cartArray.map(item => (item.count = 0))
    this.setState({
      cart: cartArray
    })
  }

  increaseCount = id => {
    let cartArray = this.state.cart

    cartArray.filter(item => item.id === id).map(item => item.count++)
    this.setState({
      cart: cartArray
    })
  }
  decreaseCount = id => {
    let cartArray = this.state.cart

    cartArray.filter(item => item.id === id).map(item => item.count--)
    this.setState({
      cart: cartArray
    })
  }

  render() {
    const { content, lang } = this.props

    return (
      <div className={styles['grid-container']}>
        {content.map((item, index) => (
          <div key={index} className={styles['grid-item']}>
            <img src={`/assets/img/${item.image}`} alt={item.image} />
            <div className={styles['grid-item--links']}>
              <span>Download:</span>
              <div className={styles['grid-item--links__language']}>
                {item.links.map(link => (
                  <a href={link.link}>{link.linkText}</a>
                ))}
              </div>
              <span
                onClick={this.increaseCount.bind(this, item.id, this.title)}
              >
                {lang === 'de' ? 'In den Warenkorb' : 'Add to cart'}
              </span>
            </div>
          </div>
        ))}
        <ShoppingCart
          content={this.state.cart}
          emptyCart={this.emptyCart}
          lang={lang}
          increaseCount={this.increaseCount}
          decreaseCount={this.decreaseCount}
        />
      </div>
    )
  }
}
