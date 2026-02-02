import type {
  IsoDatetimeUtcBasic,
  IsoDateUtcBasic,
  IsoDateUtc,
  IsoDateUtcExtended,
  IsoUtc,
  IsoTimeUtcBasic,
  IsoTimeUtcBasicMs,
  IsoTimeUtcExtended,
  IsoTimeUtcExtendedMs,
  IsoDatetimeUtcBasicMs,
  IsoDatetimeUtcExtended,
  IsoDatetimeUtcExtendedMs,
  IsoTimeUtc,
  IsoDatetimeUtc,
} from "./types.js";

/**
 * Generates a ISO 8601 date string.
 *
 * The defaults uses the current time (a new {@link Date}), and the ISO 8601
 * extended format (`params.date` set to `false`).
 *
 * @param params Enables customize date and ISO 8601 basic format
 * @returns An date string in extended or basic format
 */
export const newIsoDateUtc = (
  params: { date: Date; basic: boolean } = { date: new Date(), basic: false },
): string => {
  return params.basic
    ? [
        params.date.getUTCFullYear().toString().padStart(4, "0"),
        // +1 since getUTCMonth is zero-based
        (params.date.getUTCMonth() + 1).toString().padStart(2, "0"),
        params.date.getUTCDate().toString().padStart(2, "0"),
      ].join("")
    : [
        params.date.getUTCFullYear().toString().padStart(4, "0"),
        "-",
        params.date.getUTCMonth().toString().padStart(2, "0"),
        "-",
        params.date.getUTCDate().toString().padStart(2, "0"),
      ].join("");
};

/**
 * Generates a ISO 8601 time string.
 *
 * The defaults uses the current time (a new {@link Date}), and the ISO 8601
 * extended format (`params.date` set to `false`).
 *
 * @param params Enables customize date and ISO 8601 basic format
 * @returns An time string in extended or basic format
 */
export const newIsoTimeUtc = (
  params: { date: Date; basic: boolean; ms: boolean } = {
    date: new Date(),
    basic: false,
    ms: true,
  },
): string => {
  const time = params.basic
    ? [
        params.date.getUTCHours().toString().padStart(2, "0"),
        params.date.getUTCMinutes().toString().padStart(2, "0"),
        params.date.getUTCSeconds().toString().padStart(2, "0"),
      ].join("")
    : [
        params.date.getUTCHours().toString().padStart(2, "0"),
        ":",
        params.date.getUTCMinutes().toString().padStart(2, "0"),
        ":",
        params.date.getUTCSeconds().toString().padStart(2, "0"),
      ].join("");

  const msSuffix = [
    ".",
    params.date.getMilliseconds().toString().padStart(3, "0"),
  ].join("");

  return params.ms ? time + msSuffix : time;
};

/**
 * Generates a ISO 8601 datetime string.
 *
 * The defaults uses the current time (a new {@link Date}), and the ISO 8601
 * extended format (`params.date` set to `false`).
 *
 * @param params Enables customize date and ISO 8601 basic format
 * @returns An datetime string in extended or basic format
 */
export const newIsoDatetimeUtc = (
  params: { date: Date; basic: boolean; ms: boolean } = {
    date: new Date(),
    basic: false,
    ms: true,
  },
): string => {
  return newIsoDateUtc(params) + "T" + newIsoTimeUtc(params) + "Z";
};

/**
 * Generates an object containing variations of ISO 8601 time/date/datetime
 * strings, as well as number types for year, month, date, hour, minute,
 * seconds, and milliseconds.
 *
 * The defaults uses the current time (a new {@link Date}).
 */
export const newIsoUtc = (date: Date = new Date()): IsoUtc => ({
  year: date.getUTCFullYear(),
  month: date.getUTCMonth() + 1, // Since getUTCMonth is zero based 0-11
  day: date.getUTCDate(),
  hour: date.getUTCHours(),
  minute: date.getUTCMinutes(),
  second: date.getUTCSeconds(),
  ms: date.getUTCMilliseconds(),
  dateBasic: newIsoDateUtc({ date, basic: true }) as IsoDateUtcBasic,
  dateExtended: newIsoDateUtc({ date, basic: false }) as IsoDateUtcExtended,
  timeBasic: newIsoTimeUtc({ date, basic: true, ms: false }) as IsoTimeUtcBasic,
  timeBasicMs: newIsoTimeUtc({
    date,
    basic: true,
    ms: true,
  }) as IsoTimeUtcBasicMs,
  timeExtended: newIsoTimeUtc({
    date,
    basic: false,
    ms: false,
  }) as IsoTimeUtcExtended,
  timeExtendedMs: newIsoTimeUtc({
    date,
    basic: false,
    ms: true,
  }) as IsoTimeUtcExtendedMs,
  datetimeBasic: newIsoDatetimeUtc({
    date,
    basic: true,
    ms: false,
  }) as IsoDatetimeUtcBasic,
  datetimeBasicMs: newIsoDatetimeUtc({
    date,
    basic: true,
    ms: true,
  }) as IsoDatetimeUtcBasicMs,
  datetimeExtended: newIsoDatetimeUtc({
    date,
    basic: false,
    ms: false,
  }) as IsoDatetimeUtcExtended,
  datetimeExtendedMs: newIsoDatetimeUtc({
    date,
    basic: false,
    ms: true,
  }) as IsoDatetimeUtcExtendedMs,
});

/**
 * Type guard.
 */
export const isIsoDateUtc = (s: string): s is IsoDateUtc =>
  isIsoDateUtcExtended(s) || isIsoDateUtcBasic(s);

/**
 * Type guard.
 */
export const isIsoDateUtcBasic = (s: string): s is IsoDateUtcBasic =>
  /^\d{8}$/.test(s);

/**
 * Type guard.
 */
export const isIsoDateUtcExtended = (s: string): s is IsoDateUtc =>
  /^\d{4}-\d{2}-\d{2}$/.test(s);

/**
 * Type guard.
 */
export const isIsoTimeUtc = (s: string): s is IsoTimeUtc =>
  isIsoTimeUtcBasic(s) ||
  isIsoTimeUtcBasicMs(s) ||
  isIsoTimeUtcExtended(s) ||
  isIsoTimeUtcExtendedMs(s);

/**
 * Type guard.
 */
export const isIsoTimeUtcBasic = (s: string): s is IsoTimeUtcBasic =>
  /^\d{6}$/.test(s);

/**
 * Type guard.
 */
export const isIsoTimeUtcBasicMs = (s: string): s is IsoTimeUtcBasicMs =>
  /^\d{6}.\d{3}$/.test(s);

/**
 * Type guard.
 */
export const isIsoTimeUtcExtended = (s: string): s is IsoTimeUtcExtended =>
  /^\d{2}:\d{2}:\d{2}$/.test(s);

/**
 * Type guard.
 */
export const isIsoTimeUtcExtendedMs = (s: string): s is IsoTimeUtcExtendedMs =>
  /^\d{2}:\d{2}:\d{2}.\d{3}$/.test(s);

/**
 * Type guard.
 */
export const isIsoDatetimeUtc = (s: string): s is IsoDatetimeUtc =>
  isIsoDatetimeUtcBasic(s) ||
  isIsoDatetimeUtcBasicMs(s) ||
  isIsoDatetimeUtcExtended(s) ||
  isIsoDatetimeUtcExtendedMs(s);

/**
 * Type guard.
 */
export const isIsoDatetimeUtcBasic = (s: string): s is IsoDatetimeUtcBasic =>
  /^\d{8}T\d{6}Z$/.test(s);

/**
 * Type guard.
 */
export const isIsoDatetimeUtcBasicMs = (
  s: string,
): s is IsoDatetimeUtcBasicMs => /^\d{8}T\d{6}.\d{3}Z$/.test(s);

/**
 * Type guard.
 */
export const isIsoDatetimeUtcExtended = (
  s: string,
): s is IsoDatetimeUtcExtended =>
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(s);

/**
 * Type guard.
 */
export const isIsoDatetimeUtcExtendedMs = (
  s: string,
): s is IsoDatetimeUtcExtended =>
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(s);
