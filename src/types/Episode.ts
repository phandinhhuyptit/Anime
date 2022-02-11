export interface Episode {
    id: number;
    name: number;
    special_name: number;
    detail_name: string | null;
    full_name: string;
    film_name: string;
    slug: string;
    link: string;
    views: number;
    is_copyrighted: boolean | null;
    has_preview: boolean | null;
    thumbnail_small: string;
    thumbnail_medium: string;
    upcoming: boolean | null;
}
