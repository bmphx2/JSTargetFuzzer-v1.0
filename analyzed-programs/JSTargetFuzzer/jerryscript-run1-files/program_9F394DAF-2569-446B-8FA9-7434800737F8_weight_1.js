function F0() {
    if (!new.target) { throw 'must be called with new'; }
    F0 & F0;
    for (let v5 = 0; v5 < 32; v5++) {
        arguments["p" + v5] = v5;
    }
    this.a = 3;
}
new F0();
new F0();
const v10 = new F0();
function f11() {
    return v10;
}
new Float32Array(24);
new Uint16Array(7);
new Int32Array(128);
function F21() {
    if (!new.target) { throw 'must be called with new'; }
    F21.c = -4294967297;
}
const v24 = new F21();
const v25 = new F21();
new F21();
function f28() {
    const v31 = new Uint32Array(858);
    return v31;
}
function f34() {
    return v24;
}
const v37 = new BigUint64Array(BigUint64Array, BigUint64Array);
v37.copyWithin();
const v41 = RegExp.bind(2);
Math.fround();
Math.min(0.2148301603058278);
let v47 = 1073741824n;
v47 &= v47;
try { Float32Array(); } catch (e) {}
(-12n).toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
class C61 {
}
const v63 = new v41(1);
const v66 = new Int8Array(107);
for (let i69 = 0, i70 = 10; i69 < i70;) {
    v66[v63] = i69;
    ++i69;
    Math.max(-7);
}
new Int16Array(26);
const v83 = [4,7,4294967297,-1,1000];
function f84() {
    const o97 = {
        __proto__: "-536870912",
        "d": "-536870912",
        "g": "-536870912",
        ..."-536870912",
        "c": 1.7976931348623157e+308,
        9: -24152,
        "h": -24152,
        get f() {
            this[7] = -24152;
            let v89;
            try { v89 = this.n(); } catch (e) {}
            let [v90,v91] = v89;
            Int8Array(3);
            Int8Array(8);
            return f84;
        },
    };
    return o97;
}
f84();
f84();
const o100 = {
    "call": f84,
    "construct": f84,
    "defineProperty": f84,
    "get": f84,
    "getOwnPropertyDescriptor": f84,
    "has": f84,
    "isExtensible": f84,
    "set": f84,
    "setPrototypeOf": f84,
};
4 == v83;
const v103 = new Int8Array(Int8Array, Int8Array, Int8Array);
v103.includes(v103, v103);
new Uint8ClampedArray(6);
new Uint32Array();
function f113(a114, a115) {
    a115.b = a114;
    Object.defineProperty("copyWithin", "h", { writable: true, get: f34 });
    const t95 = "copyWithin";
    t95[Symbol.match] = v25;
    v25["copyWithin"](a115, 34405, 6);
    return 6;
}
try {
    new WeakSet(4087n);
} catch(e124) {
} finally {
}
