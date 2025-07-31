'use client';

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AccountState, AccountResponse } from '../types';

const initialState: AccountState = {
  accountId: null,
  balance: 0,
  status: 'idle',
  error: null
};

export const fetchAccount = createAsyncThunk<AccountResponse, void, { rejectValue: string }>(
  'account/fetchAccount',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("/api/account");
      if (!res.ok) throw new Error('Falha ao carregar conta');
      return (await res.json()) as AccountResponse;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Erro desconhecido');
    }
  }
);

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    resetAccount: () => initialState,
    updateBalance: (state, action: PayloadAction<number>) => {
      state.balance = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccount.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAccount.fulfilled, (state, action: PayloadAction<AccountResponse>) => {
        state.status = 'succeeded';
        state.accountId = action.payload.id;
        state.balance = action.payload.current_balance;
      })
      .addCase(fetchAccount.rejected, (state, action) => {
        state.status = 'failed';
        state.accountId = '';
        state.balance = -1;
      });
  }
});

export const { resetAccount, updateBalance } = accountSlice.actions;
export default accountSlice.reducer;