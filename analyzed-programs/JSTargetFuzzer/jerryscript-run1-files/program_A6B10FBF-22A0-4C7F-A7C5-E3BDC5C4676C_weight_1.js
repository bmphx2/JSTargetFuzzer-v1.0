function f1() {
    const o6 = {
        valueOf() {
            with (this) {
                a = this;
            }
            return f1;
        },
        ...undefined,
        [undefined]: undefined,
        __proto__: f1,
        "c": undefined,
    };
    return o6;
}
f1();
const v8 = f1();
f1();
const v11 = [2.220446049250313e-16,-5.0,4.0,374.98958739447244,1000000000.0,855063.1763904884,Infinity,-Infinity,0.7608961253408736,-1.0];
for (const v14 in ([1.7976931348623157e+308]).fill(v11, 257, 257)) {
}
function f15() {
    return undefined;
}
const v16 = [1000000.0,-5.0,-5.0,0.4033434620925662,0.0,-4.0,573629.1291991009];
[1.7699493757364463e+308,-3.2176666577008074e+307];
const v18 = [3.0,-7.07000931874344e+307,2.0,3.7789987745264213,4.0,2.220446049250313e-16,0.2527599388066233,-5.0,2.0];
function F20(a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
}
const v25 = new F20(F20, -1.0, -1.0);
v16.__proto__ = v25;
function f26() {
    return v18;
}
[127,-1874087582,-43486,-65536,9104];
[-2];
[1,1,2,4,1073741823];
new Float64Array(1794);
switch (v8) {
    default:
        break;
}
new BigUint64Array(108);
const v38 = new Int8Array(627);
const v41 = new BigUint64Array(64);
let v47 = 2.2250738585072014e-308;
h = v47;
let v53 = 434742601;
v38.length = -13;
[v53,...v47] = v41;
try { v47(v53, -505.82829815177945, BigUint64Array, v38); } catch (e) {}
