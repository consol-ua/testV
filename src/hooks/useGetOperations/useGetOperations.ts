import { useQuery } from '@tanstack/react-query';

const testDate: Posts = {
  '1': {
    name: 'Переробка'
  },
  '2': {
    name: 'Збірка рами'
  },
  '3': {
    name: 'Пайка ESC'
  },
  '4': {
    name: 'Монтаж стійок 8"'
  },
  '5': {
    name: 'Монтаж моторів'
  },
  '6': {
    name: 'Перевірка рами'
  },
  '7': {
    name: 'Виправлення браку'
  },
  '8': {
    name: 'Кріплення дротів ізолентою 8"'
  },
  '9': {
    name: 'Перерахунок комплектуючих рами'
  },
  '10': {
    name: 'Мийка рами Апекс'
  },
  '11': {
    name: 'Сортування метизу для рами'
  },
  '12': {
    name: 'Проклейка рами'
  },
  '13': {
    name: 'Заміна моторних гвинтів'
  },
  '14': {
    name: 'Монтаж моторів 8"'
  },
  '15': {
    name: 'Монтаж моторів 10"'
  },
  '16': {
    name: 'Монтаж стійок 10"'
  },
  '17': {
    name: 'Збірка рами з ложементом'
  },
  '18': {
    name: 'Підготовка плати ESC'
  },
  '19': {
    name: 'Перевірка ESC'
  },
  '20': {
    name: 'Перерахунок комплектуючих ESC'
  }
};

type Posts = Record<number, { name: string }>;

function useGetOperations() {
  async function fetchOperations(): Promise<Posts> {
    const response = await fetch(
      `http://93.114.128.195/test-front/get_operations?token=${process.env.NEXT_PUBLIC_API_TOKEN || ''}`,
      { method: 'GET' }
    );

    // const response = new Promise<Posts>((resolve) => {
    //   setTimeout(() => resolve(testDate), 1000);
    // });

    return response.json();
    // return response;
  }

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['operations'],
    queryFn: fetchOperations
  });

  return {
    operations: Object.values(data || {}),
    operationsError: error,
    operationsIsLoading: isLoading,
    operationsIsError: isError
  };
}

export default useGetOperations;
