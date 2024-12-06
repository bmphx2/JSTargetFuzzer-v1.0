function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -12;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [F0,v5];
const v7 = [v5,v6,v3];
[v7,v7,F0,F0];
new Int8Array(64);
const v17 = new Uint32Array(104);
new Uint8Array(512);
let v25;
try { v25 = v17.slice(3, 3); } catch (e) {}
v25.c = Uint8Array;
function f31(a32, a33) {
    const o41 = {
        ...a33,
        "c": a33,
        "b": v4,
        "e": a33,
        __proto__: a33,
        [3](a35, a36, a37) {
            try {
                super.m(a33, a35, a37, a35);
            } catch(e39) {
            }
            const v40 = this[-1];
            a32 **= -33749;
            return v40;
        },
    };
    return o41;
}
f31(10000, 512);
f31(-33749, f31);
f31(3, f31);
function F45(a47, a48) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a48;
}
new F45(10000, 3);
const v50 = new F45(512, 536870888);
new F45(1073741824, 3);
delete v50[1509295508];
let v60 = 767896142;
let v61 = -2.2250738585072014e-308;
const v62 = --v60;
Math.acos(v62);
Math.exp(Math);
Math.cos(v62);
const v66 = ++v61;
++v61;
v66 && v62;
Math.sinh(F45);
Math.sinh(10000);
const v72 = 127 * 3;
10000 >> -1000000000.0;
let v74 = 0;
do {
    v6.valueOf = f31;
    v74++;
} while (v74 < 7)
Math.atan(v72);
