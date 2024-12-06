function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = f0;
    this.h = f0;
    this.g = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function f9(a10, a11) {
    const o20 = {
        get g() {
            Object.defineProperty(v4, 5, { configurable: true, enumerable: true, get: f0, set: f0 });
            const v13 = f0(a10, a10, ..."m", f0, a10, this);
            [v13,[v13],a10,v13,a10];
            [v13,v13];
            return F1;
        },
        "d": a11,
        10: a11,
        __proto__: "toString",
        ["n"]: v5,
    };
    return o20;
}
const v21 = f9(v5, v5);
f9(v3, v4);
f9(v4, v4);
new Set();
new Uint8Array(1);
new Uint8Array(v21);
new Int16Array(512);
const v39 = [[4,536870889,536870889],-4096];
const v40 = [v39,4];
new BigInt64Array(0);
new Float32Array(4);
new BigUint64Array(129);
let v50 = 10;
for (; v50--;) {
    v39[252] = v39;
    -4096 << v50;
}
try { v40.values(); } catch (e) {}
