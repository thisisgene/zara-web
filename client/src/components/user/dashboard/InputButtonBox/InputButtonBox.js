import React, { Component } from 'react'

import cx from 'classnames'
import styles from './InputButtonBox.module.sass'

class InputButtonBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projectList: [],
      EMAIL: '',
      inputFocus: false
    }
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onInputFocus = () => {
    this.setState({ inputFocus: true })
    setTimeout(() => {
      this.setState({ inputFocus: false })
    }, 300)
  }

  render() {
    const { content, id } = this.props
    return (
      <div className={styles['input-button-box']}>
        {content && (
          <div className={styles['box-input']}>
            <div id="mc_embed_signup">
              <form
                action="https://eugenedelta.us15.list-manage.com/subscribe/post?u=b9321a8c2677e57b97cfebee7&amp;id=9dd567bfa5"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                target="_blank"
                noValidate
              >
                <div
                  id="mc_embed_signup_scroll"
                  className={cx(styles['signup-box'], {
                    [styles['focused']]: this.state.inputFocus
                  })}
                >
                  <div>
                    <input
                      placeholder={content.inputPlaceholder}
                      type="email"
                      value={this.state.EMAIL}
                      onChange={this.onChange}
                      name="EMAIL"
                      id={id ? id : 'mce-EMAIL'}
                      onFocus={this.onInputFocus}
                      // ref={(input) => { this.newsletterInput = input; }} />
                    />
                  </div>
                  <div id="mce-responses">
                    <div id="mce-error-response" style={{ display: 'none' }} />
                    <div
                      id="mce-success-response"
                      style={{ display: 'none' }}
                    />
                  </div>
                  <div
                    style={{ position: 'absolute', left: '-5000px' }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_b9321a8c2677e57b97cfebee7_9dd567bfa5"
                      tabIndex="-1"
                      value=""
                      onChange={this.onChange}
                    />
                  </div>
                  <div>
                    <button type="submit">{content.button.text}</button>
                  </div>
                </div>
              </form>
            </div>
            {/* <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script> */}

            {/* <input
              placeholder={content.inputPlaceholder}
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.onChange}
            /> */}
          </div>
        )}
      </div>
    )
  }
}

export default InputButtonBox
