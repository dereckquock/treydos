import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Animated } from 'react-vr'

const styles = StyleSheet.create({
  text: {
    flex: 1,
    maxWidth: 2,
    backgroundColor: 'rgba(0,0,0,0.5)',
    fontWeight: '400',
    layoutOrigin: [0.5, 0.5],
    paddingRight: 0.2,
    paddingLeft: 0.2,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
})

class BouncingText extends Component {
  state = {
    bounceValue: new Animated.Value(0.8),
    opacity: new Animated.Value(0),
  }

  componentDidMount() {
    setTimeout(() => {
      Animated.sequence([
        Animated.delay(this.props.delay),
        Animated.parallel([
          Animated.spring(this.state.bounceValue, {
            toValue: 0,
            friction: 5,
          }),
          Animated.timing(this.state.opacity, {
            toValue: 1,
          }),
        ]),
      ]).start()
    }, 250)
  }

  render() {
    const { style, transform = [] } = this.props
    const newTransform = [...transform, { translateY: this.state.bounceValue }]
    const newStyle = {
      ...style,
      opacity: this.state.opacity,
      transform: newTransform,
    }

    return (
      <Animated.Text style={[styles.text, newStyle]}>
        {this.props.text}
      </Animated.Text>
    )
  }
}
BouncingText.propTypes = {
  delay: PropTypes.number,
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
  transform: PropTypes.array.isRequired,
}
BouncingText.defaultProps = { delay: 0 }

export default BouncingText
