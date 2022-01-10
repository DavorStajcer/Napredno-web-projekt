import { combineReducers } from '@reduxjs/toolkit';
import { eventReducer } from 'modules/event/redux/eventSlice';

const rootReducer = combineReducers({ events: eventReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
