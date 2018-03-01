import React from 'react';

export default class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      title: props.title,
      content: props.content,
      author: props.author,
    }
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    console.log(props.submitEvent)
  }

  handleInputChange(ev) {
    const target = ev.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })

  }

  onSubmitForm(ev) {
    let card = {...this.state, date: new Date()}
    this.props.submitEvent(card);
    ev.preventDefault();
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onSubmitForm} >
          <input type="text" onChange={this.handleInputChange} name="title" placeholder="Title"/> <br/>
          <textarea value={this.state.content} onChange={this.handleInputChange} name="content" placeholder="Content"/><br/>
          <input type="text" onChange={this.handleInputChange} name="author" placeholder="Author"/><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}