function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 2147483648;
    this.g = 2147483648;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v3;
}
const v9 = new F6(F6);
new F6(v4);
const v11 = new F6(v5);
class C12 extends F6 {
    constructor(a14, a15, a16) {
        super(v4);
        new Uint8Array(853);
        new Uint8ClampedArray(4);
        new Uint32Array(81);
    }
}
const v26 = new C12(v9, C12, v11);
const v27 = new C12(v26, v9, v26);
const v28 = new C12(v27, v26, v9);
function f35(a36, a37, a38) {
    const o48 = {
        n(a40, a41, a42, a43) {
            a40[a38];
            [257,9223372036854775807,-268435456,10,2,-9223372036854775807,-4294967297,1073741825,1073741825,1000];
            [609089358,-1,-2147483648,10,1073741823,4294967296,65535,2480,65537,-128];
            [1024,65535,1024,16,4,49676,-2147483648,-5,57864,-10355];
            return a37;
        },
        "a": 6,
        ...a36,
        ..."description",
        ..."__proto__",
        "g": v28,
        "e": "__proto__",
        [a36]: a37,
        "c": -27883,
    };
    return o48;
}
f35("description", -63267, -27883);
const v50 = f35("__proto__", 6, -27883);
f35("description", -27883, "j");
function F58(a60, a61, a62) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -63267;
    this.h = a60;
}
new F58(v50, -27883, "b");
const v64 = new F58(v50, 6, "b");
new F58(v64, -9223372036854775808, "-13");
try { ("b").codePointAt(-63267); } catch (e) {}
const v70 = !536870912;
Math.sin("__proto__");
const v72 = -565289.7889622233 * v70;
~(~"__proto__");
536870912 || v72;
