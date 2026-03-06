import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";
const auth1 = {
  authorization: "ApiKey abc123xyz",
};

const auth2 = {
  authorization: "ApiKey",
};

const auth3 = {
  authorization: "NotApiKey abc123xyz",
};

const auth4 = {};

describe("getApiKey auth.ts", () => {
  test("True authorization property", () => {
    expect(getAPIKey(auth1)).toBe("abc123xyz");
  });

  test("empty one", () => {
    expect(getAPIKey(auth2)).toBeFalsy();
  });

  test("wrong label", () => {
    expect(getAPIKey(auth3)).toBeFalsy();
  });

  test("missing authorization header", () => {
    expect(getAPIKey(auth4)).toBe(null);
  });
});
