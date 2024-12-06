function f0() {
}
const v2 = new WeakMap();
function f3(a4) {
    const o11 = {
        [f0](a6, a7) {
            return this;
        },
        28: a4,
        ...v2,
        __proto__: a4,
        [-2]: a4,
        ...v2,
    };
    return o11;
}
const v12 = f3(WeakMap);
f3(f3(f0));
class C15 extends WeakMap {
    e = v12;
    toString(a17, a18, a19, a20) {
        super.h = a20;
        const v21 = [f3,this,a17];
        [v21,f0,f0,v21,a17];
        [WeakMap,v21,this];
        return this;
    }
}
new C15();
new C15();
new C15();
function F30() {
    if (!new.target) { throw 'must be called with new'; }
    F30.c = -4294967297;
}
const v33 = new F30();
new F30();
new F30();
function f37() {
    const v40 = new Uint32Array(858);
    return v40;
}
function f43() {
    return v33;
}
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
    Math[i78] = WeakMap;
    i78 / i78;
    Math.ceil(i78);
    Math.trunc(i78);
    ++i78;
    Math.max(-7);
}
new Int16Array(26);
4 == [4,7,4294967297,-1,1000];
const v100 = new Int8Array(Int8Array, Int8Array, Int8Array);
v100.includes(v100, v100);
new Uint8ClampedArray(6);
try {
    new WeakSet(4087n);
} catch(e107) {
} finally {
}
