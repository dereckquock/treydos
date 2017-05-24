import React, { Component } from 'react'
import {
	asset,
	Pano,
	View,
	Text,
} from 'react-vr'
import BouncingText from './bouncing-text'
import Football, { styles } from './football'

export default class Seattle extends Component {
	render() {
		const text = `This stadium was super cool and very loud
Everyone was really nice and welcoming :)
And the popcorn was delicious!`

		return (
			<View>
				<Pano source={asset('superbowl.jpg')} />

				<BouncingText text={text}
					transform={[
						{ translate: [0, 0, -2] },
					]}
				/>

				<BouncingText text={'We even bought Seahawks gear to fit in :P'}
					style={{ width: 1, fontSize: 0.05 }}
					transform={[
						{ translate: [0, 0, -1.5] },
						{ rotateX: '-45deg' },
					]}
					delay={100}
				/>

				<Football
					layoutOrigin={[0.5, 0.5]}
					transform={[
						{ translate: [-1.5, 0, -1] },
						{ rotateY: '60deg' },
					]}
				>
					<Text style={[styles.text, {
						fontSize: 0.1,
						layoutOrigin: [0, 0.25],
						transform: [
							{ translate: [0, 0, -1] },
						],
					}]}>
						It was crazy how loud the stadium got when the hawks were on defense
					</Text>
				</Football>
			</View>
		)
	}
}
