function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 2;
    this.b = 2;
    this.d = 2;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [1765867663,7,10991,14,268435441,1024,4,-2147483647,47089,-1840687493];
const v7 = [-62601,-9223372036854775807,2147483647,2147483648,536870887,-2147483648,-975566329];
const v8 = [1359506922,-7,-4294967297,9007199254740990,-14,-6887,-53652];
function f9(a10, a11, a12, a13) {
    const o14 = {
        "a": v4,
        "c": a12,
        __proto__: a13,
        [a12]: a11,
        "g": v4,
        3: v4,
        9: v7,
        "d": v4,
        "f": v3,
        [v6]: v4,
        "b": a13,
        ...a13,
        [a13]: v5,
    };
    return o14;
}
const v15 = f9(v8, v7, v3, v6);
f9(v8, v4, v4, v7);
f9(v7, v4, v15, v6);
const v22 = new WeakSet();
function f23(a24, a25) {
    const o37 = {
        "f": v22,
        set b(a27) {
            let v28;
            try { v28 = a24(f23, a25, f23); } catch (e) {}
            const o30 = {
                "apply": f23,
                "construct": f23,
                "defineProperty": f23,
                "get": f23,
                "getOwnPropertyDescriptor": f23,
                "ownKeys": f23,
                "set": f23,
                "setPrototypeOf": f23,
            };
            new Proxy(v28, o30);
            try { v22.delete(a27); } catch (e) {}
            for (let v34 = 0; v34 < 32; v34++) {
                a24["p" + v34] = v34;
            }
        },
        "e": WeakSet,
        "g": v22,
    };
    return v22;
}
const v38 = f23(v22, v22);
let v40 = f23(f23(v38, f23), WeakSet);
const v43 = new Uint8Array(1);
new BigUint64Array(2);
new Uint32Array(215);
const v50 = [-0.0,-62005.4832069563,-796.7184022897094,1.7976931348623157e+308,-1.0,5.0,471507.71410557977];
const v51 = [-3.0,22175.46802635526,-1000000.0,-1e-15,-1000000.0,842.1164031164237,3.0,710202.0348831015,-8.0195554739415e+307,-3.0];
let v52 = [1.7976931348623157e+308];
function f53() {
    return v50;
}
new WeakMap();
let v58 = -10;
const v59 = [-1.7976931348623157e+308,NaN,4.0,-3.0,0.7202116682743733,0.10722414533286673];
const v60 = [-1e-15,0.786904425348982,1000000000.0];
const v61 = [-1000.0,-Infinity,-3.0];
v58 = 582866721;
v60[v59];
const v63 = v51[9];
v52 = v60;
const v66 = typeof v63 === "object";
function* f68(a69, a70) {
    new f53();
    yield* v52;
    return v59;
}
const v72 = f68(v59, v58);
v43.buffer = v63;
v40 -= v38;
let [,v74,v75] = v72;
new Float64Array(255);
new BigUint64Array(14);
new Int8Array(255);
const v85 = [-22965,14,-65535,4294967296,-4294967295,26499];
class C86 {
    constructor(a88, a89) {
        a88[65537] /= a89;
    }
}
new C86(v85);
const v92 = new BigUint64Array();
v85["reverse"]();
v92 instanceof BigUint64Array;
const v97 = [8,0,4294967297,-33048,6,1000,983207413];
try { v61["splice"](...v97, ...v72, ...v66, ...v61, v58); } catch (e) {}
("object")[2617003312];
~f68;
const v105 = [8];
[-13,-465622521,22703];
let v108 = "number";
-2.2250738585072014e-308 ^ 674250.9577052628;
const v114 = (a115, a116) => {
    const v117 = v72.length;
    const v118 = (a119, a120, a121, a122) => {
        a120[v97] = a119 << 5.286615760405383e+307;
        return v117;
    };
    v108 = v108;
    return 570009.5976097113;
};
570009.5976097113 / "function";
v108 ^ 570009.5976097113;
v105["forEach"](v114, "forEach");
