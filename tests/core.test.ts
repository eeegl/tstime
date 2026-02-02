import {
  isIsoDatetimeUtc,
  isIsoDatetimeUtcBasic,
  isIsoDatetimeUtcBasicMs,
  isIsoDatetimeUtcExtended,
  isIsoDatetimeUtcExtendedMs,
  isIsoDateUtc,
  isIsoDateUtcBasic,
  isIsoDateUtcExtended,
  isIsoTimeUtc,
  isIsoTimeUtcBasic,
  isIsoTimeUtcBasicMs,
  isIsoTimeUtcExtended,
  isIsoTimeUtcExtendedMs,
  newIsoUtc,
} from "../src/index.ts";

describe("newIsoUtc", () => {
  it("builds iso object correctly", () => {
    const date = new Date("1994-04-26T13:37:00.123Z");
    const isoUtc = newIsoUtc(date);

    expect(isoUtc.year).toEqual(date.getUTCFullYear());
    // -1 since Date.getUTCMonth zero-based values 0-11
    expect(isoUtc.month - 1).toEqual(date.getUTCMonth());
    expect(isoUtc.day).toEqual(date.getUTCDate());

    expect(isoUtc.hour).toEqual(date.getUTCHours());
    expect(isoUtc.minute).toEqual(date.getUTCMinutes());
    expect(isoUtc.second).toEqual(date.getUTCSeconds());
    expect(isoUtc.ms).toEqual(date.getUTCMilliseconds());

    expect(isoUtc.dateExtended).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(isoUtc.timeExtended).toMatch(/^\d{2}:\d{2}:\d{2}$/);
    expect(isoUtc.timeExtendedMs).toMatch(/^\d{2}:\d{2}:\d{2}.\d{3}$/);

    expect(isoUtc.dateBasic).toMatch(/^\d{8}$/);
    expect(isoUtc.timeBasic).toMatch(/^\d{6}$/);
    expect(isoUtc.timeBasicMs).toMatch(/^\d{9}$/);

    expect(isIsoDateUtc("19940426")).toBe(true);
    expect(isIsoDateUtc("1994-04-26")).toBe(true);
    expect(isIsoDateUtcBasic("19940426")).toBe(true);
    expect(isIsoDateUtcExtended("1994-04-26")).toBe(true);

    expect(isIsoTimeUtc("133700")).toBe(true);
    expect(isIsoTimeUtc("133700.123")).toBe(true);
    expect(isIsoTimeUtc("13:37:00")).toBe(true);
    expect(isIsoTimeUtc("13:37:00.123")).toBe(true);

    expect(isIsoTimeUtcBasic("133700")).toBe(true);
    expect(isIsoTimeUtcBasicMs("133700.123")).toBe(true);
    expect(isIsoTimeUtcExtended("13:37:00")).toBe(true);
    expect(isIsoTimeUtcExtendedMs("13:37:00.123")).toBe(true);

    expect(isIsoDatetimeUtc("19940426T133700Z")).toBe(true);
    expect(isIsoDatetimeUtc("19940426T133700.123Z")).toBe(true);
    expect(isIsoDatetimeUtc("1994-04-26T13:37:00Z")).toBe(true);
    expect(isIsoDatetimeUtc("1994-04-26T13:37:00.123Z")).toBe(true);

    expect(isIsoDatetimeUtcBasic("19940426T133700Z")).toBe(true);
    expect(isIsoDatetimeUtcBasicMs("19940426T133700.123Z")).toBe(true);
    expect(isIsoDatetimeUtcExtended("1994-04-26T13:37:00Z")).toBe(true);
    expect(isIsoDatetimeUtcExtendedMs("1994-04-26T13:37:00.123Z")).toBe(true);
  });
});
