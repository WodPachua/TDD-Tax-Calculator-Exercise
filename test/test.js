import { assert } from "chai";
import { taxCalc } from "../taxCalc.js";

describe("Tax calculator test", () => {
  it("Earnings below 12,000 should have 0 tax", () => {
    assert.equal(taxCalc(500), 0);
    assert.equal(taxCalc(11999), 0);
  });

  it("Earnings between 12,000 and 36,000 should have 20% tax", () => {
    assert.equal(taxCalc(13000), 3380);
    assert.equal(taxCalc(30000), 7800);
  });
});

// PAIR PARTNER
// Sarah Agemo
