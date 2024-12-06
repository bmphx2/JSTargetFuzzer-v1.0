function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 2;
}
const v11 = new F6(12, 2147483648, 12);
new F6(3, F6, 2);
new F6(2, v11, 1);
const v15 = new WeakSet();
function f16(a17, a18) {
    const o30 = {
        "f": v15,
        set b(a20) {
            let v21;
            try { v21 = a17(f16, a18, f16); } catch (e) {}
            const o23 = {
                "apply": f16,
                "construct": f16,
                "defineProperty": f16,
                "get": f16,
                "getOwnPropertyDescriptor": f16,
                "ownKeys": f16,
                "set": f16,
                "setPrototypeOf": f16,
            };
            new Proxy(v21, o23);
            try { v15.delete(a20); } catch (e) {}
            for (let v27 = 0; v27 < 32; v27++) {
                a17["p" + a17] = v27;
            }
        },
        "e": WeakSet,
        "g": v15,
    };
    return v15;
}
const v31 = f16(v15, v15);
let v33 = f16(f16(v31, f16), WeakSet);
const v36 = new Uint8Array(1);
new BigUint64Array(2);
new Uint32Array(215);
const v43 = [-0.0,-62005.4832069563,-796.7184022897094,1.7976931348623157e+308,-1.0,5.0,471507.71410557977];
const v44 = [-3.0,22175.46802635526,-1000000.0,-1e-15,-1000000.0,842.1164031164237,3.0,710202.0348831015,-8.0195554739415e+307,-3.0];
let v45 = [1.7976931348623157e+308];
function f46() {
    return v43;
}
new WeakMap();
let v51 = -10;
const v52 = [-1.7976931348623157e+308,NaN,4.0,-3.0,0.7202116682743733,0.10722414533286673];
const v53 = [-1e-15,0.786904425348982,1000000000.0];
const v54 = [-1000.0,-Infinity,-3.0];
v51 = 582866721;
v53[v52];
const v56 = v44[9];
v45 = v53;
const v59 = typeof v56 === "object";
function* f61(a62, a63) {
    new f46();
    yield* v45;
    return v52;
}
const v65 = f61(v52, v51);
v36.buffer = v56;
v33 -= v31;
let [,v67,v68] = v65;
new Float64Array(255);
new BigUint64Array(14);
new Int8Array(255);
const v79 = [8,0,4294967297,-33048,6,1000,983207413];
try { v54["splice"](...v79, ...v65, ...v59, ...v54, v51); } catch (e) {}
("object")[2617003312];
~f61;
const v87 = [8];
[-13,-465622521,22703];
-2.2250738585072014e-308 ^ 674250.9577052628;
const v96 = (a97, a98) => {
    const v99 = v65.length;
    const v100 = (a101, a102, a103, a104) => {
        a102[v79] = a101 << 5.286615760405383e+307;
        return v99;
    };
    a98 = "number";
    return 570009.5976097113;
};
570009.5976097113 / "function";
"number" ^ 570009.5976097113;
v87["forEach"](v96, "forEach");
