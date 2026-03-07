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
