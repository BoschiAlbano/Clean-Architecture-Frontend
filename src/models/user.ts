export interface User {
    id: `${string}-${string}-${string}-${string}-${string}`;
    nombre: string;
    apellido: string;
    email: string;
    usuario: string;
    password: string;
}

export type UserSinId = Omit<User, "id">;

export interface authenticatedUser {
    usuario: string;
    nombre: string;
    apellido: string;
    isAuthenticated: boolean;
}
