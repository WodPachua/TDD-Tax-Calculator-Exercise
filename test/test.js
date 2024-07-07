import { assert } from "chai";
import { taxCalc } from "../taxCalc.js";

describe("Tax calculator test", () => {
  it("Earnings below 12,000 should have 0 tax", () => {
    assert.equal(taxCalc(500), 0);
    assert.equal(taxCalc(11999), 0);
  });
});

// PAIR PARTNER
// Sarah Agemo
