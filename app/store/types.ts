export interface AccountState {
  accountId: string | null;
  balance: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export interface AccountResponse {
  id: string;
  current_balance: number;
}