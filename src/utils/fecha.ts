export const fechaISO = (iso: string): string => {
    const fecha = new Date(iso);
    return fecha.toDateString();
};
