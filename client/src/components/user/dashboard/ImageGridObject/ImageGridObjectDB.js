import React, { Component, Fragment } from 'react'

import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


import { sendOrder, resetOrder } from '../../../../actions/userActions'

import ShoppingCart from '../ShoppingCart/ShoppingCart'
import Spinner from '../Spinner/Spinner'
import TextFieldGroup from '../InputGroups/TextFieldGroup'
import TextareaFieldGroup from '../InputGroups/TextareaFieldGroup'
import OnlineByTimer from '../OnlineByTimer/OnlineByTimer'

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
      cartArray.push({ id: item._id, title: item[lang].title, count: 0 })
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
    console.log(id)
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
    const { content, lang, shoppingCartText, withCart, type } = this.props
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
            <Fragment>
              {/* { item.setOnlineByTimer ?
                <OnlineByTimer onlineTime={item.onlineTime}>
                  <div
                    key={index}
                    className={cx(styles['grid-item'], {
                      [styles['is-fresh']]: item.isFresh,
                      [styles[type]]: type
                    })}
                  >
                    <img src={`/assets/img/${item.image}`} alt={item.image} />
                    <div className={styles['grid-item--links']}>
                      <div className={styles['grid-item--title']}>
                        {item[lang].title}
                      </div>
                      <span>Download:</span>
                      <div className={styles['grid-item--links__language']}>
                        {item.links.map(link => (
                          <a
                            className={'rr-download-link'}
                            id={`${item[lang].title}_${link.linkText}`}
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
                              item._id,
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
                </OnlineByTimer> : */}
              <div
                key={index}
                className={cx(styles['grid-item'], {
                  [styles['is-fresh']]: index == 0,
                  [styles[type]]: type
                })}
              >
                {item.images && item.images[lang][0] && <img src={`/assets/media/${item.tag}/${item.images[lang][0].value}`} alt={item.image} />}
                <div className={styles['grid-item--links']}>
                  <div className={styles['grid-item--title']}>
                    {item[lang].title}
                  </div>
                  {item.files && (item.files.de.length > 0 || item.files.en.length > 0) && (
                    <Fragment>
                      <span>Download bibi:</span>
                      <div className={styles['grid-item--links__language']}>
                        <Fragment>
                          {item.files.de.length > 0 &&
                            <a
                              className={'rr-download-link'}
                              id={`${item[lang].title}_DE`}
                              target="blank"
                              href={`https://assets.zara.or.at/download/${item.files.de[0].value}`}
                            >
                              deutsch
                              </a>}
                          {item.files.en.length > 0 &&
                            <a
                              className={'rr-download-link'}
                              id={`${item[lang].title}_EN`}
                              target="blank"
                              href={`https://assets.zara.or.at/download/${item.files.en[0].value}`}
                            // onClick={this.props.onShowSurvey}
                            >
                              englisch
                        </a>}
                        </Fragment>
                      </div>
                    </Fragment>
                  )}
                  {item.toOrder && (
                    <div>
                      <hr />
                      <button
                        onClick={this.increaseCount.bind(
                          this,
                          item._id,
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
              {/* } */}
            </Fragment>
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
