import store from "../../config/store";
import { SPRITE_SIZE, MAP_HEIGHT, MAP_WIDTH } from '../../config/constants'


export default function handleMovement(player) {


    function getNewPosition(oldPos, direction){
        const oldPos = store.getState().player.position
        switch(direction) {
            case 'west':
            return [ oldPos[0]- SPRITE_SIZE,  oldPos[1] ]
            case 'east':
            return [ oldPos[0]+ SPRITE_SIZE,  oldPos[1] ]
            case 'north':
            return [ oldPos[0], oldPos[1]- SPRITE_SIZE  ]
            case 'south':
            return [ oldPos[0],  oldPos[1]+ SPRITE_SIZE ]
        }
        
    }
    
    function observeBoundaries(oldPos, newPos) {
        return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE) &&
                (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)
                
    }

    function observeImpassable(oldPos, newPos) {
        const tiles = store.getState().map.tiles
        const y = newPos[1] / SPRITE_SIZE
        const x = newPos[0] / SPRITE_SIZE
        const nextTile = tiles[y][x]
        return nextTile < 5 // return anything less than 5 because 5 or above is set as impassable object on map matrix
    }

    // Updates redux store
    function dispatchMove(newPos){
    const oldPos = store.getState().player.position
    const newPos = getNewPosition(direction)
    store.dispatch({
        type: 'MOVE_PLAYER',
        payload: {
            position: newPos
        }
    })
}

function attemptMove(direction) {
    const oldPos = store.getState().player.position
    const newPos = getNewPosition(oldPos.direction)

if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos))
    dispatchMove(newPos)


}

function handleKeyDown(e) {
    e.preventDefault()

    switch(e.keyCode){
        case 37:
            return dispatchMove('west')
        
        case 38:
            return dispatchMove('north')
        
        case 39:
            return dispatchMove('east')
        
        case 40:
            return dispatchMove('south')
        

    }
}

window.addEventListener('keydown', (e) => {
    handleKeyDown(e)
})

    return player
}