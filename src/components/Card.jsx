import React from 'react';

export default class Card extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <h3>
          {this.props.title}
        </h3>
        <div>
          <p>
            {this.props.content}
          </p>
          <p>
            {this.props.author}
          </p>
          <p>
          </p>
        </div>
      </div>
    )
  }
}