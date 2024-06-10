import { fechaISO } from "../../../utils/fecha";
import {
    ApiRickAndMorty,
    DetalleRickAndMorty,
    StoreRickAndMorty,
} from "../models";

export function adapterRickandmorty(
    fetchRickandmorty: ApiRickAndMorty[]
): StoreRickAndMorty[] {
    return fetchRickandmorty.map((data) => {
        return {
            id: data.id,
            name: data.name,
            gender: data.gender,
            image: data.image,
            species: data.species,
        };
    });
}

export function adapterRickandmortyDetalle(
    fetchRickandmorty: ApiRickAndMorty
): DetalleRickAndMorty {
    // Mismo datos que la api - pero se podria adaptar -
    return {
        ...fetchRickandmorty,
        created: fechaISO(fetchRickandmorty?.created.toString()),
    };
}
