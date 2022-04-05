import { configureStore /* getDefaultMiddleware  */ } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
//import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import { /* itemsReducer, */ Api } from './items';

//////Middleware-Прослойка///////////
//const middleware = [...getDefaultMiddleware(), Api.contactsApi.middleware];

////////Store///////////////////
const store = configureStore({
  reducer: {
    /* contacts: itemsReducer, */
    [Api.contactsApi.reducerPath]: Api.contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(Api.contactsApi.middleware),
});
//console.log(store.getState());

/* const persistor = persistStore(store); */

setupListeners(store.dispatch);

export { store };
