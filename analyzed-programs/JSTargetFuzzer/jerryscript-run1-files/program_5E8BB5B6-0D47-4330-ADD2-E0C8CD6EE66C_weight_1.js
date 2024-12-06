function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a5;
}
let v6;
try { v6 = F3.setUTCHours(1073741824n); } catch (e) {}
const o12 = {
    valueOf() {
        return 3;
    },
};
const o13 = {
    "h": F3,
    ...v6,
};
v6 = o13;
const v15 = new Uint16Array(3);
new Int8Array(248);
const v21 = new Uint32Array(3);
const v22 = new F3(F3);
new F3(26519n);
new F3(-53685n);
new WeakMap();
const v29 = new BigInt64Array(512);
const v32 = new Int32Array(14);
new Int32Array(255);
new Int16Array(255);
const v41 = new Uint8Array(5);
new Uint8ClampedArray(257);
function f45(a46, a47) {
    const o64 = {
        "a": -53685n,
        "b": v15,
        "c": v32,
        __proto__: v15,
        [26519n]: WeakMap,
        174: a46,
        "c": v41,
        65536: a46,
        "e": v41,
        set f(a49) {
            try { a49(Int16Array, a49, a49, this); } catch (e) {}
            v22.length = 1;
            v21.h = 1073741824n;
            new Uint8ClampedArray(2);
            new Uint16Array(341);
            new Int16Array(16);
        },
    };
    return o64;
}
f45(5, 255);
const v66 = f45(255, 257);
f45(257, 255);
const v68 = new Uint8Array(257, 257, 255);
let v69;
try { v69 = v68.includes(v68); } catch (e) {}
const o70 = {
    "apply": f45,
    "call": f45,
    "construct": f45,
    "defineProperty": f45,
    "getPrototypeOf": f45,
    "has": f45,
    "isExtensible": f45,
    "ownKeys": f45,
    "set": f45,
    "setPrototypeOf": f45,
};
new Proxy(v29, o70);
Object.defineProperty(v66, 257, { enumerable: true, get: f45 });
for (let v73 = 0; v73 < 32; v73++) {
    v41["p" + v73] = v73;
}
v41[3];
try { v69["p"](Int16Array); } catch (e) {}
v66.e = 1073741824n;
f45(v6, F3);
let v81 = 1889996820;
Math.exp(v15);
let v84 = 0.13690708424858988 ** v81;
Math.expm1(v81);
v81--;
v84++;
Math.random();
