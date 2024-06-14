import {
    adapterRickandmorty,
    adapterRickandmortyDetalle,
} from "../adapters/rickandmorty.adapter";
import {
    DetalleRickAndMorty,
    DetalleRickAndMortyEmpty,
    StoreDataResult,
    errorFetch,
} from "../models";

const URL_ApiRickandmorty = "https://rickandmortyapi.com";

export async function GetCharacterByName(
    keyName: string,
    page: number,
    abortController: AbortController
): Promise<StoreDataResult> {
    const url = `${URL_ApiRickandmorty}/api/character/?name=${keyName}&page=${page}`;

    // Opcion 1
    // const response = await fetch(url);
    // const data = await response.json();
    // return adapterRickandmorty(data);

    // Opcion 2
    // const abortController = new AbortController();

    return await fetch(url, { signal: abortController.signal })
        .then((response) => response.json())
        .then((json) => adapterRickandmorty(json));
}

export async function GetCharacterById(
    id: number,
    abortController: AbortController
): Promise<DetalleRickAndMorty> {
    const url = `${URL_ApiRickandmorty}/api/character/${id}`;

    try {
        const response = await fetch(url, { signal: abortController.signal });

        if (!response.ok) {
            const data = (await response.json()) as errorFetch;
            throw new Error(
                data.error || `Error, estado ${response.status} sin mensajes`
            );
        }

        return adapterRickandmortyDetalle(await response.json());
    } catch (error) {
        const detalleRickAndMortyEmpty: DetalleRickAndMortyEmpty = {
            id: 0,
            name: "Sin nombre",
            status: "Sin estado",
            species: "Sin especie",
            type: "Sin tipo",
            gender: "Sin Genero",
            image: "/rickandmortyDefault.jpeg",
            episode: [],
            created: Date.now().toLocaleString(),
            error:
                error instanceof Error
                    ? error.message
                    : "Error, en los adapters",
        };
        return Promise.reject(detalleRickAndMortyEmpty);
    }
}
// return DetalleRickAndMortyEmpty;
// return Promise.reject("Error en el servicio ❌");
