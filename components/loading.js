/*
	Loading spinner thang
 */

import React, { Component } from 'react'
import { asset, View, Animated } from 'react-vr'

class Loading extends Component {
	state = { rotation: new Animated.Value(0) }

	loopAnimation = () => {
		Animated.sequence([
			Animated.timing(this.state.rotation, {
				toValue: 360,
				delay: 500,
			}),
			Animated.timing(this.state.rotation, {
				toValue: 0,
				delay: 500,
			}),
		]).start(this.loopAnimation)
	}

	componentDidMount() {
		this.loopAnimation()
	}

	render() {
		return (
			<View style={{
				position: 'absolute',
				alignItems: 'center',
				layoutOrigin: [0.5, 0.5],
				transform: [
					{ translate: [0, 0, -1] },
				],
			}}>
				<Animated.Image source={asset('football.png')}
					style={{
						width: 0.1,
						height: 0.1,
						tintColor: '#fff',
						transform: [
							{ rotateZ: this.state.rotation },
						],
					}}
				/>
				<Animated.Text>Loading...</Animated.Text>
			</View>
		)
	}
}

export default Loading
