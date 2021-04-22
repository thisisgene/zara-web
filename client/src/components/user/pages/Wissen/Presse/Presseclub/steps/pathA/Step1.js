import React, { Component } from "react"
import labelReducer from "../../../../../../../../reducers/labelReducer"

import { stepOne } from "./step_data"

export default class StepA1 extends Component {
  state = {
    directReaction: this.props.getStore().directReaction,
    text1a1: this.props.getStore().text1a1,
    text1a2a: this.props.getStore().text1a2a,
    text1a2b: this.props.getStore().text1a2b,
    text1a2c: this.props.getStore().text1a2c,
    text1b1: this.props.getStore().text1b1,
    text1b2: this.props.getStore().text1b2,
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      console.log("UPDATED!")
      this.setState({
        directReaction: this.props.getStore().directReaction,
        text1a1: this.props.getStore().text1a1,
        text1a2a: this.props.getStore().text1a2a,
        text1a2b: this.props.getStore().text1a2b,
        text1a2c: this.props.getStore().text1a2c,
        text1b1: this.props.getStore().text1b1,
        text1b2: this.props.getStore().text1b2,
      })
    }
  }

  onChange = (e) => {
    console.log("target: ", e.target.value, e.target.name)
    let userInput = {
      [e.target.name]: e.target.value,
    }
    if (this.props.getStore()[e.target.name] !== e.target.value) {
      console.log("it is different!")
      this.props.updateStore({
        ...userInput,
        savedToCloud: false,
      })
    }
  }

  render() {
    const { directReaction } = this.state
    return (
      <div>
        <p dangerouslySetInnerHTML={{ __html: stepOne.text1 }} />

        {stepOne.options.map((option) => (
          <div>
            <input
              type="radio"
              name={stepOne.optionName}
              id={option.value}
              value={option.value}
              onChange={this.onChange}
            />
            <label
              htmlFor={option.value}
              dangerouslySetInnerHTML={{ __html: option.text }}
            />
          </div>
        ))}
        {directReaction === "yes" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: stepOne.text1A1.text }} />
            <input
              type="text"
              name={stepOne.text1A1.name}
              value={this.state[stepOne.text1A1.name]}
              onChange={this.onChange}
            />

            <p dangerouslySetInnerHTML={{ __html: stepOne.text1A2.text }} />
            <input
              type="text"
              name={stepOne.text1A2.name}
              value={this.state[stepOne.text1A2.name]}
              onChange={this.onChange}
            />
            <input
              type="text"
              name={stepOne.text1A2.name2}
              value={this.state[stepOne.text1A2.name2]}
              onChange={this.onChange}
            />
            <input
              type="text"
              name={stepOne.text1A2.name3}
              value={this.state[stepOne.text1A2.name3]}
              onChange={this.onChange}
            />
          </div>
        )}
        {directReaction === "no" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: stepOne.text1B1.text }} />
            <textarea
              name={stepOne.text1B1.name}
              value={this.state[stepOne.text1B1.name]}
              onChange={this.onChange}
            />
            <p dangerouslySetInnerHTML={{ __html: stepOne.text1B2.text }} />
            <input
              type="text"
              name={stepOne.text1B2.name}
              value={this.state[stepOne.text1B2.name]}
              onChange={this.onChange}
            />
          </div>
        )}
      </div>
    )
  }
}
