function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = f0;
}
const v3 = new F1();
new F1();
class C5 {
    static o(a7, a8, a9) {
        return eval;
    }
}
const v11 = new F1();
function f12(a13) {
    const o21 = {
        "c": f0,
        "f": F1,
        "g": a13,
        o(a15, a16, a17, a18) {
            super.d = a13;
            const v19 = a18 * a15;
            let v20;
            try { v20 = new F1(a13, f0, ...F1, v19, a18); } catch (e) {}
            return v20;
        },
        "d": F1,
        "e": v3,
        9: v11,
        [-2]: a13,
    };
    return o21;
}
f12(v3);
f12(f0);
f12(F1);
try { JSON.parse("trim"); } catch (e) {}
const v29 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o30 = {
};
new Proxy(v29, o30);
new BigInt64Array(3231);
new BigInt64Array(F1);
new Uint8Array(0);
[NaN];
[-1e-15,-2.0,0.737465722832199,-1000000.0,-493.92830781524833,-0.0,-1000000000.0,4.0,0.17156768457194693,-662.3994463876222];
[-Infinity,2.175972701968868e+307,1e-15,-704.7844756200124,-4.0,-2.0,-1.7976931348623157e+308];
new Int32Array(64);
new Int32Array(1024);
new Int16Array(1000);
const v54 = [129];
const v55 = [0,-2,-646376397,1855814374,-2,-8,-29428,-3];
[-1194622953,-65536,4294967297,-65535,-112499346,512,9007199254740991,268435440,-1940231846];
const v58 = Symbol.unscopables;
const o59 = {
};
const v61 = [-1073741824,1073741824,-566284451,9,44901,2147483649];
const v62 = [10000,-4096,1073741823,4294967297];
([-3.0,v62.push(v61, 1, v62),1,v61]).reverse();
v54[v58];
Math.hypot(17986);
const v73 = v55 || (42942 ** 42942);
Math.sin(17986);
+v73;
