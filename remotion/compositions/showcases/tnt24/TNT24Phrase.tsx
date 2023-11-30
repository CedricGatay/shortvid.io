import React from 'react';
import {loadFont} from '@remotion/google-fonts/CrimsonText';
import {
	AbsoluteFill,
	Easing,
	interpolate,
	Sequence,
	staticFile,
	useCurrentFrame,
} from 'remotion';

import {BackgroundFiller} from '../../../design/atoms/BackgroundFiller';
import {DefaultProps} from '../../../types/defaultProps.types';

import {Android} from './Android';
import {TNTLeft} from './TNTLeft';
import {Logo} from './Logo';
import {TalkTitle} from './TalkTitle';

const {fontFamily} = loadFont();
export const TNT24Phrase = ({title}: DefaultProps) => {
	const frame = useCurrentFrame();

	const SlideDown = interpolate(frame, [300, 330], [0, 650], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
		easing: Easing.bezier(0.51, -0.75, 0.99, 0.75),
	});

	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
				overflow: 'hidden',
				fontFamily,
				textTransform: 'uppercase',
			}}
		>
			<Sequence>
				<BackgroundFiller
					imageUrl={staticFile(
						'/images/showcases/tnt24/gray_bg.jpg',
					)}
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
					}}
				/>
			</Sequence>
			<Sequence from={30}>
				<TNTLeft />
			</Sequence>
			<Sequence from={110}>
				<Android />
			</Sequence>
			<Sequence>
				<Logo />
			</Sequence>
			<div
				style={{
					height: '100%',
					transform: `translateY(${SlideDown}px)`,
				}}
			>
				<Sequence name="Speakers" from={30}>
					<TalkTitle
						title={title}
						style={{
							bottom: '300px',
						}}
					/>
				</Sequence>
			</div>
		</AbsoluteFill>
	);
};
