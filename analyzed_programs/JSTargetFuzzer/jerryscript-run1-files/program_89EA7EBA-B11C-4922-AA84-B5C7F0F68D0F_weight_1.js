new WeakMap();
function f3(a4) {
    const o16 = {
        n(a6, a7) {
            try { a6.n(); } catch (e) {}
            const o11 = {
                "maxByteLength": 1073741824,
            };
            const v13 = new SharedArrayBuffer(1, o11);
            const v15 = new Int8Array(v13);
            return v15;
        },
    };
    return o16;
}
f3(null);
f3(WeakMap);
const o22 = {
    m(a21) {
        [] = 39946;
        return 39946;
    },
};
try { o22.m(); } catch (e) {}
f3(WeakMap);
function f25() {
    return null;
}
new Date();
new BigInt64Array(256);
const v39 = new Uint32Array(227);
new Uint16Array(129);
function F43(a45, a46) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a46;
}
new F43(256, 129);
new F43(v39, 227);
new F43(v39, 129);
function f50() {
}
for (const v53 of [-9.978835596066949,0.8505756132149569,684.253217079754,-Infinity,2.2250738585072014e-308]) {
    -0.355714392071409 % v53;
}
new Uint8Array(227);
let v68 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v68);
v68 /= v68;
new WeakSet();
new BigUint64Array();
let v79 = 0;
while (v79 < 2) {
    for (let v82 = 0; v82 < 5; v82++) {
    }
    v79++;
}
new BigInt64Array(2);
([5]).reverse();
