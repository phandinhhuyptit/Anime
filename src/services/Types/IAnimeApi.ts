
import { GetListData, GetListResponse, SearchProps } from "models/Anime";
import { Anime, AnimeInfo, Source } from "types"
export abstract class IAPI {
    abstract getSlide(): Promise<Anime[]>
    abstract getList(arg: GetListData): Promise<GetListResponse>
    abstract search(props: Partial<SearchProps>): Promise<GetListResponse>
    abstract getInfo(slug: string): Promise<AnimeInfo>
    abstract getSource(animeId: number, episodeIndex: number): Promise<Source>

}
