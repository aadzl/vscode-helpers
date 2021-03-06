/// <reference types="node" />
/// <reference types="glob" />
import * as Glob from 'glob';
/**
 * Options for a temp file.
 */
export interface TempFileOptions {
    /**
     * The custom directory for the file.
     */
    dir?: string;
    /**
     * Keep temp file or not.
     */
    keep?: boolean;
    /**
     * The optional prefix for the name of the file.
     */
    prefix?: string;
    /**
     * The optional suffix for the name of the file.
     */
    suffix?: string;
}
/**
 * Creates a directory (if needed).
 *
 * @param {string} dir The path of the directory to create.
 *
 * @return {Promise<boolean>} The promise that indicates if directory has been created or not.
 */
export declare function createDirectoryIfNeeded(dir: string): Promise<boolean>;
/**
 * Promise version of 'FS.exists()' function.
 *
 * @param {string|Buffer} path The path.
 *
 * @return {Promise<boolean>} The promise that indicates if path exists or not.
 */
export declare function exists(path: string | Buffer): Promise<boolean>;
/**
 * Promise version of 'Glob()' function.
 *
 * @param {string|string[]} patterns One or more patterns.
 * @param {Glob.IOptions} [opts] Custom options.
 *
 * @return {Promise<string[]>} The promise with the matches.
 */
export declare function glob(patterns: string | string[], opts?: Glob.IOptions): Promise<string[]>;
/**
 * Multi pattern version of 'Glob.sync()' function.
 *
 * @param {string|string[]} patterns One or more patterns.
 * @param {Glob.IOptions} [opts] Custom options.
 *
 * @return {string[]} The matches.
 */
export declare function globSync(patterns: string | string[], opts?: Glob.IOptions): string[];
/**
 * Checks if a path exists and is a block device.
 *
 * @param {string} path The path to check.
 * @param {boolean} [useLSTAT] If (true) use 'FS.lstat()' function, otherwise 'FS.stat()'.
 *
 * @return {Promise<boolean>} The promise with the value that indicates if condition matches or not.
 */
export declare function isBlockDevice(path: string, useLSTAT?: boolean): Promise<boolean>;
/**
 * Checks if a path exists and is a block device.
 *
 * @param {string} path The path to check.
 * @param {boolean} [useLSTAT] If (true) use 'FS.lstat()' function, otherwise 'FS.stat()'.
 *
 * @return {boolean} A value that indicates if condition matches or not.
 */
export declare function isBlockDeviceSync(path: string, useLSTAT?: boolean): boolean;
/**
 * Checks if a path exists and is a character device.
 *
 * @param {string} path The path to check.
 * @param {boolean} [useLSTAT] If (true) use 'FS.lstat()' function, otherwise 'FS.stat()'.
 *
 * @return {Promise<boolean>} The promise with the value that indicates if condition matches or not.
 */
export declare function isCharacterDevice(path: string, useLSTAT?: boolean): Promise<boolean>;
/**
 * Checks if a path exists and is a character device.
 *
 * @param {string} path The path to check.
 * @param {boolean} [useLSTAT] If (true) use 'FS.lstat()' function, otherwise 'FS.stat()'.
 *
 * @return {boolean} A value that indicates if condition matches or not.
 */
export declare function isCharacterDeviceSync(path: string, useLSTAT?: boolean): boolean;
/**
 * Checks if a path exists and is a directory.
 *
 * @param {string} path The path to check.
 * @param {boolean} [useLSTAT] If (true) use 'FS.lstat()' function, otherwise 'FS.stat()'.
 *
 * @return {Promise<boolean>} The promise with the value that indicates if condition matches or not.
 */
export declare function isDirectory(path: string, useLSTAT?: boolean): Promise<boolean>;
/**
 * Checks if a path exists and is a directory.
 *
 * @param {string} path The path to check.
 * @param {boolean} [useLSTAT] If (true) use 'FS.lstat()' function, otherwise 'FS.stat()'.
 *
 * @return {boolean} A value that indicates if condition matches or not.
 */
export declare function isDirectorySync(path: string, useLSTAT?: boolean): boolean;
/**
 * Checks if a path exists and is FIFO.
 *
 * @param {string} path The path to check.
 * @param {boolean} [useLSTAT] If (true) use 'FS.lstat()' function, otherwise 'FS.stat()'.
 *
 * @return {Promise<boolean>} The promise with the value that indicates if condition matches or not.
 */
export declare function isFIFO(path: string, useLSTAT?: boolean): Promise<boolean>;
/**
 * Checks if a path exists and is FIFO.
 *
 * @param {string} path The path to check.
 * @param {boolean} [useLSTAT] If (true) use 'FS.lstat()' function, otherwise 'FS.stat()'.
 *
 * @return {boolean} A value that indicates if condition matches or not.
 */
export declare function isFIFOSync(path: string, useLSTAT?: boolean): boolean;
/**
 * Checks if a path exists and is a file.
 *
 * @param {string} path The path to check.
 * @param {boolean} [useLSTAT] If (true) use 'FS.lstat()' function, otherwise 'FS.stat()'.
 *
 * @return {Promise<boolean>} The promise with the value that indicates if condition matches or not.
 */
export declare function isFile(path: string, useLSTAT?: boolean): Promise<boolean>;
/**
 * Checks if a path exists and is a file.
 *
 * @param {string} path The path to check.
 * @param {boolean} [useLSTAT] If (true) use 'FS.lstat()' function, otherwise 'FS.stat()'.
 *
 * @return {boolean} A value that indicates if condition matches or not.
 */
export declare function isFileSync(path: string, useLSTAT?: boolean): boolean;
/**
 * Checks if a path exists and is a socket.
 *
 * @param {string} path The path to check.
 * @param {boolean} [useLSTAT] If (true) use 'FS.lstat()' function, otherwise 'FS.stat()'.
 *
 * @return {Promise<boolean>} The promise with the value that indicates if condition matches or not.
 */
export declare function isSocket(path: string, useLSTAT?: boolean): Promise<boolean>;
/**
 * Checks if a path exists and is a socket.
 *
 * @param {string} path The path to check.
 * @param {boolean} [useLSTAT] If (true) use 'FS.lstat()' function, otherwise 'FS.stat()'.
 *
 * @return {boolean} A value that indicates if condition matches or not.
 */
export declare function isSocketSync(path: string, useLSTAT?: boolean): boolean;
/**
 * Checks if a path exists and is a symbolic link.
 *
 * @param {string} path The path to check.
 * @param {boolean} [useLSTAT] If (true) use 'FS.lstat()' function, otherwise 'FS.stat()'.
 *
 * @return {Promise<boolean>} The promise with the value that indicates if condition matches or not.
 */
export declare function isSymbolicLink(path: string, useLSTAT?: boolean): Promise<boolean>;
/**
 * Checks if a path exists and is a symbolic link.
 *
 * @param {string} path The path to check.
 * @param {boolean} [useLSTAT] If (true) use 'FS.lstat()' function, otherwise 'FS.stat()'.
 *
 * @return {boolean} A value that indicates if condition matches or not.
 */
export declare function isSymbolicLinkSync(path: string, useLSTAT?: boolean): boolean;
/**
 * Returns the size of a file system element.
 *
 * @param {string|Buffer} path The path to the element.
 * @param {boolean} [useLSTAT] Use 'lstat()' (true) or 'stat()' (false) function.
 *
 * @return {Promise<number>} The promise with the size.
 */
export declare function size(path: string | Buffer, useLSTAT?: boolean): Promise<number>;
/**
 * Returns the size of a file system element (sync).
 *
 * @param {string|Buffer} path The path to the element.
 * @param {boolean} [useLSTAT] Use 'lstatSync()' (true) or 'statSync()' (false) function.
 *
 * @return {number} The size.
 */
export declare function sizeSync(path: string | Buffer, useLSTAT?: boolean): number;
/**
 * Invokes an action for a temp file.
 *
 * @param {Function} action The action to invoke.
 * @param {TempFileOptions} [opts] The custom options.
 *
 * @return {Promise<TResult>} The promise with the result of the action.
 */
export declare function tempFile<TResult = any>(action: (file: string) => TResult | PromiseLike<TResult>, opts?: TempFileOptions): Promise<TResult>;
/**
 * Invokes an action for a temp file (sync).
 *
 * @param {Function} action The action to invoke.
 * @param {TempFileOptions} [opts] The custom options.
 *
 * @return {TResult} The result of the action.
 */
export declare function tempFileSync<TResult = any>(action: (file: string) => TResult, opts?: TempFileOptions): TResult;
