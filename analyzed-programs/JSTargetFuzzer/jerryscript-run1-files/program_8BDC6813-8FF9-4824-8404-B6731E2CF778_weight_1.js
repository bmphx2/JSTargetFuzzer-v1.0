function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 127;
    this.f = 127;
    this.g = 127;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o15 = {
        m(a10, a11) {
            return this;
        },
        "f": v5,
        ...v3,
        "c": f6,
        "h": v5,
        "d": v4,
        ...v4,
        [v5]: F0,
        10: a8,
        ...v5,
    };
    return o15;
}
const v16 = f6(v4, v5);
f6(v5, v4);
const v18 = f6(v4, v3);
const v19 = [v3,v18,v18,v4];
[v19,F0,v5,v19];
const v21 = [v16];
new Float64Array(128);
const v30 = new Uint8ClampedArray(3533);
new Uint8ClampedArray(9);
let v34 = [1073741824,9007199254740990,-65537,-49548,-65535,-205947021];
const v35 = [65535,268435439,-13,6,0,-5,0,1085038244,184234192,-633098007];
const v36 = [256,0,9007199254740992,9007199254740990,-2147483647,6,257];
function f37(a38, a39) {
    const o57 = {
        __proto__: v19,
        "b": v30,
        o(a41) {
            return this ^ this;
        },
        set h(a44) {
            let v45;
            try { v45 = a44(a39, v36); } catch (e) {}
            switch (v36) {
                case v34:
                    const v50 = 1.948625827865868e+307 << 4;
                    a44 % 1.948625827865868e+307;
                    Math.exp(v50);
                    ~v45;
                    ~v45;
                    !v45;
                    1.948625827865868e+307 / v50;
                    break;
            }
        },
    };
    return o57;
}
f37(v36, v35);
f37(v36, v34);
f37(v34, v34);
[9,-1314550274,-6,-21927,11,39852,15,1816348659,0,4];
[-52832,-14,6,12,2147483647,-34119,10000];
[-16,65536,106906299,-7,-65536,9007199254740990,-8];
new BigInt64Array(64);
new Uint16Array(1000);
new BigInt64Array(8, v21, v21);
v34 / v34;
--v34;
v34 & 10;
