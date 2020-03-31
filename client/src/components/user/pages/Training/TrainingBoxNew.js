import React, { Component } from 'react';
import { connect } from 'react-redux';

import TrainingItemBox from '../../dashboard/TrainingItemBox/TrainingItemBoxNew';

import { getAll } from '../../../../actions/adminActions';

import styles from './Training.module.sass';

class TrainingBox extends Component {
  constructor() {
    super();
    this.state = {
      activeCat: '1'
    };
  }

  componentDidMount() {
    this.props.getAll('bulletins');
  }

  onChange = e => {
    this.setState({
      activeCat: e.target.value
    });
  };

  render() {
    const { content, trainingItems, lang } = this.props;
    return (
      <div>
        {content && trainingItems && lang && (
          <div className={styles['training-box']}>
            <div className={styles['training-box--text']}>
              <p>{content[lang].text}</p>
              <p>{content[lang].text2}</p>
            </div>
            <h1>{content[lang].title}</h1>
            <a
              className={styles['training-box--privacy-link']}
              href={content[lang].privacyPolicyLink}
              target="blank"
            >
              {content[lang].privacyPolicyText}
            </a>
            <a
              className={styles['training-box--agb-link']}
              href={content[lang].agbLink}
              target="blank"
            >
              {content[lang].agbText}
            </a>
            <div className={styles['training-box--categories']}>
              {content[lang].categories &&
                content[lang].categories.map((cat, index) => (
                  <div key={index} className={styles['cat-item']}>
                    <input
                      name="category"
                      value={cat.index}
                      type="radio"
                      id={`cat-${cat.index}`}
                      onChange={this.onChange}
                      checked={this.state.activeCat === cat.index}
                    />
                    <label htmlFor={`cat-${cat.index}`}>{cat.text}</label>
                  </div>
                  // <div key={index}>{cat.text}</div>
                ))}
            </div>
            {this.props.bulletin && this.props.bulletin.bulletins && (
              <TrainingItemBox
                content={this.props.bulletin.bulletins}
                category={this.state.activeCat}
                lang={lang}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bulletin: state.bulletin
});

export default connect(mapStateToProps, { getAll })(TrainingBox);