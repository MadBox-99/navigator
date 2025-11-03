/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_NAME: string;
    // további környezeti változók itt
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
    glob: (pattern: string, options?: { eager?: boolean }) => Record<string, any>;
}
