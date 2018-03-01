import React from 'react';
import Card from './components/Card.jsx';
import CardForm from './components/CardForm.jsx';

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }
    // kcthis.addCard = this.addCard.bind(this);
  }

  addCard=(card) => {
    let { cards } = this.state;
    cards.push(card);
    this.setState({cards});
  }

  render() {
    return(
      <div>
        <CardForm submitEvent={this.addCard}/>
        {
          this.state.cards.map(card => {
            return <Card title={card.title} author={card.author} content={card.content} date={card.date.toString()} />
          })
        }
      </div>
    )
  }
}