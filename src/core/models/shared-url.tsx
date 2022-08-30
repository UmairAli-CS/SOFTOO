// Main Server URL

export const BASE_URL = window['runConfig']?.NODE_API_BASE_URL;
declare global {
    interface Window { runConfig: any; }
}