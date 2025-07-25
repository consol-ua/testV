import { useCallback } from 'react';

import { useReactQueryState } from '@/hooks/useReactQueryState';

type OperationsType = {
  name: string;
  inprogress: boolean;
  pause: boolean;
  timeInSeconds: number;
} | null;

function useSelectedOperation() {
  const { setValue, value } = useReactQueryState<OperationsType>(
    ['selected-operation'],
    null
  );

  const setOperation = useCallback(
    (operation: string) => {
      setValue({
        name: operation,
        inprogress: true,
        pause: false,
        timeInSeconds: 0
      });
    },
    [setValue]
  );

  const togglePauseOperation = useCallback(() => {
    setValue(
      value
        ? {
            name: value.name,
            inprogress: !value?.inprogress,
            pause: !value?.pause,
            timeInSeconds: value.timeInSeconds
          }
        : null
    );
  }, [setValue, value]);

  const setOperationTimeInSeconds = useCallback(
    (timeInSeconds: number) => {
      setValue(
        value
          ? {
              ...value,
              timeInSeconds
            }
          : null
      );
    },
    [setValue, value]
  );

  const clearSelectedOperation = useCallback(() => {
    setValue(null);
  }, [setValue]);

  return {
    setOperation,
    togglePauseOperation,
    setOperationTimeInSeconds,
    clearSelectedOperation,
    selectedOperation: value
  };
}

export default useSelectedOperation;
