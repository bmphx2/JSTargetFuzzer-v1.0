const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v0;
    this.h = v0;
    this.b = v0;
}
new F1();
const v4 = new F1();
new F1();
const v13 = new WeakSet();
function f14(a15, a16) {
    const o28 = {
        "f": v13,
        set b(a18) {
            let v19;
            try { v19 = a15(f14, a16, f14); } catch (e) {}
            const o21 = {
                "apply": f14,
                "construct": f14,
                "defineProperty": F1,
                "get": f14,
                "getOwnPropertyDescriptor": f14,
                "ownKeys": f14,
                "e": f14,
                "setPrototypeOf": v4,
            };
            new Proxy(v19, o21);
            try { v13.delete(a18); } catch (e) {}
            for (let v25 = 0; v25 < 32; v25++) {
                a15["p" + v25] = v25;
            }
        },
        "e": WeakSet,
        "description": v13,
    };
    return v13;
}
const v30 = f14(f14(v13, v13), f14);
let v31 = f14(v30, WeakSet);
const v34 = new Uint8Array(1);
new BigUint64Array(2);
new Uint32Array(215);
const v41 = [-0.0,-62005.4832069563,-796.7184022897094,1.7976931348623157e+308,-1.0,5.0,471507.71410557977];
const v42 = [-3.0,22175.46802635526,-1000000.0,-1e-15,-1000000.0,842.1164031164237,3.0,710202.0348831015,-8.0195554739415e+307,-3.0];
let v43 = [1.7976931348623157e+308];
function f44() {
    return v41;
}
new WeakMap();
function f49(a50, a51, a52, a53) {
    return a51;
}
let v54 = [-1000000.0,0.0,-1.1019751985107344e+308];
v54 &= v30;
let v55 = -10;
const v56 = [-1.7976931348623157e+308,NaN,4.0,-3.0,0.7202116682743733,0.10722414533286673];
const v57 = [0.8633811037607928,-5.0];
const v58 = [-1000.0,-Infinity,-3.0];
v55 = 582866721;
v57[v56];
const v60 = v42[9];
v43 = v57;
const v63 = typeof v60 === "object";
function* f65(a66, a67) {
    new f44();
    yield* v43;
    return v56;
}
const v69 = f65(v56, v55);
v34.buffer = v60;
v31 -= v57;
let [,v71,v72] = v69;
new Float64Array(255);
new BigUint64Array(14, BigUint64Array);
new Int8Array(1594);
const v83 = [8,0,4294967297,-33048,6,1000,983207413];
try { v58["splice"](...v83, ...v69, ...v63, ...v58, v55); } catch (e) {}
("object")[2617003312];
~f65;
const v91 = [8];
[-13,-465622521,22703];
let v94 = "number";
-2.2250738585072014e-308 ^ 674250.9577052628;
const v100 = (a101, a102) => {
    const v103 = v69.length;
    const v104 = (a105, a106, a107, a108) => {
        a106[v83] = a105 << 5.286615760405383e+307;
        return v103;
    };
    new BigInt64Array(8);
    const v113 = [1.0,-1000000000.0];
    try { v113.filter(); } catch (e) {}
    v94 = v94;
    return "VGTL";
};
570009.5976097113 / "function";
v94 ^ 570009.5976097113;
v91["forEach"](v100, "forEach");
