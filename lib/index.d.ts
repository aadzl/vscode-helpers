/// <reference types="node" />
/// <reference types="minimatch" />
import * as Enumerable from 'node-enumerable';
import * as Minimatch from 'minimatch';
import * as Moment from 'moment';
import * as Stream from 'stream';
import * as vscode from 'vscode';
export * from './cache';
export * from './disposable';
export * from './events';
export * from './fs';
export * from './html';
export * from './logging';
export { from } from 'node-enumerable';
export * from './progress';
export * from './timers';
export * from './workflows';
export * from './workspaces';
/**
 * Action for 'forEachAsync()' function.
 *
 * @param {T} item The current item.
 * @param {number} index The zero based index.
 * @param {T[]} array The array of all elements.
 *
 * @return {TResult|PromiseLike<TResult>} The result.
 */
export declare type ForEachAsyncAction<T, TResult> = (item: T, index: number, array: T[]) => TResult | PromiseLike<TResult>;
/**
 * Options for 'openAndShowTextDocument()' function.
 */
export declare type OpenAndShowTextDocumentOptions = string | {
    /**
     * The initial content.
     */
    content?: string;
    /**
     * The language.
     */
    language?: string;
};
/**
 * Describes a simple 'completed' action.
 *
 * @param {any} err The occurred error.
 * @param {TResult} [result] The result.
 */
export declare type SimpleCompletedAction<TResult> = (err: any, result?: TResult) => void;
/**
 * Normalizes a string.
 *
 * @param {TStr} str The value to normalize.
 *
 * @return {string} The normalized string.
 */
export declare type StringNormalizer<TStr = string> = (str: TStr) => string;
/**
 * Stores global data for the current extension session.
 */
export declare const SESSION: {
    [key: string]: any;
};
/**
 * Disposes 'SESSION', by removing its data.
 */
export declare const SESSION_DISPOSER: vscode.Disposable;
/**
 * Applies a function for a specific object / value.
 *
 * @param {TFunc} func The function.
 * @param {any} [thisArgs] The object to apply to the function.
 *
 * @return {TFunc} The wrapped function.
 */
export declare function applyFuncFor<TFunc extends Function = Function>(func: TFunc, thisArgs: any): TFunc;
/**
 * Returns a value as array.
 *
 * @param {T|T[]} val The value.
 * @param {boolean} [removeEmpty] Remove items that are (null) / (undefined) or not.
 *
 * @return {T[]} The value as (new) array.
 */
export declare function asArray<T>(val: T | T[], removeEmpty?: boolean): T[];
/**
 * Returns a value as buffer.
 *
 * @param {any} val The value to convert / cast.
 * @param {string} enc The custom encoding for the string parsers.
 * @param {number} [maxDepth] The custom value for the max depth of wrapped functions. Default: 63
 *
 * @return {Promise<Buffer>} The promise with the buffer.
 */
export declare function asBuffer(val: any, enc?: string, maxDepth?: number): Promise<Buffer>;
/**
 * Returns a value as local Moment instance.
 *
 * @param {any} val The input value.
 *
 * @return {Moment.Moment} The output value.
 */
export declare function asLocalTime(val: any): Moment.Moment;
/**
 * Returns a value as UTC Moment instance.
 *
 * @param {any} val The input value.
 *
 * @return {Moment.Moment} The output value.
 */
export declare function asUTC(val: any): Moment.Moment;
/**
 * Clones an object / value deep.
 *
 * @param {T} val The value / object to clone.
 *
 * @return {T} The cloned value / object.
 */
export declare function cloneObject<T>(val: T): T;
/**
 * Clones an value flat.
 *
 * @param {T} val The object to clone.
 * @param {boolean} [useNewObjectForFunctions] Use new object as 'thisArg' for functions (true) or
 *                                             the original 'val' (false).
 *
 * @return {T} The cloned object.
 */
export declare function cloneObjectFlat<T>(val: T, useNewObjectForFunctions?: boolean): T;
/**
 * Compares two values for a sort operation.
 *
 * @param {T} x The left value.
 * @param {T} y The right value.
 *
 * @return {number} The "sort value".
 */
export declare function compareValues<T>(x: T, y: T): number;
/**
 * Compares values by using a selector.
 *
 * @param {T} x The left value.
 * @param {T} y The right value.
 * @param {Function} selector The selector.
 *
 * @return {number} The "sort value".
 */
export declare function compareValuesBy<T, U>(x: T, y: T, selector: (t: T) => U): number;
/**
 * Creates a simple 'completed' callback for a promise.
 *
 * @param {Function} resolve The 'succeeded' callback.
 * @param {Function} reject The 'error' callback.
 *
 * @return {SimpleCompletedAction<TResult>} The created action.
 */
export declare function createCompletedAction<TResult = any>(resolve: (value?: TResult | PromiseLike<TResult>) => void, reject?: (reason: any) => void): SimpleCompletedAction<TResult>;
/**
 * Handles a value as string and checks if it does match at least one (minimatch) pattern.
 *
 * @param {any} val The value to check.
 * @param {string|string[]} patterns One or more patterns.
 * @param {Minimatch.IOptions} [options] Additional options.
 *
 * @return {boolean} Does match or not.
 */
export declare function doesMatch(val: any, patterns: string | string[], options?: Minimatch.IOptions): boolean;
/**
 * Async 'forEach'.
 *
 * @param {Enumerable.Sequence<T>} items The items to iterate.
 * @param {Function} action The item action.
 * @param {any} [thisArg] The underlying object / value for the item action.
 *
 * @return {TResult} The result of the last action call.
 */
export declare function forEachAsync<T, TResult>(items: Enumerable.Sequence<T>, action: ForEachAsyncAction<T, TResult>, thisArg?: any): Promise<TResult>;
/**
 * Formats a string.
 *
 * @param {any} formatStr The value that represents the format string.
 * @param {any[]} [args] The arguments for 'formatStr'.
 *
 * @return {string} The formated string.
 */
export declare function format(formatStr: any, ...args: any[]): string;
/**
 * Formats a string.
 *
 * @param {any} formatStr The value that represents the format string.
 * @param {Enumerable.Sequence<any>} [args] The arguments for 'formatStr'.
 *
 * @return {string} The formated string.
 */
export declare function formatArray(formatStr: any, args: Enumerable.Sequence<any>): string;
/**
 * Checks if data is binary or text content.
 *
 * @param {Buffer} data The data to check.
 *
 * @returns {Promise<boolean>} The promise that indicates if content is binary or not.
 */
export declare function isBinaryContent(data: Buffer): Promise<boolean>;
/**
 * Checks if data is binary or text content (sync).
 *
 * @param {Buffer} data The data to check.
 *
 * @returns {boolean} Content is binary or not.
 */
export declare function isBinaryContentSync(data: Buffer): boolean;
/**
 * Checks if the string representation of a value is empty
 * or contains whitespaces only.
 *
 * @param {any} val The value to check.
 *
 * @return {boolean} Is empty or not.
 */
export declare function isEmptyString(val: any): boolean;
/**
 * Loads a module from a script.
 *
 * @param {string} file The path to the script.
 * @param {boolean} [fromCache] Cache module or not.
 *
 * @return {TModule} The loaded module.
 */
export declare function loadModule<TModule = any>(file: string, fromCache?: boolean): TModule;
/**
 * Normalizes a value as string so that is comparable.
 *
 * @param {any} val The value to convert.
 * @param {StringNormalizer} [normalizer] The custom normalizer.
 *
 * @return {string} The normalized value.
 */
export declare function normalizeString(val: any, normalizer?: StringNormalizer): string;
/**
 * Returns the current time.
 *
 * @param {string} [timezone] The custom timezone to use.
 *
 * @return {Moment.Moment} The current time.
 */
export declare function now(timezone?: string): Moment.Moment;
/**
 * Opens and shows a new text document / editor.
 *
 * @param {OpenAndShowTextDocumentOptions} [filenameOrOpts] The custom options or the path to the file to open.
 *
 * @return {vscode.TextEditor} The promise with the new, opened text editor.
 */
export declare function openAndShowTextDocument(filenameOrOpts?: OpenAndShowTextDocumentOptions): Promise<vscode.TextEditor>;
/**
 * Promise version of 'crypto.randomBytes()' function.
 *
 * @param {number} size The size of the result.
 *
 * @return {Promise<Buffer>} The buffer with the random bytes.
 */
export declare function randomBytes(size: number): Promise<Buffer>;
/**
 * Reads the content of a stream.
 *
 * @param {Stream.Readable} stream The stream.
 * @param {string} [enc] The custom (string) encoding to use.
 *
 * @returns {Promise<Buffer>} The promise with the content.
 */
export declare function readAll(stream: Stream.Readable, enc?: string): Promise<Buffer>;
/**
 * Returns a sequence object as new array.
 *
 * @param {Enumerable.Sequence<T>} seq The input object.
 * @param {boolean} [normalize] Returns an empty array, if input object is (null) / (undefined).
 *
 * @return {T[]} The input object as array.
 */
export declare function toArray<T>(seq: Enumerable.Sequence<T>, normalize?: boolean): T[];
/**
 * Returns a value as boolean, which is not (null) and (undefined).
 *
 * @param {any} val The value to convert.
 * @param {boolean} [defaultVal] The custom default value if 'val' is (null) or (undefined).
 *
 * @return {boolean} 'val' as boolean.
 */
export declare function toBooleanSafe(val: any, defaultVal?: boolean): boolean;
/**
 * Converts an EOL enum value to a string.
 *
 * @param {vscode.EndOfLine} [eol] The (optional) enum value.
 *
 * @return string The EOL string.
 */
export declare function toEOL(eol?: vscode.EndOfLine): string;
/**
 * Returns a value as string, which is not (null) and (undefined).
 *
 * @param {any} val The value to convert.
 * @param {string} [defaultVal] The custom default value if 'val' is (null) or (undefined).
 *
 * @return {string} 'val' as string.
 */
export declare function toStringSafe(val: any, defaultVal?: string): string;
/**
 * Returns the current UTC time.
 *
 * @return {Moment.Moment} The current UTC time.
 */
export declare function utcNow(): Moment.Moment;
