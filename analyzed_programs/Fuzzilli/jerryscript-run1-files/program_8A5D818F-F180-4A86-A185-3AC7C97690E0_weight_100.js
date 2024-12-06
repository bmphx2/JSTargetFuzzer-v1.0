function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -9;
    this.d = -9;
    this.f = -9;
}
new F0();
new F0();
new F0();
let v9 = 16;
const v11 = new Int16Array(v9);
new Uint32Array(1024);
new BigInt64Array(512);
v9 = -1107062016;
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -9007199254740990;
    this.e = F0;
    this.d = a21;
}
new F18(512, 512);
const v23 = new F18(1024, v11);
const v24 = new F18(-9007199254740990, v23);
-v24;
