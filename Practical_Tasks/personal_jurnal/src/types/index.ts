export interface JournalItem {
  id: number;
  title: string;
  post: string;
  date: Date;
  tag: string;
}

export interface JournalFormData {
  title: string;
  post: string;
  date: string;
  tag: string;
}

export type StoredJournalItem = Omit<JournalItem, "date"> & { date: string };

export type UserId = "user1" | "user2" | "user3";

export type OnUserChange = (userId: UserId) => void;
