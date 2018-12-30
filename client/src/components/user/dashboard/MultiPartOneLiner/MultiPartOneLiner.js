import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import IconObject from '../IconObject/IconObject'

import styles from './MultiPartOneLiner.module.sass'

class MultiPartOneLiner extends Component {
  render() {
    const { content, lang } = this.props
    return (
      <div className={styles['multi-part-one-liner']}>
        {content &&
          content.map((item, index) => (
            <div key={index} className={styles['multi-part-one-liner--item']}>
              {item[lang].icon && <IconObject image={item[lang].icon} />}
              <div className={styles['multi-part-one-liner--item__text']}>
                {item[lang].title && <h1>{item[lang].title}</h1>}
                {item[lang].text && <p>{item[lang].text}</p>}
                {item[lang].link && (
                  <div>
                    {item[lang].linkType === 'external' ? (
                      <a href={item[lang].link} target="blank">
                        {item[lang].linkText}
                      </a>
                    ) : (
                      <Link to={item[lang].link}>{item[lang].linkText}</Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    )
  }
}

export default MultiPartOneLiner
