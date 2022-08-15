interface Schedule {
  time: string;
  days: string[];
}

export interface Show {
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

export function getShowsFromJson(json: any[]): Show[] {
  return json.map(each => ({
    key: each.id, // RN looks for the .key automatically during flatlist usage
    id: each.id,
    name: each.name,
    genres: each.genres,
    rating: each.rating,
    summary: each.summary,
    image: each.image,
    premiered: each.premiered,
    schedule: each.schedule,
  }));
}
