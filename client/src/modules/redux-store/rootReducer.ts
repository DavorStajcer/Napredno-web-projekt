import { combineReducers } from '@reduxjs/toolkit';
import { eventReducer } from 'modules/event/redux/eventSlice';

const rootReducer = combineReducers({ eventReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
