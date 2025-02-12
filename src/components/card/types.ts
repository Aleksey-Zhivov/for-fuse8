export interface CardProps {
    character: {
        id: number;
        name: string;
        status: string;
        species: string;
        created: string;
        url: string;
    };
    isActive: boolean;
    onSelect?: () => void;
}