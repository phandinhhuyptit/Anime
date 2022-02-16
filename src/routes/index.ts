import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BiCoinStack } from "react-icons/bi";
import { RiNumbersLine } from "react-icons/ri";
import { lazyLoading } from "utils/helpers";
import { Route } from "models";
import { Genre, Ranking } from "types";
import { GENRES } from "utils/constants"


const HomeScreen = lazyLoading(() => import("pages/Home"));
const BrowseScreen = lazyLoading(() => import("pages/Browse"));
const DetailScreen = lazyLoading(() => import("pages/Detail"));
const WatchScreen = lazyLoading(() => import("pages/Watch"));

const routes: Route[] = [
    {
        name: "Trang chủ",
        path: "/",
        component: HomeScreen,
        header: true,
        dropdown: false,
        navigation: true,
        icon: AiOutlineHome,
    },
    {
        name: "Thể loại",
        path: "/genres/:slug",
        component: BrowseScreen,
        header: true,
        navigation: true,
        icon: BiCoinStack,
        dropdown: true,
        dropdownData: GENRES,
        dropdownPath: (data: Genre) => `/genres/${data.slug}`,
        listKey: (data: Genre) => data.slug,
    },
    {
        name: "Thông tin phim",
        path: "/info/:slug",
        component: DetailScreen,
        header: false,
    },
    {
        name: "Xem phim",
        path: "/watch/:slug",
        component: WatchScreen,
        header: false,
    },
]

export default routes;