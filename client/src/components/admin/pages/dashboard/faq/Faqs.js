import React, { Component } from 'react'
import { connect } from 'react-redux'
import PrivateRoute from '../../../common/PrivateRoute'

import { getAll } from '../../../../../actions/adminActions'

import { faqTags } from '../../../../user/pages/Wissen/Faq/faq_data'

import ItemAddList from '../../../common/ItemAddList/ItemAddList'
import FaqContent from './FaqContent/FaqContent'

import styles from './Faqs.module.sass'

class Faqs extends Component {
  componentDidMount() {
    this.props.getAll('faqs')
  }

  render() {
    return (
      <div className={styles['faqs']}>
        {this.props.faq && (
          <ItemAddList
            tags={faqTags}
            content={this.props.faq.faqs}
            baseCat={'dashboard'}
            category={'faqs'}
          />
        )}
        <PrivateRoute
          path="/admin/dashboard/faqs/:faqId"
          component={FaqContent}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  faq: state.faq
})

export default connect(
  mapStateToProps,
  { getAll }
)(Faqs)
