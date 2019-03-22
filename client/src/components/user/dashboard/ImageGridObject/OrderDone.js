import React, { Component } from 'react'
import { connect } from 'react-redux'

import { resetOrder } from '../../../../actions/userActions'

import SurveyPopUp from '../SurveyPopUp/SurveyPopUp'

import styles from './ImageGridObject.module.sass'

class OrderDone extends Component {
  componentWillUnmount() {
    this.props.resetOrder()
  }
  render() {
    const { order } = this.props.user
    return (
      <div className={styles['order-confirm']}>
        {order ? (
          <div>
            <SurveyPopUp
              url={
                'https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd4kPG6Z9g_2BPXgvECnXAkEwp_2FjHiK5RFD5M2ltZl4x7vQ.js'
              }
            />
            <h1>
              Vielen Dank für Ihre Bestellung und Ihr Interesse am ZARA
              Rassismus Report!
            </h1>
            <p>Folgende Bestellung ist bei uns eingegangen:</p>
            {order.items.map(item => (
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
            <p>
              Wir bearbeiten Ihre Bestellung so bald wie möglich und senden Sie
              an folgende Adresse:
            </p>
            <h3>Vorname</h3>
            <p>{order.fname}</p>
            <h3>Nachname</h3>
            <p>{order.lname}</p>
            <h3>Straße</h3>
            <p>{order.street}</p>
            <h3>PLZ / Ort</h3>
            <p>{order.city}</p>
            <h3>E-mail Adresse</h3>
            <p>{order.email}</p>
            <h3>Anmerkungen</h3>
            <p>{order.addInfo}</p>
          </div>
        ) : (
          <div>Keine Bestellung gefunden</div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(
  mapStateToProps,
  { resetOrder }
)(OrderDone)
