import { useCallback, useEffect, useState } from 'react';
import axios from '../../lib/axios';
import { Episode, getEpisodesFromJson } from '../episode/model';
import { getShowFromJson, Show } from './model';
import { useShowList } from './useShowList';

const useShowDetails = (id: number) => {
  const [show, setShow] = useState<Show | undefined>(undefined);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
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

  const fetchEpisodes = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/shows/${id}/episodes`);
      setEpisodes(getEpisodesFromJson(response.data));
    } catch (err) {
    } finally {
      setLoading(false);
    }
  }, [id]);

  const getEpisodeById = useCallback(
    (episodeId: number): Episode | undefined => {
      return episodes.find(episode => episode.id === episodeId);
    },
    [episodes],
  );

  useEffect(() => {
    fetchEpisodes();
  }, [fetchEpisodes]);

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

  return { data: show, loading, episodes, getEpisodeById };
};

export { useShowDetails };
