/*
	Clicking/tapping on this football icon will show more content
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { asset, StyleSheet, View, Image, VrButton, Animated } from 'react-vr'

export const styles = StyleSheet.create({
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

class Football extends Component {
	state = {
		hovered: false,
		showAdditionalInfo: false,
		opacity: new Animated.Value(0),
	}

	handleEnter = () => this.setState({ hovered: true })
	handleExit = () => this.setState({ hovered: false })

	/**
	 * Handle toggling the additional info when the user clicks on the football
	 */
	handleToggleInfo = () => {
		const { showAdditionalInfo } = this.state

		// animate hiding info, then set state to remove info view
		if (showAdditionalInfo) {
			return Animated.timing(this.state.opacity, {
				toValue: 0,
			}).start(({ finished }) => {
				if (finished) {
					return this.setState({ showAdditionalInfo: false })
				}
				console.log('hide info animation did not finish')
			})
		}

		// set state, then animate showing info
		return this.setState({ showAdditionalInfo: true }, () => {
			Animated.timing(this.state.opacity, {
				toValue: 1,
			}).start()
		})
	}

	render() {
		return (
			<View style={{
					width: '50vw',
					height: '100vh',
					position: 'absolute',
					layoutOrigin: this.props.layoutOrigin,
					transform: this.props.transform,
				}}
			>
				<VrButton onEnter={this.handleEnter} onExit={this.handleExit} onClick={this.handleToggleInfo} style={{ width: 0.2, height: 0.2 }}>
					<Image source={asset('football.png')}
						style={{
							width: 0.1,
							height: 0.1,
							tintColor: this.state.hovered || this.state.showAdditionalInfo ? 'goldenrod' : '#fff',
						}}
					/>
				</VrButton>
				{this.state.showAdditionalInfo &&
					<Animated.View style={{ marginLeft: 0.1, position: 'absolute', opacity: this.state.opacity }}>
						{this.props.children}
					</Animated.View>
				}
			</View>
		)
	}
}
Football.propTypes = {
	children: PropTypes.node,
	layoutOrigin: PropTypes.array.isRequired,
	transform: PropTypes.array.isRequired,
}

export default Football
