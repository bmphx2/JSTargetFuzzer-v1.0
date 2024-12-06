const v2 = new Uint32Array(228);
const o5 = {
    ...v2,
    ...v2,
    "e": v2,
};
let v6 = new Int16Array(24);
let v7 = 9;
const v9 = new Float64Array(v7);
function f10() {
    return Int16Array;
}
class C11 extends Float64Array {
    static get c() {
        v7 = this >>> 228;
        for (let v14 = 0; v14 < 32; v14++) {
            v6 = this;
            const o19 = {
                "construct": f10,
                "defineProperty": f10,
                "ownKeys": f10,
            };
            new Proxy("p", o19);
            v9["p" + v14] = v14;
        }
        return Uint32Array;
    }
    static 2;
    static [Uint32Array] = Uint32Array;
    static 7 = v6;
    static 257;
}
const v23 = new C11();
const v24 = new Float64Array();
const v25 = new C11();
let v27 = 7260n;
v27 *= -9223372036854775808n;
v27 <<= v27;
const v31 = v7 || 1005066182;
Math.max(v31);
Math.min(v31);
function f34(a35, a36, a37, a38) {
    function F39(a41, a42, a43) {
        if (!new.target) { throw 'must be called with new'; }
        this.a = a36;
        this.f = a36;
    }
    const v44 = new F39(v23, v25, F39);
    new F39(v24, v23, v7);
    new F39(v24, v9, C11);
    return v44;
}
f34(v25, 24, v7, v31);
-v31;
v31 ^ 1005066182;
1005066182 - 1005066182;
