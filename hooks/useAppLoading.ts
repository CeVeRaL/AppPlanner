import { useState, useEffect } from 'react';

export function useAppLoading() {
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
  };

  return { isLoading, finishLoading };
}