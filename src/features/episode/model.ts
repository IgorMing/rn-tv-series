type jsonType = Record<any, any>;

export interface Episode {
  id: number;
  name: string;
  season: number;
  number: number;
  date: string;
  runtime: number;
  rating: {
    average: number;
  };
  summary: string;
  image: {
    medium: string;
    original: string;
  };
}

export function getEpisodeFromJson(json: jsonType): Episode {
  return {
    id: json.id,
    name: json.name,
    season: json.season,
    number: json.number,
    date: json.airdate,
    runtime: json.runtime,
    rating: json.rating,
    summary: json.summary,
    image: json.image,
  };
}

export function getEpisodesFromJson(json: jsonType[]): Episode[] {
  return json.map(each => ({ ...getEpisodeFromJson(each) }));
}
