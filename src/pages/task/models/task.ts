export interface ApiRickAndMorty {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
    episode: any[];
    url: string;
    created: Date;
}

export interface Location {
    name: string;
    url: string;
}

export interface Origin {
    name: string;
    url: string;
}

export interface StoreRickAndMorty {
    id: number;
    name: string;
    species: string;
    gender: string;
    image: string;
}

export interface DetalleRickAndMorty {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    episode: any[];
    created: string;
}

export interface errorFetch {
    error: string;
}

export type DetalleRickAndMortyEmpty = DetalleRickAndMorty & errorFetch;
