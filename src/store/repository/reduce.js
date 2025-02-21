import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  repositoryList: []
};

export const repositorySlice = createSlice({
  name: 'repository',
  initialState,
  reducers: {
    setRepositoryList(state, action) {
      state.repositoryList = action.payload;
    },
    addFavoriteRepo(state, action) {
      const index = action.payload.index;
      state.repositoryList[index].isFavorite =
        !state.repositoryList[index].isFavorite;
    }
  }
});

export const { setRepositoryList, addFavoriteRepo } = repositorySlice.actions;
