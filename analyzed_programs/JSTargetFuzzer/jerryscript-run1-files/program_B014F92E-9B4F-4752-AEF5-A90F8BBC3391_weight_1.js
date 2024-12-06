function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 257;
    this.g = 257;
    this.b = 257;
}
const v3 = new F0();
new F0();
const v5 = new F0();
new Date();
function f8() {
    return Date;
}
class C12 {
    constructor(a14, a15) {
        delete this[128];
        const o17 = {
            "apply": v3,
            "call": f8,
            "construct": f8,
            "defineProperty": Date,
            "deleteProperty": f8,
            "get": Date,
            "getPrototypeOf": f8,
            "has": f8,
            "isExtensible": f8,
            "ownKeys": f8,
            "preventExtensions": f8,
            "set": f8,
            "setPrototypeOf": Date,
        };
        new Proxy(v5, o17);
    }
}
new C12(-536870912, Date);
new C12(-536870912, v3);
new C12(2147483649, v5);
const v24 = [65536,224619833,48702,512,-13362];
const v25 = [-25747,1000];
const v26 = [536870887,512];
let [v30,,v31,v32] = v26;
let v33;
try { v33 = v25.copyWithin(-729392091, v31, v32); } catch (e) {}
v25[536870912];
v26[Symbol.isConcatSpreadable] = v33;
[-2.0];
[0.25700922409545623,3.8577335087449764,-723.7018803669298,-8.192164294353453e+307,1000000.0,-2.0];
let v39 = [6.537232253003836,-7.008978293251181,1000000000.0];
[-4.0,1.13130484138335e+307,0.7908310191761215];
const v44 = [2.220446049250313e-16,-6.01442628163616,-1.7976931348623157e+308];
[3.0,-4.0,1e-15,-517621.16907810164,NaN];
function f46() {
}
[9.529192887103498,-5.0,-680123.9779744686,1e-15,81.69963431340238,6.059006012608875e+307,0.824015933544211,-870.8828045491306,-4.569904480596199e+307];
const v48 = [-6.4610972807674205,347.6705586854091,-406.66521858332374,335300.5402220483,-1000000000000.0,-9.793550296727327];
[0.4957027016418917,1.4169040519612537,2.0,2.0,-8.50164741928448,604325.9908552598,5.0,0.0,206.06051757079854];
v26[302854163] = v44;
v39 -= v24;
let v59 = -1678764256;
let v61 = 9007199254740990;
const v69 = 10 ** ++v59;
Math.atanh(v69);
v69 - 10;
+-63670;
new C12(255);
const v76 = new Uint8Array(5);
new Uint8ClampedArray(257);
function f80(a81, a82) {
    const o96 = {
        ...a82,
        ["yk4P"]: v48,
        1053877365: f46,
        get g() {
            this.__proto__ = a81;
            return -25252;
        },
        [a82]: a81,
        174: a81,
        "c": v76,
        65536: a82,
        "e": a82,
        set f(a85) {
            try { a85(Int16Array, a85, a85, this); } catch (e) {}
            new Uint8ClampedArray(Uint8ClampedArray);
            new Uint16Array(341);
            new Int16Array(16);
        },
    };
    return o96;
}
f80(5, 255);
const v98 = f80(255, 257);
const v99 = f80(257, v98);
const v100 = new Uint8Array(257, 257, 255);
const v101 = `
    v61 /= 257;
    const v104 = new Date();
    const v106 = [Date,Date,Date,Date];
    for (const v109 of Reflect.apply(v104.toUTCString, v104)) {
        v109.__proto__ = v106;
    }
    function F111() {
        if (!new.target) { throw 'must be called with new'; }
        this.e = 1024;
        this.a = 1024;
    }
`;
eval(v101);
class C117 {
    static [v69] = f46;
    f = "4";
}
new C117();
new C117();
new C117();
let v121;
try { v121 = v100.includes(v100); } catch (e) {}
Object.defineProperty(v98, 257, { enumerable: true, get: f80 });
for (let v122 = 0; v122 < 32; v122++) {
    v76["p" + v122] = v122;
}
v76[3];
try { v121[v99](Int16Array); } catch (e) {}
