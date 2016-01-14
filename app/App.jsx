import React from 'react';
import Dispatcher from './dispatcher.jsx';
import TimelineStore from './timeline/store.jsx';
import Actions from './actions.jsx';
import {Timeline, Event, CharacterList} from './components.jsx';
import AutoComponent from './utils.jsx'


class App extends AutoComponent {
  constructor() {
    super()
    TimelineStore.addListener('change', this.onChange)
    Dispatcher.register(this.onAction)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Timeline events={TimelineStore.events} />
        <input onKeyUp={this.onKeyUp} />
        <button onClick={Actions.makeUpSomething}>Make Up Something</button>
        <CharacterList characters={TimelineStore.characters} />
      </div>
    )
  }

  onKeyUp(ev) {
    if (ev.keyCode === 13) {
      Actions.addEvent(ev.target.value)
      ev.target.value = ""
    }
  }

  onChange() {
    this.forceUpdate()
  }

  onAction(payload) {
    // switch (payload.action) {
    //   case "edit_mode":
    //     this.setState({editNote: payload.note})
    //     break
    // }
  }
}

export default App;
