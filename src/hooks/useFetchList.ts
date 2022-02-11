import { useQuery } from "react-query";
import { Anime } from "services";

const useFetchList = (
    category: string,
    slug: string,
    enabled: boolean = true
) => {
    return useQuery([{ category, slug }], () => Anime.getList({ category, slug }), {
        enabled,
    });
};

export default useFetchList;