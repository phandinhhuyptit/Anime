import { useQuery } from "react-query";
import { Anime } from "services";

const useFetchSlide = () => {
    return useQuery("slides", Anime.getSlide);
};

export default useFetchSlide;