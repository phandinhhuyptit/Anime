import { Anime } from "types"

export interface GetListResponse {
    success: boolean;
    data: Anime[];
    pagination: {
        totalPage: number;
        currentPage: number;
    };
}

export interface GetListData {
    category: string;
    slug: string;
    page?: number;
    sort?: string;
}
export interface SearchProps {
    q: string;
    limit: number;
    page: number;
}