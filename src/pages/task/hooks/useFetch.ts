import { useState, useEffect } from "react";
import { StoreRickAndMorty } from "../models";
import { GetCharacterByName } from "../services/rickandmorty.services";

export function useFetchRickandmorty(keyName: string) {
    const [data, setData] = useState<StoreRickAndMorty[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    useEffect(() => {
        const abortController = new AbortController();

        async function Get() {
            try {
                setLoading(true);
                setError("");
                setData(await GetCharacterByName(keyName, abortController));

                setLoading(false);
            } catch (error: any) {
                console.log(error);
                setError("Error al consultar el servidor...");
                setData([]);
                setLoading(false);
            }
        }

        keyName.length && Get();

        return () => abortController.abort();
    }, [keyName]);

    return { data, loading, error };
}

// hook generico para peticiones.
interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export function useFetch<T>(
    servicio: (abortController: AbortController) => Promise<T>
): FetchState<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const abortController = new AbortController();
        // User Servicio
        async function fetchData() {
            try {
                const result = await servicio(abortController);
                setData(result);
            } catch (err: any) {
                setError(err?.error);
                setData(err);
            } finally {
                setLoading(false);
            }
        }

        fetchData();

        return () => abortController.abort();
    }, []);

    return { data, loading, error };
}
