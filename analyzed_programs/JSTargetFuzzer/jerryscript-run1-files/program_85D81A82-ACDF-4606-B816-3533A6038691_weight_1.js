function f0() {
    const o16 = {
        __proto__: 9007199254740990,
        "h": 9007199254740990,
        "b": 9007199254740990,
        [2.0](a5, a6) {
            a6[-1] = 2.0;
            const o7 = {
            };
            o7[2] = this;
            const o12 = {
                "call": f0,
                "get": f0,
                "getOwnPropertyDescriptor": f0,
                "getPrototypeOf": f0,
                "setPrototypeOf": f0,
            };
            new Proxy(a5, o12);
            new Proxy(a6, o7);
            return o7;
        },
        "d": -11,
        1078: 2.0,
        "f": 9007199254740990,
    };
    return o16;
}
f0();
f0();
f0();
new Int16Array(12);
new Uint8ClampedArray(256);
new Uint16Array(10);
const v34 = new Uint32Array(181);
let v36 = BigUint64Array;
let v37 = new v36(1);
let v38 = 253;
[v38,,v36,v37] = v34;
try { v36["abs"](181, v38, v36); } catch (e) {}
new Uint16Array(v38);
for (let i51 = 0; i51 < 2; i51++) {
    const v57 = new Function("x");
    v57.name;
}
Function();
