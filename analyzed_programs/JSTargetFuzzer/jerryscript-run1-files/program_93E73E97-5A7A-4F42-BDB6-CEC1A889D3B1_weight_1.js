function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 0;
    this.f = 0;
    this.e = 0;
}
new F0();
new F0();
new F0();
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
                "defineProperty": f14,
                "get": f14,
                "getOwnPropertyDescriptor": f14,
                "ownKeys": f14,
                "set": f14,
                "setPrototypeOf": f14,
            };
            new Proxy(v19, o21);
            try { v13.delete(a18); } catch (e) {}
            for (let v25 = 0; v25 < 32; v25++) {
                a15["p" + v25] = v25;
            }
        },
        "e": WeakSet,
        "g": v13,
    };
    return v13;
}
const v29 = f14(v13, v13);
let v31 = f14(f14(v29, f14), WeakSet);
const v34 = new Uint8Array(1);
new BigUint64Array(2, 362561360);
new Uint32Array(215);
const v41 = [-0.0,-62005.4832069563,-796.7184022897094,1.7976931348623157e+308,-1.0,5.0,471507.71410557977];
const v42 = [-3.0,22175.46802635526,-1000000.0,-1e-15,-1000000.0,842.1164031164237,3.0,710202.0348831015,-8.0195554739415e+307,-3.0];
let v43 = [1.7976931348623157e+308];
function f44() {
    return v41;
}
new Uint32Array();
let v49 = 255;
const v50 = [-1.7976931348623157e+308,NaN,4.0,-3.0,0.7202116682743733,0.10722414533286673];
const v51 = [-1e-15,0.786904425348982,1000000000.0];
const v52 = [-1000.0,-Infinity,-3.0];
v49 = 582866721;
v51[v50];
const v54 = v42[9];
v43 = v51;
const v57 = typeof v54 === "object";
function* f59(a60, a61) {
    new f44();
    yield* v43;
    return v50;
}
const v63 = f59(v50, v49);
v34.buffer = v54;
v31 -= v29;
let [,v65,v66] = v63;
new Float64Array(255);
new BigUint64Array(14);
new Int8Array(255);
const v77 = [8,0,4294967297,-33048,6,1000,983207413];
try { v52["splice"](...v77, ...v63, ...v57, ...v52, v49); } catch (e) {}
("object")[2617003312];
~f59;
const v85 = [8];
[-13,-465622521,22703];
let v88 = "number";
-2.2250738585072014e-308 ^ 674250.9577052628;
const v94 = (a95, a96) => {
    const v97 = v63.length;
    const v98 = (a99, a100, a101, a102) => {
        a100[v77] = a99 << 5.286615760405383e+307;
        return v97;
    };
    v88 = v88;
    return 570009.5976097113;
};
570009.5976097113 / "function";
v88 ^ 570009.5976097113;
v85["forEach"](v94, "forEach");
