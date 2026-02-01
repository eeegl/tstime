/**
 * A ISO 8601 date string in _basic_ format.
 *
 * For example: `19940426`.
 */
export type IsoDateUtcBasic = `${number}`;

/**
 * An ISO 8601 date string in _extended_ format.
 *
 * For example: `1994-04-26`.
 */
export type IsoDateUtcExtended = `${number}-${number}-${number}`;

/**
 * Union type for
 * - {@link IsoDateUtcBasic}
 * - {@link IsoDateUtcExtended}
 */
export type IsoDateUtc = IsoDateUtcBasic | IsoDateUtcExtended;

/**
 * An ISO 8601 time string in _basic_ format.
 *
 * For example: `133700`.
 */
export type IsoTimeUtcBasic = `${number}`;

/**
 * An ISO 8601 time string in _basic_ format, with _milliseconds_ included.
 *
 * For example: `133700123`.
 */
export type IsoTimeUtcBasicMs = `${number}`;

/**
 * An ISO 8601 time string in _extended_ format.
 *
 * For example: `13:37:00`.
 */
export type IsoTimeUtcExtended = `${number}:${number}:${number}`;

/**
 * An ISO 8601 time string in _extended_ format, with _milliseconds_ included.
 *
 * For example: `13:37:00.123`.
 */
export type IsoTimeUtcExtendedMs = `${number}:${number}:${number}.${number}`;

/**
 * Union type for
 * - {@link IsoTimeUtcBasic}
 * - {@link IsoTimeUtcBasicMs}
 * - {@link IsoTimeUtcExtended}
 * - {@link IsoTimeUtcExtendedMs}
 */
export type IsoTimeUtc =
  | IsoTimeUtcBasic
  | IsoTimeUtcBasicMs
  | IsoTimeUtcExtended
  | IsoTimeUtcExtendedMs;

/**
 * Simplified version of the ISO 8601 _basic_ datetime format.
 *
 * For example: `19940426T133700Z`.
 *
 * See {@link IsoDatetimeUtcExtended} for extended format.
 */
export type IsoDatetimeUtcBasic = `${IsoDateUtcBasic}T${IsoTimeUtcBasic}Z`;

/**
 * Simplified version of the ISO 8601 _basic_ datetime format, with
 * _milliseconds_ included.
 *
 * For example: `19940426T133700123Z`.
 *
 * See {@link IsoDatetimeUtcExtended} for extended format.
 */
export type IsoDatetimeUtcBasicMs = `${IsoDateUtcBasic}T${IsoTimeUtcBasicMs}Z`;

/**
 * Simplified version of the ISO 8601 _extended_ datetime format.
 *
 * For example: `1994-04-26T13:37:00Z`.
 *
 * See {@link IsoDatetimeUtcBasic} for basic format.
 */
export type IsoDatetimeUtcExtended =
  `${IsoDateUtcExtended}T${IsoTimeUtcExtended}Z`;

/**
 * Simplified version of the ISO 8601 _extended_ datetime format, with
 * _milliseconds_ included.
 *
 * For example: `1994-04-26T13:37:00.123Z`.
 *
 * See {@link IsoDatetimeUtcBasic} for basic format.
 */
export type IsoDatetimeUtcExtendedMs =
  `${IsoDateUtcExtended}T${IsoTimeUtcExtendedMs}Z`;

/**
 * Union type for
 * - {@link IsoDatetimeUtcBasic}
 * - {@link IsoDatetimeUtcBasicMs}
 * - {@link IsoDatetimeUtcExtended}
 * - {@link IsoDatetimeUtcExtendedMs}
 */
export type IsoDatetimeUtc =
  | IsoDatetimeUtcBasic
  | IsoDatetimeUtcBasicMs
  | IsoDatetimeUtcExtended
  | IsoDatetimeUtcExtendedMs;

/**
 * Convenience object containing variations of ISO 8601 time/date/datetime
 * strings, as well as number types for year, month, date, hour, minute,
 * seconds, and milliseconds.
 *
 * The following ISO string types are contained:
 * - {@link IsoDateUtcBasic}
 * - {@link IsoDateUtcExtended}
 * - {@link IsoTimeUtcBasic}
 * - {@link IsoTimeUtcBasicMs}
 * - {@link IsoTimeUtcExtended}
 * - {@link IsoTimeUtcExtendedMs}
 * - {@link IsoDatetimeUtcBasic}
 * - {@link IsoDatetimeUtcBasicMs}
 * - {@link IsoDatetimeUtcExtended}
 * - {@link IsoDatetimeUtcExtendedMs}
 */
export type IsoUtc = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  ms: number;
  dateBasic: IsoDateUtcBasic;
  dateExtended: IsoDateUtcExtended;
  timeBasic: IsoTimeUtcBasic;
  timeBasicMs: IsoTimeUtcBasicMs;
  timeExtended: IsoTimeUtcExtended;
  timeExtendedMs: IsoTimeUtcExtendedMs;
  datetimeBasic: IsoDatetimeUtcBasic;
  datetimeBasicMs: IsoDatetimeUtcBasicMs;
  datetimeExtended: IsoDatetimeUtcExtended;
  datetimeExtendedMs: IsoDatetimeUtcExtendedMs;
};
