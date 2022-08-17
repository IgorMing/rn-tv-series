import _isEqual from 'lodash.isequal';
import _uniqBy from 'lodash.uniqby';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDebounce } from 'use-debounce';
import axios from '../../lib/axios';
import { getNestedShowsFromJson, getShowsFromJson, Show } from './model';

const useShowList = () => {
  const [query, setQuery] = useState('');
  const [debouncedSearch] = useDebounce(query, 1000);
  const [currPage, setCurrPage] = useState<number | undefined>(undefined);

  const [shows, setShows] = useState<Show[]>([]);
  const [showsBySearch, setShowsBySearch] = useState<Show[]>([]);

  const filteredData = useMemo(() => {
    if (!debouncedSearch) {
      return shows;
    }

    return showsBySearch;
  }, [debouncedSearch, shows, showsBySearch]);

  const mergeData = useCallback(
    (data: Show[]) => {
      if (_isEqual(query, data)) {
        return;
      }

      const instance: Show[] = shows.concat(data);
      const uniqShows = _uniqBy(instance, (value: Show) => value.id);
      setShows(uniqShows);
    },
    [query, shows],
  );

  const fetch = useCallback(
    async (page = 0) => {
      if (page === currPage) {
        return;
      }

      const response = await axios.get(`/shows?page=${page}`);
      setCurrPage(page);
      mergeData(getShowsFromJson(response.data));
    },
    [currPage, mergeData],
  );

  const fetchByQuery = useCallback(async (q: string) => {
    const response = await axios.get(`/search/shows?q=${q}`);
    const { data } = response;
    setShowsBySearch(getNestedShowsFromJson(data));
  }, []);

  const getShowById = useCallback(
    (id: number): Show | undefined => {
      return shows.find(show => show.id === id);
    },
    [shows],
  );

  // fetch initial data
  useEffect(() => {
    fetch();
  }, [fetch]);

  // refetch data after `debouncedSearch` gets changed
  useEffect(() => {
    fetchByQuery(debouncedSearch);
  }, [debouncedSearch, fetchByQuery]);

  // infinite scroll
  // when `currPage` changes, this is called
  useEffect(() => {
    fetch(currPage);
  }, [currPage, fetch]);

  return { setSearch: setQuery, filteredData, getShowById };
};

export { useShowList };
