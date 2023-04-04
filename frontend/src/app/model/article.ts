export interface Article {
    title: string,
    description: string,
    body: string,
    tagList: Array<string>,
    slug?: string,
    comments?: Array<any>,
    createdAt?: number,
    isFavourite?: boolean,
    favoriteCount?: number,
    author?: {
        username: string
    }
}
