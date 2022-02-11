import { useInfiniteQuery } from "react-query";
import Anime from "services/Anime";

interface Props {
    category: string;
    slug: string;
}

const useBrowseList = (props: Props) => {
    const fetchList = ({ pageParam = 1 }) =>
        Anime.getList({ ...props, page: pageParam });

    return useInfiniteQuery(["browse", props], fetchList, {
        getNextPageParam: (response) => {
            if (!response.pagination) {
                return;
            }

            const { pagination } = response;
            return pagination.currentPage >= pagination.totalPage
                ? null
                : pagination.currentPage + 1;
        },
    });
};

export default useBrowseList;