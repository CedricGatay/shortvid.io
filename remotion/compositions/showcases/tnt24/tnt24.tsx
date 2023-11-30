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
import { Multithreaded } from './MultiThreaded';
import { useLottie } from '../../../hooks/useLottie';
import { Lottie } from '@remotion/lottie';
const {fontFamily} = loadFont();

export const TNT24 = ({
	day,
	title,
	subtitle,
	header,
}: z.infer<typeof TNT24Schema> ) => {
	const snow = useLottie('lf20_kZx06J');

	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
				overflow: 'hidden',
				fontFamily,
				textTransform: 'uppercase',
			}}
		>
			<Sequence from={0}>
				<Multithreaded day={day}></Multithreaded>
			</Sequence>
			<Sequence>
			<Lottie
				style={{
					position: "absolute",
					width: '100%',
					height: '100%',
					filter: 'none',
				}}
				loop={true}
				animationData={snow}
			/>
			</Sequence>
			{/* <Sequence from={120}>
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
			</Sequence> */}
			<Sequence from={130}>
				<TNTLeft />
			</Sequence>
			<Sequence from={150}>
				<Android />
			</Sequence>
			<Sequence from={100}>
				<Logo />
			</Sequence>
			<Sequence name="Speakers" from={100}>
				<Speakers speakers={header} />
				<TalkTitle title={subtitle} style={{}} />
			</Sequence>
			{/* <Sequence from={70}>
				<Details date={date} time={time} location={location} />
			</Sequence> */}
		</AbsoluteFill>
	);
};
