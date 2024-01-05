declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PG_HOST: string;
            PG_PORT: number;
            PG_DATABASE: string;
            PG_USER: string;
            PG_PASSWORD: string;
        }
    }
}
