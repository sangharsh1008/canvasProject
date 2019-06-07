import { Component } from 'react';
import { compose } from 'lodash/fp';
import Shape from './Shape';
import Events from './Events';

class Circle extends Component {
  props: {
    position: Position,
    radius: number,
    color: String,
  };

  componentDidMount() {
    this.props.shape.graphics
      .beginFill(this.props.color)
      .drawCircle(0, 0, this.props.radius);

    //Set position of Shape instance.
    this.props.shape.x = this.props.position.x;
    this.props.shape.y = this.props.position.y;
  }

  render() {
    return false;
  }
}

export default compose(
  Shape,
  Events,
)(Circle);