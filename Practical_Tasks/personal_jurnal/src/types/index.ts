export interface JournalItem {
  id: number;
  title: string;
  post: string;
  date: Date;
  tag: string;
  userId: number;
}

export interface JournalFormData {
  title: string;
  post: string;
  date: string;
  tag: string;
  userId: number;
}

export type StoredJournalItem = Omit<JournalItem, "date"> & { date: string };

export type UserId = number;

export type OnUserChange = (userId: UserId) => void;
