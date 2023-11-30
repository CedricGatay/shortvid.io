import {mix} from 'polished';
import {interpolate, interpolateColors, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';

const colors = ['#42e9f5', '#4290f5'];

const green = '#6abfad';
const blue = '#222333';
const no = 'transparent';

const blues = [
	{x:0,y:0},
	{x:0,y:1},
	{x:0,y:2},
	{x:1,y:1},
	{x:2,y:1},

	{x:0,y:4},
	{x:0,y:5},
	{x:0,y:6},
	{x:1,y:5},
	{x:2,y:5}
]
const greens = [
	{x:1, y:2},
	{x:2, y:2},
	{x:1, y:3, z: 'd'},
	{x:1, y:4},
	{x:2, y:4},
	{x:0, y:2, z: 'd'},
	{x:0, y:4, z: 'd'},
	{x:2, y:3, z: 'u'},
]

const getColor = (x: number,y: number, z: 'd' | 'u', frame: number): string => {
	let color: string | undefined = undefined;
	if(greens.find((item) => (item.x === x && item.y === y && (item.z === undefined || item.z === z)))) {
		color= green;
	} else if(blues.find((item) => (item.x === x && item.y === y))) {
		color= blue;
	}
	if (color !== undefined){
		return interpolateColors(frame - 70, [0,20], [color,"#7e0f12"] )
	}
	return no;
}


const Container = styled.div`
	height: 350px;
	width: 750px;
	display: flex;
	padding: 5px;
`;

const Column = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	flex: 1;
`;

const Core: React.FC<{x:number;y:number;style: any; frame: number}> =({x,y,style}) => {
	const frame = useCurrentFrame();
	const downColor = getColor(x,y, 'd', frame)
	const upColor = getColor(x,y, 'u', frame)
	return downColor === upColor ? (<div style={{ ...style, backgroundColor: downColor}}/>) :
	 (<div style={style}><svg height="100%" width="100%" viewBox='0 0 100 100' preserveAspectRatio="none">
  <polygon points="0,100 0,0 100,100" fill={getColor(x,y, 'd', frame)} />
  <polygon points="100,0 0,0 100,100" fill={getColor(x,y, 'u', frame)} />
</svg></div>)
}

const CoreContainer: React.FC<{
	x: number;
	y: number;
}> = ({x, y}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const offset = x * 4 + y;
	const progress = frame < 90 ? spring({
		fps,
		frame: frame - Number(offset),
	}) : spring({fps, frame: frame - 90, from: 1, to: 30})
	return <Core style={{flex: 1,margin: '5px', transform: `scale(${progress})`}} x={x} y={y} />;
};

export const Cpu: React.FC = () => {
	return (
		<Container>
			<Column>
				{new Array(3).fill(true).map((k, i) => {
					return (
						<Row>
							{new Array(7).fill(true).map((x, j) => {
								return <CoreContainer x={i} y={j} />;
							})}
						</Row>
					);
				})}
			</Column>
		</Container>
	);
};
