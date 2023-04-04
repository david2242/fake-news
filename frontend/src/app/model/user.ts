export interface UserInterface {
    _id?: number,
    username: string,
    email: string,
    password: string,
    bio?: string,
    imageRef?: string,
    accessToken: string
}

export interface UserEmailPasswordInterface {
    email: string,
    password: string
}

export interface CreateUser {
    username: string,
    email: string,
    password: string
}

export interface UserInfo {
    username: string,
    email: string,
    bio: string,
    imageRef: string
}

export interface UserProfile {
    username: string,
    bio: string,
    imageRef: string,
    following?: boolean
}
