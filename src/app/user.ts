export interface IUser {
    id: number;
    name: string;
    email: string;
    admin: boolean;
    birthdate?: Date;
}

export const USERS: IUser[] = [
    { id: 101, name: "Vlad Tymoshchuk", email: 'vtymo@gmail.com', admin: true, birthdate: new Date(2000, 0, 1) },
    { id: 200, name: "Oleg Fedor", email: 'ol@gmail.com', admin: false, birthdate: new Date(1993, 4, 5) },
    { id: 201, name: "Viktoria Maluk", email: 'vi@gmail.com', admin: false, birthdate: new Date(2007, 5, 17) },
    { id: 899, name: "Taras Artist", email: 'tar@gmail.com', admin: true }
]