// Reducer.js handles state needed for Player component

const initialState = {
    tiles: [],
}
 
const mapReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TILES' :
        return {
            ...action.payload // return new object
        }
        default:
            return state

    }
}

export default mapReducer