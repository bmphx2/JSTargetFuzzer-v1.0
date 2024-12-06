function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 64;
    this.b = 64;
    this.d = 64;
}
new F0();
new F0();
new F0();
new Float32Array(3619);
new Uint16Array(5);
new Uint32Array(2);
new Uint8Array(109);
new Int8Array(2855);
new Float64Array(3);
function f24() {
}
[9.529192887103498,-5.0,-680123.9779744686,1e-15,81.69963431340238,6.059006012608875e+307,0.824015933544211,-870.8828045491306,-4.569904480596199e+307];
const v26 = [-6.4610972807674205,347.6705586854091,-406.66521858332374,335300.5402220483,-1000000000000.0,-9.793550296727327];
[0.4957027016418917,1.4169040519612537,2.0,2.0,-8.50164741928448,604325.9908552598,5.0,0.0,206.06051757079854];
let v36 = 9007199254740990;
new Int16Array(255);
const v42 = new Uint8Array(5);
new Uint8ClampedArray(257);
function f46(a47, a48) {
    const o68 = {
        ...v26,
        ["yk4P"]: v26,
        1053877365: f24,
        174: a47,
        "c": v42,
        65536: a48,
        "e": a48,
        set f(a50) {
            try { a50(Int16Array, a50, a50, this); } catch (e) {}
            const v55 = [];
            Reflect.apply(("-11").trim, this, v55);
            [-378081.5172165894,-4.0,0.8234063152917426,-267131.2640796646,-786645.3399637379];
            [-477.6592477890174,585680.8633668763,600767.6599871241,-1000000000.0,0.3723968362010528,1000000000000.0,-1.7730861156187094e+308,4.0,-Infinity];
            [-3.0,0.3814658138199498,-0.6571329520187312,0.18762023905715852,1e-15,1e-15,-5.848021375659382e+307,647.4805911151595,0.3345683316045013,-Infinity];
            new Uint8ClampedArray(Uint8ClampedArray);
            new Uint16Array(341);
            new Int16Array(16);
        },
    };
    return o68;
}
f46(5, 255);
const v70 = f46(255, 257);
const v71 = f46(257, v70);
const v72 = new Uint8Array(257, 257, 255);
const v73 = `
    v36 /= 257;
    const v76 = new Date();
    const v78 = [Date,Date,Date,Date];
    for (const v81 of Reflect.apply(v76.toUTCString, v76)) {
        v81.__proto__ = v78;
        const o82 = {
            "apply": Date,
            "call": f46,
            "construct": f46,
            "defineProperty": f46,
            "deleteProperty": f46,
            "get": f24,
            "has": Date,
            "isExtensible": Date,
            "preventExtensions": f46,
            "setPrototypeOf": Date,
        };
        new Proxy(v26, o82);
    }
    const o88 = {
        "maxByteLength": 3764,
    };
    const v90 = new ArrayBuffer(5, o88);
    new Uint8ClampedArray(v90);
    function F93() {
        if (!new.target) { throw 'must be called with new'; }
        this.e = 1024;
        this.a = 1024;
    }
`;
eval(v73);
let v99;
try { v99 = v72.includes(v72); } catch (e) {}
Object.defineProperty(v70, 257, { enumerable: true, get: f46 });
for (let v100 = 0; v100 < 32; v100++) {
    v42["p" + v100] = v100;
}
v42[3];
try { v99[v71](Int16Array); } catch (e) {}
