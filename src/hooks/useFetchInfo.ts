import { useQuery } from "react-query";
import Anime from "services/Anime";

const useFetchInfo = (slug: string) => {
    return useQuery(["info", slug], () => Anime.getInfo(slug));
};

export default useFetchInfo;