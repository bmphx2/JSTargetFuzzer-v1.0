function f1() {
    return undefined;
}
const v6 = new WeakMap();
function F7(a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a9;
    this.g = undefined;
}
let v12 = new F7(-1629810395n, 9007199254740990n, 512n);
const v13 = new F7(512n, v12, -1629810395n);
new F7(512n, f1, 512n);
function f18(a19, a20) {
    const o29 = {
        __proto__: v13,
        "a": a20,
        ...v12,
        1: 9007199254740990n,
        o(a22, a23, a24) {
            try { (129).p(this, 512n); } catch (e) {}
            v12 |= a20;
            a19 in a22;
            v13 ^ a23;
            return 9007199254740990n ** a20;
        },
        "b": a19,
        "f": undefined,
        "h": v6,
    };
    return v12;
}
f18(v12, v6);
f18(v6, v12);
f18(v12, v12);
const v35 = new Uint32Array(181);
let v37 = BigUint64Array;
let v38 = new v37(1);
let v39 = 253;
[v39,,v37,v38] = v35;
try { v37["abs"](181, v39, v37); } catch (e) {}
new Uint16Array(10000);
for (let i52 = 0; i52 < 181; i52++) {
    const v58 = new Function("x");
    v58.name;
}
Function();
