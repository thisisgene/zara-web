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
    const lang = this.props.lang
    this.props.content.map(item => {
      cartArray.push({ id: item.id, title: item[lang].title, count: 0 })
    })
    this.setState({
      cart: cartArray
    })
  }

  cartShouldBeVisible = () => {
    let totalAmount = 0
    let cartArray = this.state.cart

    cartArray.map(item => (totalAmount += item.count))
    totalAmount > 0
      ? this.setState({ showCart: true })
      : this.setState({ showCart: false })
  }
  emptyCart = () => {
    let cartArray = this.state.cart

    cartArray.map(item => (item.count = 0))
    this.setState({
      cart: cartArray
    })
    this.cartShouldBeVisible()
  }

  increaseCount = id => {
    let cartArray = this.state.cart

    cartArray.filter(item => item.id === id).map(item => item.count++)
    this.setState({
      cart: cartArray
    })
    this.cartShouldBeVisible()
  }
  decreaseCount = id => {
    let cartArray = this.state.cart

    cartArray.filter(item => item.id === id).map(item => item.count--)
    this.setState({
      cart: cartArray
    })
    this.cartShouldBeVisible()
  }

  render() {
    const { content, lang, shoppingCartText, withCart } = this.props

    return (
      <div>
        <div className={styles['grid-container']}>
          {content.map((item, index) => (
            <div key={index} className={styles['grid-item']}>
              <img src={`/assets/img/${item.image}`} alt={item.image} />
              {/* https://serpig-space.ams3.digitaloceanspaces.com/img/zara_rr/pdf/racism-report-2015.pdf */}
              <div className={styles['grid-item--links']}>
                <div className={styles['grid-item--title']}>
                  {item[lang].title}
                </div>
                <span>Download:</span>
                <div className={styles['grid-item--links__language']}>
                  {item.links.map(link => (
                    <a
                      target="blank"
                      href={`https://assets.seriouspigeon.com/download/${
                        link.link
                      }`}
                    >
                      {link.linkText}
                    </a>
                  ))}
                </div>
                {item.toOrder && (
                  <button
                    onClick={this.increaseCount.bind(this, item.id, this.title)}
                  >
                    {lang === 'de' ? 'In den Warenkorb' : 'Add to cart'}
                  </button>
                )}
                {item[lang].addInfo && <div>{item[lang].addInfo}</div>}
              </div>
            </div>
          ))}
        </div>
        {withCart && this.state.showCart && (
          <div className={styles['shopping-cart-container']}>
            <ShoppingCart
              content={this.state.cart}
              emptyCart={this.emptyCart}
              lang={lang}
              increaseCount={this.increaseCount}
              decreaseCount={this.decreaseCount}
              shoppingCartText={shoppingCartText}
            />
          </div>
        )}
      </div>
    )
  }
}
