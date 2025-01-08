const BORDER_COLOR = 'white'
const BORDER_WIDTH = 10;

const BALL_COLOR = 'white'
const PLAYER_ONE_COLOR = 'green'
const PLAYER_TWO_COLOR = 'red'


export const CONSTANTS = [
    {
        name: 'ball',
        type: 'sphere',
        radius: 1,
        width_segments: 32,
        sphere_height_segments: 16,
        x: 0,
        y: 0,
        z: 0,
        color: BALL_COLOR
    },
    {
        name: 'player_one',
        type: 'box',
        width: 50,
        height: 2,
        depth: 5,
        x: 0,
        y: -30,
        z: 0,
        color: PLAYER_ONE_COLOR
    },
    {
        name: 'player_two',
        type: 'box',
        width: 100,
        height: 2,
        depth: 5,
        x: 0,
        y: 30,
        z: 0,
        color: PLAYER_TWO_COLOR
    },
    {
        name: 'left_border',
        type: 'box',
        width: BORDER_WIDTH,
        height: 100,
        depth: 5,
        x: -70,
        y: 0,
        z: 0,
        color: BORDER_COLOR
    },
    {
        name: 'right_border',
        type: 'box',
        width: BORDER_WIDTH,
        height: 100,
        depth: 5,
        x: 70,
        y: 0,
        z: 0,
        color: BORDER_COLOR
    },
    {
        name: 'bottom_border',
        type: 'box',
        width: 140,
        height: BORDER_WIDTH,
        depth: 5,
        x: 0,
        y: -40,
        z: 0,
        color: BORDER_COLOR
    },
    {
        name: 'top_border',
        type: 'box',
        width: 140,
        height: BORDER_WIDTH,
        depth: 5,
        x: 0,
        y: 40,
        z: 0,
        color: BORDER_COLOR
    },
]