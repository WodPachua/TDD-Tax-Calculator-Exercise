import { assert } from "chai";
import { taxCalc } from "../taxCalc.js";

describe("Tax calculator test", () => {
  it("Earnings below 12,000 should have 0 tax - cycle 1", () => {
    assert.equal(taxCalc(500), 0);
  });

  it("Earnings below 12,000 should have 0 tax - cycle 2", () => {
    assert.equal(taxCalc(11999), 0);
  });

  it("Earnings between 12,000 and 36,000 should have 20% tax - cycle - 1", () => {
    assert.equal(taxCalc(13000), 2600);
  });

  it("Earnings between 12,000 and 36,000 should have 20% tax - cycle - 2", () => {
    assert.equal(taxCalc(30000), 6000);
  });

  it("Earnings above 36,000 should have 40% tax - cycle - 1", () => {
    assert.equal(taxCalc(36000), 14400);
  });

  it("Earnings above 36,000 should have 40% tax - cycle - 2", () => {
    assert.equal(taxCalc(100000), 40000);
  });

  it("Earnings above 36,000 should have 40% tax - cycle - 3", () => {
    assert.equal(taxCalc(47500.56), 19000.224);
  });
});

// PAIR PARTNER
// Sarah Agemo
