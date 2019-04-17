import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'

import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import arrayMove from 'array-move'

import { sortList } from '../../../../actions/adminActions'

import { newsTags } from './../../../user/pages/Wissen/News/news_data'

import cx from 'classnames'
import styles from './ItemAddList.module.sass'

const SortableItem = SortableElement(({ item, baseCat, category }) => (
  <div className={styles['item-list--item']}>
    <NavLink
      className={cx([styles[item.tag]], {
        [styles['online']]: item.isOnline
      })}
      to={`/admin/${baseCat}/${category}/${item._id}`}
      activeClassName={styles['active']}
    >
      <div className={styles['item-tag']} />
      {item.de.title}
    </NavLink>
  </div>
))

const SortableList = SortableContainer(({ items, baseCat, category }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <SortableItem
          key={`item-${index}`}
          index={index}
          item={item}
          baseCat={baseCat}
          category={category}
        />
      ))}
    </ul>
  )
})

class ItemAddList extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      selectedTag: ''
    }
  }

  componentDidMount = () => {}

  componentDidUpdate = prevProps => {
    if (prevProps !== this.props) {
      this.setState({
        list: this.props.content
      })
    }
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    const url =
      this.props.baseCat === 'training' && this.props.category === 'team'
        ? `/api/projects/sort/training_team`
        : `/api/projects/sort/${this.props.category}`
    this.setState(
      ({ list }) => ({
        list: arrayMove(list, oldIndex, newIndex)
      }),
      () => {
        console.log(this.state.list)
        // this.props.sortList(this.state.list, '')
        axios
          .post(url, {
            list: this.state.list
          })
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            if (err) console.log(err)
          })
      }
    )
  }
  onTagChange = e => {
    this.setState({ selectedTag: e.target.value })
  }

  render() {
    const { baseCat, category, tags } = this.props
    const content = this.state.list
    return (
      <div className={styles['item-add-list']}>
        <div>
          <Link
            className={styles['add-button']}
            to={`/admin/${baseCat}/${category}/neu`}
          >
            {category === 'team' ? 'Neuer Eintrag' : 'Neuer Beitrag'}
            <div className={styles['plus-icon']}>
              <i className="fa fa-plus" />
            </div>
          </Link>
        </div>

        {tags && (
          <div className={styles['tag-container']}>
            <div>
              <input
                type="radio"
                name="tags"
                id="all"
                value=""
                onClick={this.onTagChange}
                checked={this.state.selectedTag === ''}
              />
              <label className={styles['all']} htmlFor="all">
                Alle
              </label>
            </div>
            {tags &&
              tags.map(tag => (
                <div>
                  <input
                    type="radio"
                    name="tags"
                    id={tag.name}
                    value={tag.name}
                    onClick={this.onTagChange}
                    checked={tag.name === this.state.selectedTag}
                  />
                  <label className={styles[tag.name]} htmlFor={tag.name}>
                    {tag.de.title}
                  </label>
                </div>
              ))}
          </div>
        )}

        <div className={styles['item-list']}>
          {content && content.length > 0 ? (
            <SortableList
              lockAxis={'y'}
              pressDelay={200}
              helperClass={styles['dragged']}
              items={
                this.state.selectedTag === ''
                  ? content
                  : content.filter(item => item.tag === this.state.selectedTag)
              }
              baseCat={baseCat}
              category={category}
              onSortEnd={this.onSortEnd}
            />
          ) : (
            <div>Noch keine Beiträge</div>
          )}
        </div>
      </div>
    )
  }
}

// const mapStateToProps = (state, ownProps) => ({
//   errors: state.errors,
//   ...ownProps
// })

export default ItemAddList
