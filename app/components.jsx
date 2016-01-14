import React from 'react'
import ReactDOM from 'react-dom'
import AutoComponent from './utils.jsx'
import Actions from './actions.jsx'
import Dispatcher from './dispatcher.jsx'


export class Character extends AutoComponent {
  render() {
    return (
      <div className="st-char">
        <dl>
          <dt>name</dt>
          <dd>{this.props.name}</dd>
        </dl>
      </div>
    )
  }
}
export class CharacterCreate extends AutoComponent {
  render() {
    return (
      <label>New Character:
        <input onKeyUp={this.onKeyUp} />
      </label>
    )
  }
  onKeyUp(ev) {
    if (ev.keyCode === 13) {
      let name = ev.target.value
      ev.target.value = ""
      Actions.createCharacter(name)
    }
  }
}

export class CharacterList extends AutoComponent {
  render() {
    let f = React.createFactory(Character)
    let characters = this.props.characters.map((character)=>(f(character)))
    return (
      <div className="st-char-list">
        <h3>Characters</h3>
        {characters}
        <CharacterCreate />
      </div>
    )
  }
}

export class Event extends AutoComponent {
  constructor(props={desc: ""}) {
    super(props)
  }

  describe() {
    if (this.props.who && this.props.what) {
      return `${this.props.who.name} ${this.props.what}`
    } else {
      return this.props.desc || "<unknown event>"
    }
  }

  render() {
    return (
      <div className="st-event">
        {this.describe()}
      </div>
    )
  }
}

export class Timeline extends AutoComponent {
  render() {
    let f = React.createFactory(Event)
    let events = this.props.events.map((event)=>(f(event)))
    return <div className="st-timeline">{events}</div>
  }
}
