import {choice} from '../utils.jsx'

class MakerUpper {
    makeUpEvent({characters=null}) {
        let who
        if (characters) {
            who = choice(characters)
        } else {
            who = this.makeUpWho()
        }
        return {
            who: who,
            what: this.makeUpWhat(),
        }
    }
    makeUpWho() {
        return choice(["Jack", "Jill"])
    }
    makeUpWhat() {
        return choice(["arrive", "leave"])
    }
}

export default new MakerUpper()
