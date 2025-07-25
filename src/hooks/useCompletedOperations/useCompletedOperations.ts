import { useCallback } from 'react';

import { useReactQueryState } from '@/hooks/useReactQueryState';

type OperationsType = {
  name: string;
  timeInSecond: number;
};

function useCompletedOperations() {
  const { setValue, value } = useReactQueryState<OperationsType[]>(
    ['completed-operation'],
    []
  );

  const setCompletedOperations = useCallback(
    (operation: string, timeInSecond: number) => {
      const oldValue = value || [];

      setValue([
        ...oldValue,
        {
          name: operation,
          timeInSecond
        }
      ]);
    },
    [setValue, value]
  );

  return {
    setCompletedOperations,
    completedOperation: value
  };
}

export default useCompletedOperations;
