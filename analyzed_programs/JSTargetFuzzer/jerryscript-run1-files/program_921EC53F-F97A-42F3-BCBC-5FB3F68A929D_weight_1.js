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
let v30 = 0n;
function F31(a33, a34, a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
    v30 /= 2n;
}
const v37 = f14(v13, v13);
let v39 = f14(f14(v37, f14), WeakSet);
const v42 = new Uint8Array(1);
new BigUint64Array(2);
new Uint32Array(215);
const v49 = [-0.0,-62005.4832069563,-796.7184022897094,1.7976931348623157e+308,-1.0,5.0,471507.71410557977];
const v50 = [-3.0,22175.46802635526,-1000000.0,-1e-15,-1000000.0,842.1164031164237,3.0,710202.0348831015,-8.0195554739415e+307,-3.0];
let v51 = [1.7976931348623157e+308];
function f52() {
    return v49;
}
new WeakMap();
let v57 = -10;
const v58 = [-1.7976931348623157e+308,NaN,4.0,-3.0,0.7202116682743733,0.10722414533286673];
const v59 = [-1e-15,0.786904425348982,1000000000.0];
const v60 = [-1000.0,-Infinity,-3.0];
v57 = 582866721;
v59[v58];
const v62 = v50[9];
v51 = v59;
const v65 = typeof v62 === "object";
function* f67(a68, a69) {
    new f52();
    yield* v51;
    return v58;
}
const v71 = f67(v58, v57);
v42.buffer = v62;
v39 -= v37;
let [,v73,v74] = v71;
new Set([5.0,-Infinity,0.45285535896993423,-1.4180257666535735e+308,0.9733557260586729,0.41911273078751055,NaN]);
function F80(a82, a83) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a83;
}
new Float64Array(255);
new BigUint64Array(14);
new Int8Array(255);
const v92 = [8,0,4294967297,-33048,6,1000,983207413];
try { v60["splice"](...v92, ...v71, ...v65, ...v60, v57); } catch (e) {}
("object")[2617003312];
~f67;
const v100 = [8];
[-13,-465622521,22703];
let v103 = "number";
-2.2250738585072014e-308 ^ 674250.9577052628;
const v109 = (a110, a111) => {
    const v112 = v71.length;
    const v113 = (a114, a115, a116, a117) => {
        a115[v92] = a114 << 5.286615760405383e+307;
        return v112;
    };
    v103 = v103;
    return 570009.5976097113;
};
570009.5976097113 / "function";
v103 ^ 570009.5976097113;
v100["forEach"](v109, "forEach");
