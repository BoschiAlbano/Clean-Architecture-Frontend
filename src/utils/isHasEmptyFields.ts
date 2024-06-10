interface IsHasEmptyFields {
    isEmpty: boolean;
    message: string;
}

export function IsHasEmptyFields(datos: object): IsHasEmptyFields {
    for (const [key, value] of Object.entries(datos)) {
        if (value === "" || value === null)
            return { isEmpty: true, message: `el campo ${key} esta vacio.` };
    }

    return { isEmpty: false, message: "Ok.." };
}
