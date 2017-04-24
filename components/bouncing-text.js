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
		bounceValue: new Animated.Value(1.35),
		opacity: new Animated.Value(0),
	}

	componentDidMount() {
		setTimeout(() => {
			Animated.parallel([
				Animated.spring(this.state.bounceValue, {
					toValue: 1,
					friction: 3,
				}),
				Animated.timing(this.state.opacity, {
					toValue: 1,
				}),
			]).start()
		}, 250)
	}

	render() {
		const { style, transform = [] } = this.props
		const newTransform = [...transform, { scale: this.state.bounceValue }]
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
	text: PropTypes.string.isRequired,
	style: PropTypes.object,
	transform: PropTypes.array.isRequired,
}

export default BouncingText
