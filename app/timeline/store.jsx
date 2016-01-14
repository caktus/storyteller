import EventEmitter from 'events'

import Dispatcher from '../dispatcher.jsx'
import MakerUpper from './makerupper.jsx'


class TimelineStore extends EventEmitter {
  constructor() {
    super()
    Dispatcher.register(this.onAction.bind(this));
    this.events = []
    this.characters = []
  }
  onAction(payload) {
    console.log(payload)
    switch (payload.action) {
      case "add_event":
        this.events.push({desc: payload.desc})
        break
      case "add_char":
        this.characters.push({name: payload.name})
        break
      case "make_up_something":
        this.events.push(MakerUpper.makeUpEvent({
          characters: this.characters,
        }))
        break
    }
    this.emit('change')
  }
}

export default new TimelineStore()
