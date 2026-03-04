export interface JournalItem {
  id: number;
  title: string;
  text: string;
  date: Date;
  tag: string;
}

export interface JournalFormData {
  title: string;
  post: string;
  date: string;
  tag: string;
}
