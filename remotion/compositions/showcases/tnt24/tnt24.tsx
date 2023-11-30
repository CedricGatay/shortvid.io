import React from 'react';
import {loadFont} from '@remotion/google-fonts/CrimsonText';
import {AbsoluteFill, Sequence, staticFile} from 'remotion';

import {BackgroundFiller} from '../../../design/atoms/BackgroundFiller';
import {DefaultProps} from '../../../types/defaultProps.types';
import { TNT24Schema } from './TNT24.composition';
import {Android} from './Android';
import {Details} from './Details';
import {TNTLeft} from './TNTLeft';
import {Logo} from './Logo';
import {Speakers} from './Speakers';
import {TalkTitle} from './TalkTitle';
import { z } from 'zod';
const {fontFamily} = loadFont();

export const TNT24 = ({
	title,
	subtitle,
	header,
}: z.infer<typeof TNT24Schema> ) => {
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
			<Sequence name="Speakers" from={30}>
				<Speakers speakers={header} />
				<TalkTitle title={subtitle} style={{}} />
			</Sequence>
			{/* <Sequence from={70}>
				<Details date={date} time={time} location={location} />
			</Sequence> */}
		</AbsoluteFill>
	);
};
