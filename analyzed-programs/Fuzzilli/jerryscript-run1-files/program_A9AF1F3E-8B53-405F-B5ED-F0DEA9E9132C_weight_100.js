[];
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a6;
    this.b = 9007199254740991;
}
const v7 = new F4(9007199254740991);
const v8 = new F4(-312594648);
const v9 = new F4(9007199254740991);
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = this;
    this.h = F10;
}
new F10(9007199254740991, 9007199254740991, v7, v9);
new F10(-312594648, -312594648, v8, v8);
new F10(-312594648, -7, v8, v8);
const v21 = new Uint8ClampedArray(257);
for (const v22 in v21) {
    v21 > v22;
}
let v24 = 8n;
v24 += v24;
