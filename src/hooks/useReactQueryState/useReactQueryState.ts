import { useCallback } from 'react';

import { QueryKey, useQuery, useQueryClient } from '@tanstack/react-query';

function useReactQueryState<ValueType>(
  cacheKey: QueryKey,
  initialValue: ValueType
) {
  const queryClient = useQueryClient();

  const { data } = useQuery<ValueType>({
    queryKey: cacheKey,
    queryFn: () => {
      const cachedValue = queryClient.getQueryData<ValueType>(cacheKey);
      return cachedValue === undefined ? initialValue : cachedValue;
    }
  });

  const setValue = useCallback<
    (
      valueOrUpdater:
        | ValueType
        | undefined
        | ((oldData: ValueType | undefined) => ValueType | undefined)
    ) => void
  >(
    (valueOrUpdater) =>
      queryClient.setQueryData<ValueType | undefined>(cacheKey, valueOrUpdater),
    [queryClient, cacheKey]
  );

  return {
    setValue,
    value: data
  };
}

export default useReactQueryState;
