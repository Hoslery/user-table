import React from "react";

/**
 * Кастомный хук для работы с запросами на сервер,
 * обработкой ошибок и отслеживанием состояния загрузки данных.
 * @param callback 
 */
export const useFetching = (callback: (...agrs: any[]) => void) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const fetching = async (...args: any[]) => {
      try {
          setIsLoading(true)
          await callback(...args)
      } catch (e) {
          setError((e as Error).message);
      } finally {
          setIsLoading(false)
      }
  }

  return [fetching, isLoading, error]
}