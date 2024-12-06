const v10 = new WeakMap();
function f14() {
}
let v15 = 0;
do {
    f14();
    const o17 = {
        "apply": f14,
        "call": f14,
        "construct": f14,
        "defineProperty": f14,
        "deleteProperty": f14,
        "get": f14,
        "getOwnPropertyDescriptor": f14,
        "getPrototypeOf": f14,
        "has": f14,
        "ownKeys": f14,
        "preventExtensions": f14,
        "set": f14,
        "setPrototypeOf": f14,
    };
    new Proxy(v10, o17);
    v15++;
} while (v15 < 9)
[9.529192887103498,-5.0,-680123.9779744686,1e-15,81.69963431340238,6.059006012608875e+307,0.824015933544211,-870.8828045491306,-4.569904480596199e+307];
const v24 = [-6.4610972807674205,347.6705586854091,-406.66521858332374,335300.5402220483,-1000000000000.0,-9.793550296727327];
[0.4957027016418917,1.4169040519612537,2.0,2.0,-8.50164741928448,604325.9908552598,5.0,0.0,206.06051757079854];
let v34 = 9007199254740990;
new Int16Array(255);
const v40 = new Uint8Array(5);
new Uint8ClampedArray(257);
function f44(a45, a46) {
    const o59 = {
        ...v24,
        ["yk4P"]: v24,
        1053877365: f14,
        174: a45,
        "c": v40,
        65536: a46,
        "e": a46,
        set f(a48) {
            try { a48(Int16Array, a48, a48, this); } catch (e) {}
            new Uint8ClampedArray(Uint8ClampedArray);
            new Uint16Array(341);
            new Int16Array(16);
        },
    };
    return o59;
}
f44(5, 255);
const v61 = f44(255, 257);
const v62 = f44(257, v61);
const v63 = new Uint8Array(257, 257, 255);
const v64 = `
    v34 /= 257;
    const v67 = new Date();
    const v69 = [Date,Date,Date,Date];
    for (const v72 of Reflect.apply(v67.toUTCString, v67)) {
        v72.__proto__ = v69;
    }
    function F74() {
        if (!new.target) { throw 'must be called with new'; }
        this.e = 1024;
        this.a = 1024;
    }
`;
eval(v64);
let v80;
try { v80 = v63.includes(v63); } catch (e) {}
Object.defineProperty(v61, 257, { enumerable: true, get: f44 });
for (let v81 = 0; v81 < 32; v81++) {
    v40["p" + v81] = v81;
}
v40[3];
try { v80[v62](Int16Array); } catch (e) {}
