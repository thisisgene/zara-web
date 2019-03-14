import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'

import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import arrayMove from 'array-move'

import { sortList } from '../../../../actions/adminActions'

import styles from './ItemAddList.module.sass'

const SortableItem = SortableElement(({ item, category }) => (
  <div className={styles['item-list--item']}>
    <NavLink
      to={`/admin/dashboard/${category}/${item._id}`}
      activeClassName={styles['active']}
    >
      {item.de.title}
    </NavLink>
  </div>
))

const SortableList = SortableContainer(({ items, category }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <SortableItem
          key={`item-${index}`}
          index={index}
          item={item}
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
      list: []
    }
  }

  componentDidMount = () => {}

  componentDidUpdate = prevProps => {
    if (prevProps !== this.props) {
      this.setState({
        list: this.props.content
      })
      console.log(this.props.content, this.state.list)
    }
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(
      ({ list }) => ({
        list: arrayMove(list, oldIndex, newIndex)
      }),
      () => {
        console.log(this.state.list)
        // this.props.sortList(this.state.list, '')
        axios
          .post('/api/projects/sort/news', { list: this.state.list })
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            if (err) console.log(err)
          })
      }
    )
  }

  render() {
    const { category } = this.props
    const content = this.state.list
    return (
      <div className={styles['item-add-list']}>
        <div>
          <Link
            className={styles['add-button']}
            to={`/admin/dashboard/${category}/neu`}
          >
            Neuer Beitrag
            <div className={styles['plus-icon']}>
              <i className="fa fa-plus" />
            </div>
          </Link>
        </div>
        <div className={styles['item-list']}>
          {content && content.length > 0 ? (
            <SortableList
              lockAxis={'y'}
              pressDelay={200}
              helperClass={styles['dragged']}
              items={content}
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
