function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 9007199254740991;
}
new F0();
new F0();
const v5 = new F0();
const v8 = new Float64Array(2446);
const v11 = new BigInt64Array(255);
new Uint8ClampedArray(64);
new Uint8ClampedArray(v8, 2446, 255);
let v18 = 11;
Math.max(v11);
Math.exp(v5);
Math.acosh(2446);
const v23 = +v11;
v5 ^ v5;
~v23;
--v18;
