function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 64;
}
new F0();
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a12;
}
new F9(-65535, v5, -65535);
const v15 = new F9(-65535, v4, -65535);
new F9(7, v15, 7);
function f23() {
    return 2n;
}
const o34 = {
    ...v15,
    "c": v15,
    "b": 1073741824,
    "e": v15,
    __proto__: v15,
    [3](a28, a29, a30) {
        try {
            super.m(v15, a28, a30, a28);
        } catch(e32) {
        }
        const v33 = this[8];
        f23 **= -33749;
        return v33;
    },
};
const t33 = 16;
t33.toString = f23;
const v41 = f23();
class C42 {
    constructor(a44, a45) {
        super.f;
    }
}
const v47 = delete v41[f23];
function f48() {
    return f23;
}
let v54 = 9223372036854775807n;
v54 &= 536870888n;
Math.hypot(Int32Array);
const v59 = new Uint8Array(2);
let v61 = Float32Array;
const v62 = new v61(127);
new Int32Array(243, 243, v47);
new gc();
new Number(127);
new BigInt64Array(3886);
new Uint32Array(0);
v61 += v61;
let v77;
try { v77 = gc(v59); } catch (e) {}
const v79 = [v77];
"p" + 127;
6 * 9007199254740990;
Reflect.apply(v62.sort, v62, v79);
try { v79.flat(); } catch (e) {}
[498897049];
[-57150070,-2147483647,-11,-19440739,257,-65536,5,-1371366486,-5,-4294967296];
[-9007199254740990,-530113451,4,-14,-45856,2];
