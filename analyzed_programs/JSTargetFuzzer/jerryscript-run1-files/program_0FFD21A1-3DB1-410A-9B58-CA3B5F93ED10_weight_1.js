function f3() {
    return -4n;
}
[2.0,1000000000000.0,NaN,3.6682869177568596e+307,0.5321905163301784,-1000000000.0,0.47491489929911423,0.9232081350292318];
const v8 = [2.2250738585072014e-308,1000000000000.0,-1e-15,-1000000000.0,-2.0];
[-1000.0,4.0,-4.0,-65.70016491938554,-4.0,-2.2250738585072014e-308,1e-15,0.06575893156262969,-1.0495931312265474e+307,-1000000000.0];
class C10 extends f3 {
    a;
    static o(a12, a13, a14, a15) {
        const o16 = {
            "call": f3,
            "construct": f3,
            "get": f3,
            "getPrototypeOf": f3,
            "isExtensible": f3,
            "ownKeys": f3,
            "set": f3,
        };
        const v18 = new Proxy(v8, o16);
        return v18;
    }
}
new C10();
new C10();
new C10();
function f22() {
}
[9.529192887103498,-5.0,-680123.9779744686,1e-15,81.69963431340238,6.059006012608875e+307,0.824015933544211,-870.8828045491306,-4.569904480596199e+307];
const v24 = [-6.4610972807674205,347.6705586854091,-406.66521858332374,335300.5402220483,-1000000000000.0,-9.793550296727327];
[0.4957027016418917,1.4169040519612537,2.0,2.0,-8.50164741928448,604325.9908552598,5.0,0.0,206.06051757079854];
let v34 = 9007199254740990;
new Int16Array(255);
const v40 = new Uint8Array(5);
new Uint8ClampedArray(257);
function f44(a45, a46) {
    const o63 = {
        ...v24,
        ["yk4P"]: v24,
        1053877365: f22,
        174: a45,
        toString(a48, a49, a50) {
            Object.defineProperty("4", "h", { configurable: true, get: f3, set: f44 });
            return a49;
        },
        2289: a45,
        "c": v40,
        65536: "-11",
        "e": -4n,
        set f(a52) {
            try { a52(Int16Array, a52, a52, this); } catch (e) {}
            new Uint8ClampedArray(a45);
            new Uint16Array(a45);
            new Int16Array(16);
        },
    };
    return o63;
}
f44(5, 255);
const v65 = f44(255, 257);
const v66 = f44(257, v65);
const v67 = new Uint8Array(257, 257, 255);
const v68 = `
    v34 /= 257;
    const v71 = new Date();
    const v73 = [Date,1n,Date,Date];
    if (4294967295 == 4294967295) {
    } else {
        f3[5] = f44;
    }
    for (const v80 of Reflect.apply(v71.toUTCString, v71)) {
        v80.__proto__ = v73;
    }
    function F82() {
        if (!new.target) { throw 'must be called with new'; }
        this.e = 1024;
        function f85(a86) {
            return F82;
        }
        class C87 extends f85 {
            static 2043;
            static [1024] = 1n;
        }
        this.a = 1024;
    }
`;
eval(v68);
let v91;
try { v91 = v67.includes(v67); } catch (e) {}
Object.defineProperty(v65, 257, { enumerable: true, get: f44 });
for (let v92 = 0; v92 < 32; v92++) {
    v40["p" + v92] = v92;
}
v40[3];
try { v91[v66](Int16Array); } catch (e) {}
