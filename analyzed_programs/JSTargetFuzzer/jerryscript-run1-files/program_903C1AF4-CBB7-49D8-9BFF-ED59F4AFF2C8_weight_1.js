function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 41952;
    this.b = 41952;
    this.e = 41952;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a8;
    this.h = v3;
    this.d = v5;
}
new F6(v3);
const v10 = new F6(v4);
new F6(v3);
const v14 = new Uint16Array(257);
let v16 = Float32Array;
new v16(1);
new Float32Array(1000);
v10[6] ^= 257;
const v25 = ++v16;
let v26 = -1818677934 || -1000000000.0;
v25 ^ 6;
++v26;
v14[6];
