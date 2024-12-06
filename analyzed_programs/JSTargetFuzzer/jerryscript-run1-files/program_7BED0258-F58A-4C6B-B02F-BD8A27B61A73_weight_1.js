function f1() {
    const o4 = {
        m() {
            let v2 = this;
            v2 -= v2;
            return v2 & v2;
        },
        8: undefined,
        "f": undefined,
        ...undefined,
        [-2]: undefined,
        "a": undefined,
    };
    return o4;
}
f1();
f1();
const v7 = f1();
const o8 = {
    "apply": f1,
    "construct": f1,
    "defineProperty": f1,
    "deleteProperty": f1,
    "get": f1,
    "getOwnPropertyDescriptor": f1,
    "isExtensible": f1,
    "ownKeys": f1,
    "set": f1,
};
new Proxy(v7, o8);
new Uint8ClampedArray(10);
new Int16Array(2);
new Int8Array(1000);
NaN[0.8547456207752734] >>= 41447;
let v27 = -41990;
let v28 = --v27;
--v28;
const v32 = new Array(255);
function F33(a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
}
new F33();
function F38() {
    if (!new.target) { throw 'must be called with new'; }
}
const v40 = new F38();
for (let i = 0; i < 5; i++) {
    Object.defineProperty(v40, 220, { writable: true, enumerable: true, value: -256 });
}
class C45 {
    constructor(a47, a48, a49) {
        for (let i51 = -153469.3697832625; i51 < 2; i51++) {
        }
    }
}
new C45(0.8547456207752734, v32, 0.8547456207752734);
const v62 = new C45(NaN, 255, NaN);
new C45(-153469.3697832625, v62, -153469.3697832625);
new Uint8Array(8);
v40[4096] = v40;
const v71 = new Set([5.0]);
v71.values();
new Uint8Array(324);
new Uint8ClampedArray(13);
new Uint8Array(2);
let v81 = Float32Array;
const v82 = new v81(127);
new Int32Array(243);
new WeakSet();
new Float64Array(127);
const t70 = Symbol.match;
t70[65535] >>= 41447;
new F38();
const v97 = new Int16Array(Int16Array, Int16Array);
function f98(a99, a100, a101, a102) {
    'use strict';
    a100[1996966583] = v97;
    return a102;
}
new BigInt64Array(3886);
new Uint32Array(0);
v81 += v81;
let v109;
try { v109 = WeakSet(v82); } catch (e) {}
const v111 = [v109];
Reflect.apply(v82.sort, v82, v111);
try { v81.flat(); } catch (e) {}
[498897049];
[-57150070,-2147483647,-11,-19440739,257,-65536,5,-1371366486,-5,-4294967296];
[-9007199254740990,-530113451,4,-14,-45856,2];
