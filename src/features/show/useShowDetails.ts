import { useCallback, useEffect, useState } from 'react';
import axios from '../../lib/axios';
import { getShowFromJson, Show } from './model';
import { useShowList } from './useShowList';

const useShowDetails = (id: number) => {
  const [show, setShow] = useState<Show | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const { getShowById } = useShowList();

  const fetch = useCallback(async () => {
    try {
      const response = await axios.get(`/shows/${id}`);
      setShow(getShowFromJson(response.data));
    } catch (err) {
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    const inMemoryShow = getShowById(id);

    // if have not found it into the current show's list, fetch it individually
    if (!inMemoryShow) {
      fetch();
      return;
    }

    setShow(inMemoryShow);
    setLoading(false);
  }, [fetch, getShowById, id]);

  return { data: show, loading };
};

export { useShowDetails };
