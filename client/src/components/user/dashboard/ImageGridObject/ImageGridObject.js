import React, { Component } from 'react'

import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { sendOrder, resetOrder } from '../../../../actions/userActions'

import ShoppingCart from '../ShoppingCart/ShoppingCart'
import Spinner from '../Spinner/Spinner'
import TextFieldGroup from '../InputGroups/TextFieldGroup'
import TextareaFieldGroup from '../InputGroups/TextareaFieldGroup'

import cx from 'classnames'
import styles from './ImageGridObject.module.sass'

class ImageGridObject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: [],
      showCart: false,
      saving: false,
      orderSent: false,
      fname: '',
      lname: '',
      street: '',
      city: '',
      email: '',
      addInfo: '',
      approved: false,
      errors: {}
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
  componentWillUnmount() {
    this.props.resetOrder()
    this.resetOrder()
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.user &&
      prevProps !== this.props &&
      this.props.user.orderSent
    ) {
      console.log('UPDATE')
      this.setState({
        orderSent: true
      })
    }

    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors })
    }
  }
  resetOrder = () => {
    this.setState({
      cart: [],
      showCart: false,
      saving: false,
      orderSent: false,
      fname: '',
      lname: '',
      street: '',
      city: '',
      email: '',
      addInfo: '',
      approved: false,
      errors: {}
    })
  }
  onChange = e => {
    if (e.target.name !== 'approved') {
      this.setState({
        [e.target.name]: e.target.value
      })
    } else {
      this.setState({
        [e.target.name]: e.target.checked
      })
    }
    console.log(this.state.approved)
  }
  onSubmit = e => {
    e.preventDefault()

    // if (this.state.errors.length == 0) {
    this.setState({ errors: {}, saving: true })

    const order = this.state.cart.filter(item => item.count > 0)
    const newOrder = {
      items: order,
      fname: this.state.fname,
      lname: this.state.lname,
      street: this.state.street,
      city: this.state.city,
      email: this.state.email,
      addInfo: this.state.addInfo
    }
    this.props.sendOrder(newOrder, this.props.history)
    // }
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
    const { errors } = this.state
    return (
      <div>
        <Spinner
          nowActive={
            this.state.saving && Object.keys(this.state.errors).length == 0
          }
        />
        <div className={styles['grid-container']}>
          {content.map((item, index) => (
            <div
              key={index}
              className={cx(styles['grid-item'], {
                [styles['is-fresh']]: item.isFresh
              })}
            >
              <img src={`/assets/img/${item.image}`} alt={item.image} />
              {/* https://serpig-space.ams3.digitaloceanspaces.com/img/zara_rr/pdf/racism-report-2015.pdf */}
              <div className={styles['grid-item--links']}>
                <div className={styles['grid-item--title']}>
                  {item[lang].title}
                </div>
                <span>Online Download:</span>
                <div className={styles['grid-item--links__language']}>
                  {item.links.map(link => (
                    <a
                      target="blank"
                      href={`https://assets.zara.or.at/download/${link.link}`}
                      // onClick={this.props.onShowSurvey}
                    >
                      {link.linkText}
                    </a>
                  ))}
                </div>
                {item.toOrder && (
                  <div>
                    <hr />
                    <button
                      onClick={this.increaseCount.bind(
                        this,
                        item.id,
                        this.title
                      )}
                    >
                      {lang === 'de'
                        ? 'Druckversion Bestellen'
                        : 'Order print version'}
                    </button>
                  </div>
                )}
                {item[lang].addInfo && <div>{item[lang].addInfo}</div>}
              </div>
            </div>
          ))}
        </div>
        {withCart && this.state.showCart && (
          <div>
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
            {!this.state.orderSent ? (
              <div id="bestellen" className={styles['order-form']}>
                <form onSubmit={this.onSubmit}>
                  <h2>
                    {lang === 'de'
                      ? 'Ich möchte folgende Artikel kostenlos bestellen'
                      : ''}
                  </h2>
                  {this.state.cart.map(item => (
                    <div>
                      {item.count > 0 && (
                        <div className={styles['shopping-cart--item']}>
                          <div className={styles['shopping-cart--item__count']}>
                            {item.count}x
                          </div>
                          <div className={styles['shopping-cart--item__title']}>
                            {item.title}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  <div>
                    <TextFieldGroup
                      placeholder={lang === 'de' ? 'Vorname' : 'First Name'}
                      name="fname"
                      value={this.state.fname}
                      onChange={this.onChange}
                      error={errors.fname}
                    />
                    <TextFieldGroup
                      placeholder={lang === 'de' ? 'Nachname' : 'Last Name'}
                      name="lname"
                      value={this.state.lname}
                      onChange={this.onChange}
                      error={errors.lname}
                    />
                    <TextFieldGroup
                      placeholder={lang === 'de' ? 'Straße' : 'Street'}
                      name="street"
                      value={this.state.street}
                      onChange={this.onChange}
                      error={errors.street}
                    />
                    <TextFieldGroup
                      placeholder={
                        lang === 'de' ? 'PLZ / Ort' : 'Area Code / City'
                      }
                      name="city"
                      value={this.state.city}
                      onChange={this.onChange}
                      error={errors.city}
                    />
                    <TextFieldGroup
                      placeholder="E-mail Adresse"
                      name="email"
                      type="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      error={errors.email}
                    />
                    <TextareaFieldGroup
                      name="addInfo"
                      placeholder="Anmerkungen"
                      value={this.state.addInfo}
                      onChange={this.onChange}
                    />
                  </div>
                  <input
                    id="approved"
                    type="checkbox"
                    name="approved"
                    // checked={this.state.approved}
                    onChange={this.onChange}
                  />
                  <label htmlFor="approved">
                    Ich stimme der Verarbeitung der von mir angegebenen Daten
                    gemäß Art 6 Abs 1 lit a DSGVO zum Zweck der
                    Weiterverarbeitung zu.
                  </label>
                  <Link target="blank" to={`/${lang}/datenschutzerklaerung`}>
                    Nähere Information in der Datenschutzerklärung
                  </Link>
                  <br />
                  <br />
                  <input
                    disabled={!this.state.approved}
                    type="submit"
                    value="Abschicken"
                  />
                </form>
              </div>
            ) : (
              <Redirect
                to={`/${lang}/wissen/publikationen/rassismusreport/bestellung/abgeschlossen`}
              />
            )}
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { sendOrder, resetOrder }
)(ImageGridObject)
