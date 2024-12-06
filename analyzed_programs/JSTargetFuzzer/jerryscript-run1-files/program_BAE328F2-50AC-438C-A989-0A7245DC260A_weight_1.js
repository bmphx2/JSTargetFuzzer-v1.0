const v1 = new WeakSet();
const v2 = [v1,v1];
const v3 = [v2,v2];
const v4 = [];
function f5() {
    return v4;
}
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
}
const v11 = new F6(v4, v4, v4);
let v12 = -16;
const o13 = {
    "defineProperty": f5,
};
const v15 = new Proxy(v11, o13);
function f16() {
    return f16;
}
function f17() {
    function F18(a20, a21, a22, a23) {
        if (!new.target) { throw 'must be called with new'; }
        this.e = a22;
        this.a = f17;
        this.d = v4;
    }
    new F18(v3, v4, v4, v3);
    const v25 = new F18(v15, v2, v11, v4);
    new F18(v25, v4, v11, v3);
    return o13;
}
Object.defineProperty(v15, v12, { configurable: true, get: f17, set: f16 });
const v27 = [v3,v2,WeakSet,WeakSet,WeakSet];
try { v27.reduceRight(f16, 4294967296); } catch (e) {}
const v35 = 228277.7894582767 >> v1;
Math.trunc(228277.7894582767);
const v38 = !(v35 - 4294967297);
Math.cos(v35);
Math.asin(v38);
Math.log1p(4294967297);
switch (-16n) {
    case v1:
        o13[f5];
}
new Uint8Array(161);
new Float32Array(198);
const v54 = new BigInt64Array(6);
const v60 = -14;
v2["map"](Date, v54);
const v66 = v12--;
v12 / v12;
Math.imul(-9223372036854775807, 129);
v12 << 129;
Math.exp(v66);
const v71 = ~-1423981769n;
try { Date.UTC(268435439, -14, 14, -14, v60, -14, v71); } catch (e) {}
