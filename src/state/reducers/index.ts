import { combineReducers } from 'redux';
import fetchDataFirebase from './fetchDataFirebase';

const reducers = combineReducers({
    dataFirebase: fetchDataFirebase,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
