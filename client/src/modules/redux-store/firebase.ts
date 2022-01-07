import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyB3yqlzxnrDIc1veIkk8f7Zo-IMmaCxSSg',
  authDomain: 'event-planner-5fa62.firebaseapp.com',
  databaseURL:
    'https://event-planner-5fa62-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'event-planner-5fa62',
  storageBucket: 'event-planner-5fa62.appspot.com',
  messagingSenderId: '791719212244',
  appId: '1:791719212244:web:ad67684ae24ad309e1f741',
});
export const database = getDatabase(firebaseApp);
