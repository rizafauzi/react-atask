/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OCTOKIT_AUTH: string;
  readonly VITE_OCTOKIT_AGENT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
