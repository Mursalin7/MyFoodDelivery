import {combineReducers} from 'redux';

export const shop = (state=[],action) =>{
    console.log(action);
    return {...state}
}

export default combineReducers({shop});

