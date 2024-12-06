new Date();
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a7;
}
new F5(F5);
new F5(9007199254740990);
new F5(-9007199254740990);
function f11() {
    return 9007199254740990;
}
const v20 = new Uint8Array(2);
const v23 = new Int16Array(480);
const v26 = Symbol.toPrimitive;
v20[v26];
const v29 = [];
const v30 = v23.toString;
const v31 = Reflect.apply(v30, v26, v29);
new Uint8Array(3086);
function f34() {
    const o38 = {
        4096: 24473,
        __proto__: "sticky",
        "g": "sticky",
        ..."sticky",
        ["sticky"]: -2.220446049250313e-16,
        [24473]: "sticky",
        ...-2.220446049250313e-16,
        13: "sticky",
        "f": v30,
        "a": 24473,
        "b": "sticky",
        ..."sticky",
        "e": -2.220446049250313e-16,
    };
    return o38;
}
const v39 = f34();
const v40 = f34();
f34();
function f42() {
    return v40;
}
function F46(a48, a49, a50) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v39;
}
new F46(v39, 4294967296, v40);
const v52 = new F46(4294967296, -53536, v40);
new F46(v52, -1956692059, v40);
new Int16Array(7);
new Int16Array(9);
Math.trunc(13);
const v64 = -13;
Math.random();
!-1956692059;
-1956692059 % v64;
let v69 = new Uint32Array(2);
v69 |= Uint32Array[8];
try {
} catch(e77) {
    v52.g = e77;
}
typeof v30 === "symbol";
try { new v31(); } catch (e) {}
v40.__proto__;
