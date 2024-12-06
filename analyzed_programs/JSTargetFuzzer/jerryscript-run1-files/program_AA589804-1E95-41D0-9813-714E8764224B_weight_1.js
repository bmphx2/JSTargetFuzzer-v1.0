function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 4294967295;
}
const v3 = new F0();
const v4 = new F0();
new F0();
const v8 = new Uint8ClampedArray(255);
new Int8Array(191);
const v14 = new Uint8ClampedArray(12);
function F18() {
    if (!new.target) { throw 'must be called with new'; }
    F18.c = -4294967297;
}
const v21 = new F18();
new F18();
new F18();
function f25() {
    const v28 = new Uint32Array(858);
    return v28;
}
function f31() {
    return v21;
}
[] = v8;
[v3,[F0,f25,4],191];
[v14,v4];
new Int32Array(7);
new Float64Array(9);
new BigInt64Array(2);
const v46 = new BigUint64Array(BigUint64Array, BigUint64Array);
v46.copyWithin();
const v50 = RegExp.bind(2);
Math.fround();
Math.min(0.2148301603058278);
let v56 = 1073741824n;
v56 &= v56;
try { Float32Array(); } catch (e) {}
(-12n).toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
class C70 {
}
const v72 = new v50(1);
const v75 = new Int8Array(107);
for (let i78 = 0, i79 = 10; i78 < i79;) {
    v75[v72] = i78;
    ++i78;
    Math.max(-7);
}
new Int16Array(26);
4 == [4,7,4294967297,-1,1000];
const v95 = new Int8Array(Int8Array, Int8Array, Int8Array);
v95.includes(v95, v95);
new Uint8ClampedArray(6);
try {
    new WeakSet(4087n);
} catch(e102) {
} finally {
}
