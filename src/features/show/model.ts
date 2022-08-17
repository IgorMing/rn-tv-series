interface Schedule {
  time: string;
  days: string[];
}

type jsonType = Record<any, any>;

export interface ShowAPI {
  id: number;
  name: string;
  genres: string[];
  rating: {
    average: number;
  };
  summary: string;
  image: {
    medium: string;
    original: string;
  };
  premiered: string;
  schedule: Schedule;
}

export interface Show extends ShowAPI {
  key: number;
}

export function getShowFromJson(json: jsonType): Show {
  return {
    key: json.id, // RN looks for the .key automatically during flatlist usage
    id: json.id,
    name: json.name,
    genres: json.genres,
    rating: json.rating,
    summary: json.summary,
    image: json.image,
    premiered: json.premiered,
    schedule: json.schedule,
  };
}

export function getShowsFromJson(json: jsonType[]): Show[] {
  return json.map(each => ({ ...getShowFromJson(each) }));
}

export function getNestedShowsFromJson(json: jsonType[]): Show[] {
  const formattedArr = json.map(each => each.show);
  return getShowsFromJson(formattedArr);
}
