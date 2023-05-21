import { ADD_FAV, DELETE_FAV, FILTER, ORDER } from "./types";
// import axios from 'axios'

export function addFav(char) {
    return {
        type: ADD_FAV,
        payload: char
    }
};
export function deleteFav(id) {
    return {
        type: DELETE_FAV,
        payload: id
    };
};
export function filterCards(status) {
    return {
        type: FILTER,
        payload: status
    };
};
export function orderCards(id) {
    return {
        type: ORDER,
        payload: id
    };
};

