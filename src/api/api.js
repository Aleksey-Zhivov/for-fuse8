const API_URL = 'https://rickandmortyapi.com/api/character/';
const checkResponse = async (res) => {
    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || `HTTP Error ${res.status}`);
    }
    return res.json();
};
export const fetchCharacters = async ({ query, page }) => {
    const url = `${API_URL}?name=${encodeURIComponent(query)}&page=${page}`;
    const response = await fetch(url);
    return checkResponse(response);
};
