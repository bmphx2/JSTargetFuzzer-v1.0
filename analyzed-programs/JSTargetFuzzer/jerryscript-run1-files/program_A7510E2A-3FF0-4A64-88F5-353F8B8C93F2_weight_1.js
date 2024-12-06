function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = f0;
    this.f = f0;
    this.d = f0;
}
const v3 = new F1();
const v4 = new F1();
new F1();
function F15(a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a17;
    v4.g = a18;
    this.c = a18;
}
new F15(v3, -65535);
new F15(v4, -65535);
new F15(v3, 268435439);
function F22() {
    if (!new.target) { throw 'must be called with new'; }
    F22.c = -4294967297;
}
const v25 = new F22();
new F22();
new F22();
function f29() {
    const v32 = new Uint32Array(858);
    return v32;
}
function f35() {
    return v25;
}
const v38 = new BigUint64Array(BigUint64Array, BigUint64Array);
v38.copyWithin();
const v42 = RegExp.bind(2);
const t35 = [-1124966260,9223372036854775807,9,-1022811835,14,-9223372036854775807,-954173599,592825194,-1892405619,4294967296];
delete t35[4];
-2n ^ 409683548n;
Math.fround();
Math.min(0.2148301603058278);
let v53 = 1073741824n;
v53 &= v53;
try { Float32Array(); } catch (e) {}
(-12n).toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
class C67 {
}
new v42(1);
const v72 = new Int8Array(107);
for (let i75 = 0, i76 = 10; i75 < i76;) {
    v72[i76] = i75;
    ++i75;
    Math.max(-7);
}
new Int16Array(26);
4 == [4,7,4294967297,-1,1000];
[-499758239,Reflect];
const v94 = [];
class C95 {
    valueOf(a97, a98) {
        const v99 = `
            const t64 = v94.__proto__;
            delete t64?.d;
        `;
        eval(v99);
    }
}
async function f104(a105, a106) {
    a105 /= C95;
    return v94;
}
const v107 = new Int8Array(Int8Array, Int8Array, Int8Array);
v107.includes(v107, v107);
new Uint8ClampedArray(6);
try {
    new WeakSet(4087n);
} catch(e114) {
} finally {
}
