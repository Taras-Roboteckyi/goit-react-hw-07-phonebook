import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import { itemsReducer } from './items';

//////Middleware-Прослойка///////////
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

////////Store///////////////////
const store = configureStore({
  reducer: {
    contacts: itemsReducer,
  },
  middleware,
});
//console.log(store.getState());

/* const persistor = persistStore(store); */

export { store };
