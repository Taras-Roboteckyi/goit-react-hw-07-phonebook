import { createSelector } from '@reduxjs/toolkit';

export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

/* export const getVisibleItems = state => { //Старий варіант до мемоізації///////////////////
  const items = getItems(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return items.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
}; */

export const getVisibleItems = createSelector(getItems, getFilter, (items, filter) => {
  //Ця функція мемомізується, тобто ф-я буде виконана коли зміниться лише items або filter
  const normalizedFilter = filter.toLowerCase();
  return items.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
});
