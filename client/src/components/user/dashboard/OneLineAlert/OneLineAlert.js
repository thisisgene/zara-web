import React, { Component } from 'react';

import ButtonObject from '../ButtonObject/ButtonObject';
import PopUpForm from '../../dashboard/PopUpForm/PopUpForm';

import cx from 'classnames';
import styles from './OneLineAlert.module.sass';
import AlertIcon from './img/alert_icon.png';

class OneLineAlert extends Component {
  state = {
    popUpFormIsOpen: false
  };

  togglePopUpForm = toggleState => {
    this.setState({
      popUpFormIsOpen: toggleState
    });
  };

  render() {
    const { content, lang, type } = this.props;
    return (
      <div
        className={cx(styles['alert'], {
          [styles[content.type]]: content.type
        })}
      >
        {this.state.popUpFormIsOpen && (
          <PopUpForm
            lang={lang}
            onCloseClick={this.togglePopUpForm}
          ></PopUpForm>
        )}
        <div className={styles['alert-wrapper']}>
          <div className={styles['alert--left']}>
            {content.icon && content.icon === 'alert' && (
              <img src={AlertIcon} alt="" />
            )}
            {lang && (
              <div className={styles['alert-body']}>
                {content[lang].title && (
                  <div className={styles['alert-title']}>
                    {content[lang].title}
                  </div>
                )}
                <div
                  className={styles['alert-text']}
                  dangerouslySetInnerHTML={{ __html: content[lang].text }}
                />
              </div>
            )}
          </div>

          {lang && content[lang].button && type !== 'togglePopupForm' ? (
            <div className={styles['alert--right']}>
              <ButtonObject button={content[lang].button} lang={lang} />
            </div>
          ) : (
            lang &&
            content[lang].button && (
              <div className={styles['alert--popup']}>
                <button onClick={this.togglePopUpForm}>
                  {content[lang].button.text}
                </button>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default OneLineAlert;
