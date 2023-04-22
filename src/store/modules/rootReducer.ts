import { combineReducers } from '@reduxjs/toolkit';
import { charactersSlice } from './characters';

export const rootReducer = combineReducers({
  characters: charactersSlice,
});
