import React, {Component} from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    var {text, id} = this.props;
      return(
        <div>
          {id}: {text}
        </div>
      );
  }
}

export default TodoItem;
