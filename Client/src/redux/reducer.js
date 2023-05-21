import { ADD_FAV, DELETE_FAV, FILTER } from "./types"

const initialState = {
    myFavorites: [],
    allCaracters: []
}

const rootReducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                allCaracters: [...state.allCaracters, action.payload], myFavorites: [...state.allCaracters, action.payload]
            }
        case DELETE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(elemento => elemento.id !== action.payload) //si es igual no lo incluye en la lista
            }
        case FILTER:
            return {
                
            }

        default:
            return { ...state }
    }
}

export default rootReducer
