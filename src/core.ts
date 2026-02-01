import type { IsoUtcDatetime } from "./types.js";

import type { IsoUtcDatetimeExtended, IsoUtcDatetimeBasic } from "./types.js";

/**
 * Narrows the string.
 *
 * @param s The string to validate.
 * @returns True if the string is in the ISO 8601 extended format, otherwise false.
 */
export const isExtended = (s: string): s is IsoUtcDatetimeExtended =>
  /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z/.test(s);

/**
 * Narrows the string.
 *
 * @param s The string to validate.
 * @returns True if the string is in the ISO 8601 basic format, otherwise false.
 */
export const isBasic = (s: string): s is IsoUtcDatetimeBasic =>
  /\d{8}T\d{6}Z/.test(s);

/**
 * Creates a new ISO 8601 string in the _extended_ format.
 *
 * If no date is provided, the current time is used.
 *
 * @param date An optional date
 * @returns The date as an ISO 8601 string in extended format
 */
export const newDatetimeUtcIsoExtended = (
  date: Date = new Date(),
): IsoUtcDatetimeExtended =>
  // "The toISOString() method of Date instances returns a string representing
  // this date in the date time string format, a simplified format based on ISO
  // 8601, which is always 24 or 27 characters long (YYYY-MM-DDTHH:mm:ss.sssZ or
  // ±YYYYYY-MM-DDTHH:mm:ss.sssZ, respectively). The timezone is always UTC, as
  // denoted by the suffix Z."
  //
  // For more info:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
  date.toISOString().replace(/\.\d{3}/, "") as IsoUtcDatetimeExtended;

/**
 * Creates a new ISO 8601 string in the _basic_ format.
 *
 * If no date is provided, the current time is used.
 *
 * @param date An optional date
 * @returns The date as an ISO 8601 string in basic format
 */
export const newDatetimeUtcIsoBasic = (
  date: Date = new Date(),
): IsoUtcDatetimeBasic => extendedToBasic(newDatetimeUtcIsoExtended(date));

/**
 * Converts from basic to extended format.
 *
 * @param basic The basic string to convert
 * @returns An ISO 8601 string in extended format
 */
export const basicToExtended = (
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
  basic: IsoUtcDatetimeBasic,
): IsoUtcDatetimeExtended =>
  basicToExtendedUnsafe(basic) as IsoUtcDatetimeExtended;

/**
 * Convenience alias for {@link basicToExtended}.
 */
export const bte = basicToExtended;

/**
 * Converts from extended to basic format.
 *
 * @param extended The extended string to convert
 * @returns An ISO 8601 string in basic format
 */
export const extendedToBasic = (
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
  extended: IsoUtcDatetimeExtended,
): IsoUtcDatetimeBasic =>
  extendedToBasicUnsafe(extended) as IsoUtcDatetimeBasic;

/**
 * Convenience alias for {@link extendedToBasic}.
 */
export const etb = extendedToBasic;

/**
 * Converts a new ISO 8601 string as an untyped string.
 *
 * NOTE: this function only performs simple regex substitution. It does not
 * validate either input or output.
 *
 * @param s The string to convert
 * @returns The date as an ISO 8601 string in basic format
 */
export const extendedToBasicUnsafe = (s: string): string =>
  s.replaceAll(/[-:]/, "");

/**
 * Converts a new ISO 8601 string as an untyped string.
 *
 * NOTE: this function only performs simple regex substitution. It does not
 * validate either input or output.
 *
 * @param s The string to convert
 * @returns The date as an ISO 8601 string in basic format
 */
export const basicToExtendedUnsafe = (s: string): string =>
  [
    year(s as IsoUtcDatetimeBasic),
    "-",
    month(s as IsoUtcDatetimeBasic),
    "-",
    day(s as IsoUtcDatetimeBasic),
    "T",
    hour(s as IsoUtcDatetimeBasic),
    ":",
    minute(s as IsoUtcDatetimeBasic),
    ":",
    second(s as IsoUtcDatetimeBasic),
  ].join("");

export const newDatetime = (
  params: { date: Date; basic: boolean } = { date: new Date(), basic: false },
): string =>
  params.basic
    ? newDatetimeUtcIsoBasic(params.date)
    : newDatetimeUtcIsoExtended(params.date);

export const year = (s: IsoUtcDatetime): string =>
  extendedToBasicUnsafe(s).substring(0, 4);

export const month = (s: IsoUtcDatetime): string =>
  extendedToBasicUnsafe(s).substring(4, 6);

export const day = (s: IsoUtcDatetime): string =>
  extendedToBasicUnsafe(s).substring(6, 8);

export const hour = (s: IsoUtcDatetime): string =>
  extendedToBasicUnsafe(s).substring(8, 10);

export const minute = (s: IsoUtcDatetime): string =>
  extendedToBasicUnsafe(s).substring(10, 12);

export const second = (s: IsoUtcDatetime): string =>
  extendedToBasicUnsafe(s).substring(12, 14);
