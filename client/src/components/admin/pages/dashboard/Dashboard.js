import React, { Component } from 'react'
import PrivateRoute from '../../common/PrivateRoute'

import CategoryNav from './CategoryNav'

import Media from './media/Media'
import News from './news/News'
import Jahresberichte from './jahresberichte/Jahresberichte'
import Faqs from './faq/Faqs'

import styles from './Dashboard.module.sass'

class Dashboard extends Component {
  render() {
    return (
      <div className={styles['dashboard']}>
        <CategoryNav />

        <div className={styles['dashboard-content']}>
          {/* <PrivateRoute path="/admin/dashboard/projects" component={Projects} /> */}
          <PrivateRoute path="/admin/dashboard/media" component={Media} />
          <PrivateRoute path="/admin/dashboard/news" component={News} />
          <PrivateRoute
            path="/admin/dashboard/jahresberichte"
            component={Jahresberichte}
          />
          <PrivateRoute path="/admin/dashboard/faqs" component={Faqs} />
        </div>
      </div>
    )
  }
}

export default Dashboard
