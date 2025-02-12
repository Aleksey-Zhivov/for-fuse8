export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;
    url: string;
}

export interface APIResponse {
    info: {
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: Character[];
}

export interface FetchCharactersParams {
    query: string;
    page: number;
}
