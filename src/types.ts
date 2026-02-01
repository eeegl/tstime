/**
 * Simplified version of the ISO 8601 _basic_ datetime format.
 *
 * For example: `19940426T133700Z`.
 *
 * See {@link IsoUtcDatetimeExtended} for extended format.
 */
export type IsoUtcDatetimeBasic = `${number}T${number}Z`;

/**
 * Simplified version of the ISO 8601 _extended_ datetime format.
 *
 * For example: `1994-04-26T13:37:00Z`.
 *
 * See {@link IsoUtcDatetimeBasic} for basic format.
 */
export type IsoUtcDatetimeExtended =
  `${number}-${number}-${number}T${number}:${number}:${number}Z`;

/**
 * General type for when the exact time format is not that important.
 */
export type IsoUtcDatetime = IsoUtcDatetimeBasic | IsoUtcDatetimeExtended;
