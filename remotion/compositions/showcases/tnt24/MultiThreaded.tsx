import styled from 'styled-components';
import {Cpu} from './Cpu';
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { Lottie } from '@remotion/lottie';
import { useLottie } from '../../../hooks/useLottie';

const Container = styled.div`
	background-color: white;
	flex: 1;
	justify-content: center;
	align-items: center;
	display: flex;
`;

const Title = styled.h2`
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 70px;
	font-weight: 700;
	text-align: center;
	margin: 0
`;

const Column = styled.div`
	flex-direction: column;
	display: flex;
	align-items: center;
`;

export const Multithreaded: React.FC<{day: number}> = ({day}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const scale = spring({fps, frame, from: 0, to: 1})
	const opacity = frame > 60 ? interpolate(frame - 60, [0, 10], [1, 0]) : 1
	return (
		<Container>
			<Column>
				<Cpu />
				<div style={{opacity, transform: `scale(${scale})`, position: 'relative'}}>
				<Img
			src={staticFile(
				'/images/showcases/tnt24/calendar-christmas.svg',
			)}
			width={200}
			height="auto"
			style={{marginTop: 30}}
		/>
		<Title style={{color: "#7e0f12",position: 'absolute', top: 110, left: -30, bottom: 0, right: 0}}>{day}</Title>
				</div>
				
			</Column>
		</Container>
	);
};
