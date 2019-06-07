import React, { Component } from 'react';
import { Stage as CJSStage } from '@motionlead/createjs';

class Stage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stage: null,
    }
  }

  componentDidMount() {
    this.setState({ stage: new CJSStage(this.canvas) });
  }

  componentDidUpdate() {
    this.state.stage.update();
  }

  render() {
    return <canvas ref={node => { this.canvas = node;}}>
      { this.state.stage && React.cloneElement(this.props.children, { stage: this.state.stage })}
    </canvas>
  }
}

export default Stage;