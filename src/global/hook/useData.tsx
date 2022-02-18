import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react';

type DataProps = {
  id: number;
  type: 'expenditure' | 'revenue';
  title: string;
  date: string;
  description: string;
  value: number;
};

interface DataContextProps {
  data: DataProps[];
  handleData: (value: DataProps[]) => void;
}

interface FunctionProps {
  children: React.ReactNode;
}

const DataContext = createContext({} as DataContextProps);

export function DataContextProvider({ children }: FunctionProps) {
  const [data, setData] = useState<DataProps[]>([
    {
      id: 1,
      type: 'expenditure',
      title: 'Mercado',
      date: '31/01/2021',
      description:
        'Descrição simply dummy text of the printing and typesetting industry.',
      value: 30
    },
    {
      id: 2,
      type: 'expenditure',
      title: 'Pizzaria',
      date: '31/01/2021',
      description:
        'Descrição simply dummy text of the printing and typesetting industry.',
      value: 50
    },
    {
      id: 3,
      type: 'expenditure',
      title: 'Roupa',
      date: '31/01/2021',
      description:
        'Descrição simply dummy text of the printing and typesetting industry.',
      value: 70
    },
    {
      id: 4,
      type: 'expenditure',
      title: 'Lanche',
      date: '31/01/2021',
      description:
        'Descrição simply dummy text of the printing and typesetting industry.',
      value: 10
    },
    {
      id: 6,
      type: 'expenditure',
      title: 'Açai',
      date: '31/01/2021',
      description:
        'Descrição simply dummy text of the printing and typesetting industry.',
      value: 5
    },
    {
      id: 5,
      type: 'expenditure',
      title: 'Doce',
      date: '31/01/2021',
      description:
        'Descrição simply dummy text of the printing and typesetting industry.',
      value: 2
    },
    {
      id: 7,
      type: 'revenue',
      title: 'Salário',
      date: '31/01/2021',
      description:
        'Descrição simply dummy text of the printing and typesetting industry.',
      value: 2000
    },
    {
      id: 8,
      type: 'revenue',
      title: 'Venda de celular',
      date: '31/01/2021',
      description:
        'Descrição simply dummy text of the printing and typesetting industry.',
      value: 600
    },
    {
      id: 9,
      type: 'revenue',
      title: 'Freelance',
      date: '31/01/2021',
      description:
        'Descrição simply dummy text of the printing and typesetting industry.',
      value: 1520
    }
  ]);

  const handleData = useCallback((value: DataProps[]) => {
    setData(value);
  }, []);

  const value = useMemo(() => {
    return { data, handleData };
  }, [data, handleData]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export const useData = () => useContext(DataContext);
