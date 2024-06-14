import { fechaISO } from "../../../utils/fecha";
import {
    ApiRickAndMorty,
    DetalleRickAndMorty,
    StoreDataResult,
    ApiDataResult,
} from "../models";

export function adapterRickandmorty(api: ApiDataResult): StoreDataResult {
    const { info, results } = api;

    const resultado: StoreDataResult = {
        info: info,
        results: results,
    };

    return resultado;
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
