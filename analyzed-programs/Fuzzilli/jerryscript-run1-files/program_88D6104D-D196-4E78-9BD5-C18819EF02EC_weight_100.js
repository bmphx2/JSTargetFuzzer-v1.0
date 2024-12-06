function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -16;
    this.e = -16;
    this.c = -16;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v7 = new WeakMap();
function f8(a9, a10) {
    const o19 = {
        "c": v3,
        set e(a12) {
        },
        "f": v7,
    };
    return o19;
}
new Float64Array(2929);
8 << v4;
f8(v4, v7);
f8(v3, f8(v7, v4));
function F28(a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    this.sticky = a30;
}
new F28(v4, v5);
[-2,256,16,268435441,65536,7,2147483647,-9223372036854775808,268435441] <= WeakMap;
const v37 = new Uint8Array();
const v38 = v37.buffer;
let v39;
try { v39 = Int8Array(v38, Uint8Array); } catch (e) {}
try { g(v39, g, v37); } catch (e) {}
