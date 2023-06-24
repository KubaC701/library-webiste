export const addDays = (date, days) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

export const formatDate = (date) => new Date(date).toLocaleDateString();

export const isInThePast = (date) => new Date(date) < new Date();
