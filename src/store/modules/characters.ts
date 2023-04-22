/* eslint-disable no-param-reassign */
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import type { TCharacter } from '../../services';
import * as service from '../../services';
import { RootState } from '..';

interface ICharactersSlice {
  loading: boolean;
  error: string | null;
  page: number;
  totalCharacters: number;
  previousPage: string | null;
  nextPage: string | null;
}

const adapter = createEntityAdapter<TCharacter>({
  // regex para separar id da url
  selectId: (character) => {
    const regex = /\/(\d+)\/$/;
    const [, id] = character.url.match(regex)!;
    character.id = id;
    return id;
  },
});

const getCharactersByPage = createAsyncThunk(
  'characters/getByPage',
  async (page: number) => {
    const res = await service.getCharactersByPage(page);
    return res;
  },
);

const slice = createSlice({
  name: 'characters',
  initialState: adapter.getInitialState({
    page: 1,
    totalCharacters: 0,
  } as ICharactersSlice),
  reducers: {
    addCharacters: adapter.addMany,
    changePage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCharactersByPage.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getCharactersByPage.fulfilled, (state, action) => {
      adapter.setAll(state, action.payload.results);
      state.nextPage = action.payload.next;
      state.previousPage = action.payload.previous;
      state.totalCharacters = action.payload.count;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getCharactersByPage.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });
  },
});

export const charactersSelectors = adapter.getSelectors(
  (state: RootState) => state.characters,
);
export const charactersAsyncThunk = { getCharactersByPage };
export const charactersActions = slice.actions;
export const charactersSlice = slice.reducer;
