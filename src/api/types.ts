export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    created: string;
    image: string;
    url: string;
}

export interface APIResponse {
    info: {
        count: number;
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
