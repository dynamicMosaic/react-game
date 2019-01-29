import React from 'react'
import bruja from './bruja.png'
import { connect } from 'react-redux'
import handleMovement from './movement'

function Player(props) {
    return (
        <div style={{
            position: 'absolute',
            top: props.position[1],
            left: props.position[0],
            backgroundImage: `url('${bruja}')`,
            backgroundPosition: '0 0',
            width: '50px',
            height: '65px'
            
        }}
        />
    )
} 

function mapStateToProps(state) {
    return {
        ...state.player,
    }
}

export default connect(mapStateToProps)(handleMovement(Player)) 
