import React from 'react';
import PropTypes from 'prop-types';
import bulma from 'bulma/css/bulma.css';
class Media extends React.Component {
  constructor(props) {
    super(props);
    console.log('inicializando media desde el constructor');
  }
  render() {
    
    return(
      <div className="" >
        <div className="" >
          <img 
            src={this.props.image} 
            alt=""
            width={260}
            height={260}
            className=""
          />
          <h3 className="" >{this.props.title}</h3>
          <p className="" >{this.props.author}</p>

        </div>
      </div>
    )
  }
}

Media.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

export default Media