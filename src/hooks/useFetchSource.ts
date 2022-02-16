import { useQuery } from "react-query";
import { Anime } from "services";
import { Source } from "types";

const useFetchSource = (
    animeId: number,
    episodeIndex: number,
    enabled?: boolean
) => {
    return useQuery<Source>(
        ["source", { animeId, episodeIndex }],
        () => Anime.getSource(animeId, episodeIndex),
        { enabled }
    );
};

export default useFetchSource;