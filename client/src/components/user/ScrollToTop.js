import { Component } from 'react'
import { withRouter } from 'react-router-dom'

// const excludedPaths = [
//   'wissen/presse/dokumentation_von_angriffen_auf_journalist_innen/online',
//   'wissen/presse/dokumentation_von_angriffen_auf_journalist_innen/oeffentlich',
// ]
class ScrollToTop extends Component {
  // state = {
  //   doNotScroll: false,
  // }

  // checkForExclusion = () => {
  //   console.log('NOW IT IS')
  //   excludedPaths.map(path => {
  //     console.log('path', path)
  //     if (this.props.location.pathname.includes(path)) {
  //       console.log('NOE IM GOOD')
  //       return false
  //     }
  //   })
  //   console.log('NOE IM BAD')
  //   return true
  // }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      const hash = this.props.location.hash
      if (hash === '') {
        window.scrollTo(0, 0)
      } else {
        setTimeout(() => {
          const id = hash.replace('#', '')
          const element = document.getElementById(id)
          if (element) element.scrollIntoView()
        }, 0)
      }
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
