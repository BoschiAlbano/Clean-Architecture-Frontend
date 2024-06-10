import { toast } from "sonner";
// import { authenticatedUser } from "../models";

// export const initialState: authenticatedUser = {
//     usuario: "",
//     nombre: "",
//     apellido: "",
//     isAuthenticated: false,
// };

// export function GetlocalStorage(): authenticatedUser {
//     try {
//         const Auth = window.localStorage.getItem("AuthenticatedUser");
//         return Auth ? JSON.parse(Auth) : initialState;
//     } catch (error) {
//         return initialState;
//     }
// }

// export function CreateLocalStorage(
//     usuario: authenticatedUser
// ): authenticatedUser {
//     try {
//         window.localStorage.setItem(
//             "AuthenticatedUser",
//             JSON.stringify(usuario)
//         );
//         return usuario;
//     } catch (error) {
//         return initialState;
//     }
// }

// export function DeleteLocalStorage(): authenticatedUser {
//     try {
//         window.localStorage.removeItem("AuthenticatedUser");
//         return initialState;
//     } catch (error) {
//         return initialState;
//     }
// }

type useLocalStorageType<T> = T;

export function CreateLocalStorage<T>(
    llave: string,
    valor: T
): useLocalStorageType<T> {
    try {
        // Crear
        window.localStorage.setItem(llave, JSON.stringify(valor));
    } catch (error) {
        toast.error("Error, al Guardar la session...");
    }

    return valor;
}

export function DeleteLocalStorage<T>(
    llave: string,
    valor: T
): useLocalStorageType<T> {
    try {
        window.localStorage.removeItem(llave);
    } catch (error) {
        toast.error("Error, al eliminar la sesion...");
    }
    return valor;
}

export function GetlocalStorage<T>(
    llave: string,
    valor: T
): useLocalStorageType<T> {
    try {
        const Auth = window.localStorage.getItem(llave);
        return Auth ? JSON.parse(Auth) : valor;
    } catch (error) {
        toast.error("Error, al Obtener la sesion...");
    }
    return valor;
}

export function DeleteItemLocalStorage<T>(
    llave: string,
    itemId: number,
    valor: T[]
): useLocalStorageType<T>[] {
    try {
        // Obtener de local storage
        const obtener = window.localStorage.getItem(llave);
        if (!obtener)
            throw new Error(`Error, no se encontro ${llave} en localStorage`);
        const items: T[] = JSON.parse(obtener);
        // buscar el id
        const index = items.findIndex((item) => (item as any).id === itemId);
        if (index === -1)
            throw new Error(
                `Error, el item con id ${itemId} no se encontro en LocalStorage...`
            );
        // eliminar
        items.splice(index, 1);
        // guardar de nuevo en local storage
        window.localStorage.setItem(llave, JSON.stringify(items));
        // Retornar el valor
        return items;
    } catch (error) {
        if (error instanceof Error) {
            toast.error(error.message);
        } else {
            toast.error("Ocurrió un error desconocido en LocalStorage...");
        }
        return valor;
    }
}

export function UpdateRickandmorty<T>(
    llave: string,
    updateItem: T,
    valor: T[]
): useLocalStorageType<T>[] {
    try {
        // Obtener LocalStorage
        const find = window.localStorage.getItem(llave);
        if (!find)
            throw new Error(`Error, no se encontro ${llave} en localStorage`);
        const datos: T[] = JSON.parse(find);
        // Buscar Index
        const index = datos.findIndex(
            (item) => (item as any).id === (updateItem as any).id
        );
        if (index === -1)
            throw new Error(
                `Error, No se encontro el id: ${
                    (updateItem as any).id
                } en ${llave}`
            );
        // modificar item
        const newArray = datos.map((item, i) =>
            i === index ? updateItem : item
        );
        // guardar nuevo array
        window.localStorage.setItem(llave, JSON.stringify(newArray));
        // devolver array modificado
        return newArray;
    } catch (error) {
        if (error instanceof Error) {
            toast.error(error.message);
        } else {
            toast.error("Ocurrió un error desconocido en LocalStorage...");
        }

        return valor;
    }
}

export function CreateRickandmorty<T>(
    llave: string,
    newItem: T,
    valor: T[]
): useLocalStorageType<T>[] {
    try {
        // Obtener LocalStorage
        const find = window.localStorage.getItem(llave);
        if (!find) {
            window.localStorage.setItem(llave, JSON.stringify([newItem]));
            return [newItem];
        }
        const datos: T[] = JSON.parse(find);
        // modificar item
        console.log(datos);
        datos.push(newItem);
        console.log(datos);

        // guardar nuevo array
        window.localStorage.setItem(llave, JSON.stringify(datos));
        // devolver array modificado
        return datos;
    } catch (error) {
        if (error instanceof Error) {
            toast.error(error.message);
        } else {
            toast.error("Ocurrió un error desconocido en LocalStorage...");
        }

        return valor;
    }
}
