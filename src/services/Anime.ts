import { GetListResponse, GetListData, SearchProps } from "models/Anime";
import { AnimeInfo, Source, Anime } from "types"
import axios from "utils/axios"
import { IAPI } from "./Types/IAnimeApi"


class AnimeAPI extends IAPI {

    async getSlide(): Promise<Anime[]> {
        const { data } = await axios.get("/slide");
        return data.data;
    }
    async getList({ category,
        slug,
        ...rest }: GetListData): Promise<GetListResponse> {
        const { data } = await axios.get(`/${category}/${slug}`, {
            params: rest,
        });
        return data;
    }
    async search(props: SearchProps): Promise<GetListResponse> {
        const { data } = await axios.get(`/search`, {
            params: props,
        });

        return data;
    };

    async getInfo(slug: string): Promise<AnimeInfo> {
        const { data } = await axios.get(`/anime/${slug}`);

        return data.data;
    };

    async getSource(
        animeId: number,
        episodeIndex: number
    ): Promise<Source> {
        const { data } = await axios.get(
            `/anime/${animeId}/episodes/${episodeIndex}`
        );

        return data.data;
    };


}

export default new AnimeAPI();