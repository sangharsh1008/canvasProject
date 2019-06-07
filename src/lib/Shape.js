import React from 'react';
import { Shape as CJSShape } from '@motionlead/createjs';

let shapesRegistry = {};
let lastShapeId = 0;

const add = (shape: Object): number => {
  const shapeId = lastShapeId++;
  shapesRegistry[shapeId] = shape;
  return shapeId;
}

const remove = (id: number) => delete shapesRegistry[id];

const Shape = Component => class Shape extends React.Component {
  constructor(props) {
    super(props);

    // Create a Shape DisplayObject.
    this.state = {
      shapeId: add(new CJSShape()),
    };
  }

  componentDidMount() {    
    this.props.stage.addChild(shapesRegistry[this.state.shapeId]);
  }

  componentWillUnmount() {
    this.props.stage.removeChild(shapesRegistry[this.state.shapeId]);
    remove(this.state.shapeId);
  }

  render() {
    return <Component { ...this.props} shape={shapesRegistry[this.state.shapeId]} />;
  }
}

export default Shape;