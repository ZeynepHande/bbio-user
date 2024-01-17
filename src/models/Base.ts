export type Base<T> = {
    state: "Success"|"Error";
    message: string;
    data: T;
}