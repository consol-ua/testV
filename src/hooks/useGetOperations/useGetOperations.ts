import { useQuery } from '@tanstack/react-query';

type OperationsType = Record<number, { name: string }>;

function useGetOperations() {
  async function fetchOperations(): Promise<OperationsType> {
    const response = await fetch('/api/operations');

    return response.json();
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
