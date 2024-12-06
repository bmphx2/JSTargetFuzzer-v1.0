function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 8;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v5;
}
const v10 = new F0(v4, v3);
new F6(F6, v3);
new F6(F6, v3);
new WeakSet();
new Uint8ClampedArray(257);
new BigInt64Array(1176);
new BigUint64Array(8);
const v25 = new WeakSet();
function f26(a27, a28) {
    const o40 = {
        "f": v25,
        set b(a30) {
            let v31;
            try { v31 = a27(f26, a28, f26); } catch (e) {}
            const o33 = {
                "apply": f26,
                "construct": f26,
                "defineProperty": f26,
                "get": f26,
                "getOwnPropertyDescriptor": f26,
                "ownKeys": f26,
                "set": f26,
                "setPrototypeOf": f26,
            };
            new Proxy(v31, o33);
            try { v10.delete(a30); } catch (e) {}
            for (let v37 = 0; v37 < 32; v37++) {
                a27["p" + v37] = v37;
            }
        },
        "e": WeakSet,
        "g": v25,
    };
    return v25;
}
const v41 = f26(v25, v25);
let v43 = f26(f26(v41, f26), WeakSet);
const v46 = new Uint8Array(1);
new BigUint64Array(2);
new Uint32Array(215);
[-0.0,-62005.4832069563,-796.7184022897094,1.7976931348623157e+308,-1.0,5.0,471507.71410557977];
const v54 = [-3.0,22175.46802635526,-1000000.0,-1e-15,-1000000.0,842.1164031164237,3.0,710202.0348831015,-8.0195554739415e+307,-3.0];
let v55 = [1.7976931348623157e+308];
function f56() {
    return 1;
}
const v58 = new WeakMap();
let v61 = -10;
const v62 = [-1.7976931348623157e+308,NaN,4.0,-3.0,0.7202116682743733,0.10722414533286673];
const v63 = [-1e-15,0.786904425348982,1000000000.0];
const v64 = [-1000.0,-Infinity,-3.0];
v61 = 582866721;
v63[v62];
const v66 = v54[9];
v55 = v63;
const v69 = typeof v66 === "object";
function* f71(a72, a73) {
    new f56();
    yield* v55;
    return v62;
}
const v75 = f71(v62, v61);
v46.buffer = v58;
v43 -= v41;
let [,v77,v78] = v75;
new Float64Array(255);
const v84 = new BigUint64Array(14);
new Int8Array(255);
const v89 = [8,0,4294967297,-33048,6,1000,983207413];
try { v64["splice"](...v89, ...v75, ...v69, ...v64, v61); } catch (e) {}
("object")[2617003312];
~f71;
const v97 = [8];
[-13,-465622521,22703];
let v100 = "number";
-2.2250738585072014e-308 ^ 674250.9577052628;
const v106 = (a107, a108) => {
    const v109 = v84.length;
    const v110 = (a111, a112, a113, a114) => {
        a112[v89] = a111 << 5.286615760405383e+307;
        return v109;
    };
    v100 = v100;
    return 570009.5976097113;
};
570009.5976097113 / "function";
v100 ^ 570009.5976097113;
v97["forEach"](v106, "forEach");
