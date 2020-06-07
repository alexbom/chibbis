export const dateFormat = (date: string) => { // Todo change to dayjs
  const parts = date.split('T');
  const d = parts[0].split('-');
  const time = parts[1].split('.');
  const t = time[0].split(':');

  return `${d[2]}.${d[1]}.${d[0]} ${t[0]}:${t[1]}`;
};

export const getPercent = (total: number, count: number) => Math.round(count / total * 100);
