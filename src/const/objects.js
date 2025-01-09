const BORDER_COLOR = 'gray'
const BORDER_WIDTH = 10;

const BALL_COLOR = 'white'
const PLAYER_ONE_COLOR = 'green'
const PLAYER_TWO_COLOR = 'red'
const PLAYER_RACKET_SIZE = 20

const DEPTH = 20

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
        width: 1,
        height: PLAYER_RACKET_SIZE,
        depth: DEPTH,
        x: -50,
        y: 0,
        z: 0,
        color: PLAYER_ONE_COLOR
    },
    {
        name: 'player_two',
        type: 'box',
        width: 1,
        height: PLAYER_RACKET_SIZE,
        depth: DEPTH,
        x: 50,
        y: 0,
        z: 0,
        color: PLAYER_TWO_COLOR
    },
    {
        name: 'left_border',
        type: 'box',
        width: BORDER_WIDTH,
        height: 90,
        depth: DEPTH,
        x: -70,
        y: 0,
        z: 0,
        color: BORDER_COLOR
    },
    {
        name: 'right_border',
        type: 'box',
        width: BORDER_WIDTH,
        height: 90,
        depth: DEPTH,
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
        depth: DEPTH,
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
        depth: DEPTH,
        x: 0,
        y: 40,
        z: 0,
        color: BORDER_COLOR
    },
]