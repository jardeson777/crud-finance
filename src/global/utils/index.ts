interface DataProps {
  id: number;
  type: 'expenditure' | 'revenue';
  title: string;
  date: string;
  description: string;
  value: number;
}

export function sumRevenue(data: DataProps[]) {
  const dataFilter = data.filter(item => item.type === 'revenue');

  const valueFilter = dataFilter.map(item => item.value);

  const sumTotal = valueFilter.reduce((sum, number) => {
    return sum + number;
  });

  return sumTotal;
}

export function sumExpenditure(data: DataProps[]) {
  const dataFilter = data.filter(item => item.type === 'expenditure');

  const valueFilter = dataFilter.map(item => item.value);

  const sumTotal = valueFilter.reduce((sum, number) => {
    return sum + number;
  });

  return sumTotal;
}
