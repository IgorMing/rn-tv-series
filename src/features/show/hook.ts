import { useCallback, useEffect, useState } from 'react';
import axios from '../../lib/axios';
import { getShowsFromJson, ShowProps } from './model';

const useShows = () => {
  const [shows, setShows] = useState<ShowProps[]>([]);

  const fetchAll = useCallback(async () => {
    const response = await axios.get('shows');
    setShows(getShowsFromJson(response.data));
  }, []);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  return { data: shows };
};

export { useShows };
