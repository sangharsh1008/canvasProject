// @flow
import React from 'react';

const Events = Component => class Events extends React.Component {
  props: {
    events: Array<Object>,
  };

  static defaultProps: {
    events: [],
  };

  componentDidMount() {
    this.props.events && this.props.events.forEach(({name, handler}) => this.props.shape.addEventListener(name, handler));
  }

  componentWillUnmount() {
    this.props.events && this.props.events.forEach(({name, handler}) => this.props.shape.removeEventListener(name, handler));
  }

  render() {
    return <Component { ...this.props} />;
  }
}

export default Events;