function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 9007199254740991;
    this.f = a5;
}
const v7 = new F3(9007199254740991, 9007199254740991);
const v8 = new F3(16, 16);
const v9 = new F3(9007199254740991, 3);
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a13;
}
new F10(9007199254740991, v7, v7);
const v16 = new F10(3, v8, v9);
new F10(3, v16, F10);
let v22 = 541;
const o23 = {
    "maxByteLength": v22,
};
const v25 = new ArrayBuffer(541, o23);
new DataView(v25);
v22 = 541;
