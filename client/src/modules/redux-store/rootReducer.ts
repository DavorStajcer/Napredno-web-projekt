import { combineReducers } from '@reduxjs/toolkit';
import { eventReducer } from 'modules/event';
import { authReducer } from 'modules/auth';
import { reservationReducer } from 'modules/reservation/redux';
import { userReducer } from 'modules/user';

const rootReducer = combineReducers({
  events: eventReducer,
  auth: authReducer,
  reservation: reservationReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
