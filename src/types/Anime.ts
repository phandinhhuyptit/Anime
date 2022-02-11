import { Episode } from "./Episode"
import { Genre } from "./Genre"

export interface Anime {
    id: number;
    name: string;
    thumbnail: string;
    time: string;
    slug: string;
    views: number;
    latestEpisode?: {
        name: string;
        views: number;
    };
    episodeIndex?: number
}
export interface AnimeInfo {
    id: number;
    name: string;
    slug: string;
    thumbnail: string;
    views: number;
    genres: Genre[];
    likes: number;
    follows: number;
    subTeams: string[];
    description: string;
    episodes: Episode[];
}