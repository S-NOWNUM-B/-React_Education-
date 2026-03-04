export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("ru-RU").format(date);
};

export const parseDate = (dateString: string | Date): Date => {
  return dateString instanceof Date ? dateString : new Date(dateString);
};
