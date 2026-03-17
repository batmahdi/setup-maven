/**
 * Downloads (or retrieves from cache) the specified Maven version
 * and adds it to PATH. Sets output variables for downstream steps.
 */
export declare function getMaven(version: string): Promise<void>;
