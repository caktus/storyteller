import Dispatcher from './dispatcher.jsx';


class Actions {
    addEvent(desc) {
        if (desc) {
            Dispatcher.dispatch({
                action: "add_event",
                desc: desc,
            })
        }
    }
    createCharacter(name) {
        Dispatcher.dispatch({
            action: "add_char",
            name: name,
        })
    }
    makeUpSomething() {
        Dispatcher.dispatch({
            action: "make_up_something",
        })
    }
}

export default new Actions()
