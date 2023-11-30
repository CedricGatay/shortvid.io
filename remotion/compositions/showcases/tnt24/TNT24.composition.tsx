import React from 'react';
import {Composition, Folder} from 'remotion';

import {defaultTalkValues} from '../../../../src/data/defaultValues';

import {TNT24} from './tnt24';
import {TNT24Loop} from './TNT24Loop';
import { TNT24LoopTotem} from './TNT24LoopTotem';
import { TNT24Phrase} from './TNT24Phrase';

import { z } from "zod";
export const TNT24Header = z.object( {
	name: z.string(),
	url: z.string()
});

export const TNT24Schema = z.object({
	title: z.string(),
	subtitle: z.string(),
	header: z.array(TNT24Header)
});


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
				schema={TNT24Schema}
				defaultProps={{
					title: "Patrick Martineau",
					subtitle: "Il nous accompagne depuis la première édition : Patrick Martineau",
					header: [
						{
							name: "Patrick Martineau",
							url: "https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaAdA7AEVdTCCBlcMZVNEFmUXpQi3DGmfyFl4zg1QL52S9MF9Fy5G64aLb8o3HH6683-hcVSsY2nfAtS7u0HMmrm4QJR=w3600-h2080"
						}
					]
				}}
			/>
			{/* <Composition
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
			/> */}
		</Folder>
	);
};
