// PAIR PARTNER
// Sarah Agemo

export function taxCalc(earnings) {
  let tax;

  if (earnings < 12000) {
    tax = 0;
  } else if (earnings >= 12000 && earnings < 36000) {
    tax = earnings * 0.26;
  }

  return tax;
}
