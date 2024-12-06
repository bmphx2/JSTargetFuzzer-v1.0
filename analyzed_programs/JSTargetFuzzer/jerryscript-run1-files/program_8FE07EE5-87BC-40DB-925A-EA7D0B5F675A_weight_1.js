function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 1024;
    this.e = 1024;
    this.d = 1024;
}
const v3 = new F0();
new F0();
new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a8;
}
new F6(F0);
const v10 = new F6(v3);
new F6(v10);
let v15 = [1073741824,9007199254740990,-65537,-49548,-65535,-205947021];
const v16 = [65535,268435439,-13,6,0,-5,0,1085038244,184234192,-633098007];
const v17 = [256,0,9007199254740992,9007199254740990,-2147483647,6,257];
function f18(a19, a20) {
    const o38 = {
        __proto__: v15,
        "b": v17,
        o(a22) {
            this ^ this;
            return a19;
        },
        set h(a25) {
            try { a25(a20, v17); } catch (e) {}
            switch (a19) {
                case a20:
                    const v31 = 1.948625827865868e+307 << 4;
                    a25 % 1.948625827865868e+307;
                    Math.exp(v31);
                    ~4;
                    ~1.948625827865868e+307;
                    !3;
                    1.948625827865868e+307 / v31;
                    break;
            }
        },
    };
    return o38;
}
f18(v17, v16);
f18(v15, v15);
f18(v15, v17);
[9,-1314550274,-6,-21927,11,39852,15,1816348659,0,4];
[-52832,-14,6,12,2147483647,-34119,10000];
[-16,65536,106906299,-7,-65536,9007199254740990,-8];
new BigInt64Array(64);
new Uint16Array(1000);
new BigInt64Array(8);
v15 / v15;
--v15;
v15 & 10;
