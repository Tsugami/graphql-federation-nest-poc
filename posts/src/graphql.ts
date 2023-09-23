
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Post {
    id: string;
    title: string;
    authorId: string;
    user?: Nullable<User>;
}

export interface IQuery {
    Posts(): Nullable<Nullable<Post>[]> | Promise<Nullable<Nullable<Post>[]>>;
}

export interface User {
    id: string;
    posts?: Nullable<Nullable<Post>[]>;
}

type Nullable<T> = T | null;
