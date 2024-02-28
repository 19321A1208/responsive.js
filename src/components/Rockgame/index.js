import {Component, React} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'
import Userprofile from '../Userprofile'
import Resltsuccess from '../Resultsuccess'
import './index.css'
const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]
class Rockgame extends Component {
  state = {count: 0, isclick: false, src1: '', src2: '', text: ''}
  eachresult = (id, imageUrl) => {
    const randomnumber = Math.floor(Math.random() * 2)
    const id1 = choicesList[randomnumber].id

    const {isclick, src1, src2} = this.state
    this.setState({
      isclick: true,
      src2: choicesList[randomnumber].imageUrl,
      src1: imageUrl,
    })
    console.log(src1)
    console.log(src2)
    if (
      (id === 'PAPER' && id1 === 'ROCK') ||
      (id === 'SCISSORS' && id1 === 'PAPER') ||
      (id === 'ROCK' && id1 === 'SCISSORS')
    ) {
      this.setState(prevState => ({count: prevState.count + 1}))
      this.setState({text: 'YOU WON'})
    } else if (
      (id === 'SCISSORS' && id1 === 'ROCK') ||
      (id === 'ROCK' && id1 === 'PAPER') ||
      (id === 'PAPER' && id1 === 'SCISSORS')
    ) {
      this.setState(prevState => ({count: prevState.count - 1}))
      this.setState({text: 'YOU LOSE'})
    } else {
      this.setState({text: 'IT IS DRAW'})
    }
  }
  playagain = () => {
    this.setState({isclick: false})
  }
  render() {
    const {count, isclick, src1, src2, text} = this.state
    return (
      <>
        {isclick ? (
          <div>
            <div className="row">
              <div>
                <h1>Rock Paper Scissors</h1>
              </div>
              <div>
                <p>Score</p>
                <p className="para">{count}</p>
              </div>
            </div>
            <p>{text}</p>
            <img src={src1} alt="your choice" />
            <img src={src2} alt="opponent choice" />
            <button onClick={this.playagain}>Play Again</button>
          </div>
        ) : (
          <div>
            <div className="row">
              <div>
                <h1>Rock Paper Scissors</h1>
              </div>
              <div>
                <p>Score</p>
                <p className="para">{count}</p>
              </div>
            </div>
            <ul>
              {choicesList.map(each => (
                <Userprofile
                  eachuser={each}
                  key={each.id}
                  eachresult={this.eachresult}
                />
              ))}
            </ul>
            <br />
            <Popup trigger={<button> Rules</button>} position="right center">
              <div className="white">
                <RiCloseLine className="cross" />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </div>
            </Popup>
          </div>
        )}
      </>
    )
  }
}
export default Rockgame
