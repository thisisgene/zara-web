import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import cx from 'classnames'
import styles from './FaqBox.module.sass'

export default class FaqItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  // toggleOpen = () => {
  //   this.setState(prevState => ({
  //     isOpen: !prevState.isOpen
  //   }))
  // }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
    }
  }

  render() {
    const { faq, lang, open, toggleOpen } = this.props
    let replacedText = faq[lang].text
    // faq[lang].links &&
    //   faq[lang].links.map(link => {
    //     const queryString = `[[${link.ref}]]`
    //     const linkString = `<a href="./${link.toID}">${link.text}</a>`
    //     faq[lang].text.includes(`[[${link.ref}]]`) && console.log(link.ref)
    //     replacedText = faq[lang].text.replace(queryString, linkString)

    //     // TODO: links inside FAQ text
    //   })

    const query = /\[\[([^)]+)\]\]/
    let textArray = faq[lang].text.split(query)

    const isOpen = open[0]
    return (
      <div>
        <span id={faq.id} className={styles['faq-item--margin']} />
        <div className={styles['faq-item']}>
          <div
            className={styles['faq-item-top']}
            onClick={() => toggleOpen(faq.id)}
          >
            <div className={styles['faq-item-top--head']} tabIndex="2">
              <div className={styles['faq-item-top--head__icon']}>
                <i className="far fa-question-circle" />
              </div>
              <div className={styles['faq-item-top--head__title']}>
                {faq[lang].title}
              </div>
            </div>
            <div
              className={cx(styles['faq-item-top--arrow'], {
                [styles['flipped']]: isOpen
              })}
            >
              <i className="fa fa-angle-double-down" />
            </div>
          </div>
          <div
            className={cx(styles['faq-item--body'], {
              [styles['open']]: isOpen
            })}
          >
            {textArray &&
              textArray.map(item => (
                <span>
                  {faq[lang].links &&
                  faq[lang].links.filter(link => link.ref === item).length >
                    0 ? (
                    faq[lang].links
                      .filter(link => link.ref === item)
                      .map(link => (
                        <Link
                          className={styles['inner-text-link']}
                          to={`/${lang}/wissen/faq/#${link.toID}`}
                          // onClick={this.openFaq.bind(this, link.toID)}
                        >
                          {link.text}
                        </Link>
                      ))
                  ) : (
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  )}
                </span>
              ))}
          </div>
        </div>
      </div>
    )
  }
}
