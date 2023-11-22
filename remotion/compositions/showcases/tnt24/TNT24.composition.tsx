import React from 'react';
import {Composition, Folder} from 'remotion';

import {defaultTalkValues} from '../../../../src/data/defaultValues';

import {TNT24} from './tnt24';
import {TNT24Loop} from './TNT24Loop';
import { TNT24LoopTotem} from './TNT24LoopTotem';
import { TNT24Phrase} from './TNT24Phrase';

export const TNT24Composition = () => {
	return (
		<Folder name="TNT24">
			<Composition
				id="TNT24Talk"
				component={TNT24}
				durationInFrames={300}
				fps={30}
				width={1280}
				height={720}
				defaultProps={defaultTalkValues}
			/>
			<Composition
				id="TNT24TalkLoop"
				component={TNT24Loop}
				durationInFrames={350}
				fps={30}
				width={1280}
				height={720}
				defaultProps={defaultTalkValues}
			/>
			<Composition
				id="TNT24TalkLoopTotem"
				component={TNT24LoopTotem}
				durationInFrames={350}
				fps={30}
				width={720}
				height={1280}
				defaultProps={defaultTalkValues}
			/>
			<Composition
				id="TNT24Phrase"
				component={TNT24Phrase}
				durationInFrames={350}
				fps={30}
				width={1280}
				height={720}
				defaultProps={defaultTalkValues}
			/>
		</Folder>
	);
};
