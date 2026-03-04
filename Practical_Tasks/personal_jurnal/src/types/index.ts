export interface JournalItem {
  id: number;
  title: string;
  text: string;
  date: Date;
  tag: string;
}

export interface JournalFormData {
  title: string;
  text: string;
  date: string;
  tag: string;
}
