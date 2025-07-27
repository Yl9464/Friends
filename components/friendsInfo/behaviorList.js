import React from 'react'

const BehaviorList = (props) => {
    const {behaviors} = props
    
    return (
        <h2>Behaviors
            {behaviors.trait}
        </h2>
    )
}

export default BehaviorList