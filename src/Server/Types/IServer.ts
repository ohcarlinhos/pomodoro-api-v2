export interface IServer<T> {
    App: T;
    Run(): void;
}
