import React from 'react';
import {loadFont} from '@remotion/google-fonts/CrimsonText';
import {AbsoluteFill, Sequence, staticFile} from 'remotion';

import {BackgroundFiller} from '../../../design/atoms/BackgroundFiller';
import {DefaultProps} from '../../../types/defaultProps.types';

import {Android} from './Android';
import {Details} from './Details';
import {TNTLeft} from './TNTLeft';
import {Logo} from './Logo';
import {Speakers} from './Speakers';
import {TalkTitle} from './TalkTitle';

const {fontFamily} = loadFont();
export const TNT24 = ({
	title,
	speakers,
	date,
	time,
	location,
}: DefaultProps) => {
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
						'/images/showcases/tnt24/background.png',
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
			<Sequence name="Speakers" from={30}>
				<Speakers speakers={speakers} />
				<TalkTitle title={title} style={{}} />
			</Sequence>
			{/* <Sequence from={70}>
				<Details date={date} time={time} location={location} />
			</Sequence> */}
		</AbsoluteFill>
	);
};
