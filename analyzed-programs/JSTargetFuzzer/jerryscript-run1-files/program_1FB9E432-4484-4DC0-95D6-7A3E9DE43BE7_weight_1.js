const v5 = new Uint8ClampedArray(102);
new Uint16Array(4085);
new Uint32Array(186);
new Int16Array(255);
let v17 = new Uint8Array(5);
new Uint8ClampedArray(257);
function f21(a22, a23) {
    const o36 = {
        174: a22,
        "c": v17,
        65536: a22,
        "e": v17,
        set f(a25) {
            try { a25(Int16Array, a25, a25, this); } catch (e) {}
            new Uint8ClampedArray(2);
            new Uint16Array(341);
            new Int16Array(16);
        },
    };
    return o36;
}
const v37 = f21(5, 255);
const v38 = f21(255, 257);
f21(257, 255);
const v40 = new Uint8Array(257, 257, 255);
function f41(a42, a43, a44, a45) {
    'use strict';
    for (let i48 = 0, i49 = 10; i48 < i49;) {
    }
    return a44;
}
v17 = v40;
v37[4085] = 186;
const o55 = {
    "apply": f21,
    "call": f21,
    "construct": f21,
    "defineProperty": f21,
    "get": f21,
    "getOwnPropertyDescriptor": f21,
    "getPrototypeOf": f21,
    "has": f21,
    "isExtensible": f21,
    "ownKeys": f21,
    "preventExtensions": f21,
    "setPrototypeOf": f21,
};
new Proxy(v5, o55);
let v58;
try { v58 = v40.includes(v40); } catch (e) {}
Object.defineProperty(v38, 257, { enumerable: true, get: f21 });
for (let v59 = 0; v59 < 32; v59++) {
    v17["p" + v59] = v59;
}
v17[3];
try { v58["p"](Int16Array); } catch (e) {}
