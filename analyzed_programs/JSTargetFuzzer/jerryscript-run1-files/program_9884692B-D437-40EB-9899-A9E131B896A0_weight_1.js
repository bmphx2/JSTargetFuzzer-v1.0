function f6(a7, a8, a9, a10) {
    const o11 = {
        [a9]: 10n,
        "b": 10n,
        "h": a10,
        86: 268435439,
        1073741825: a8,
        "a": a10,
        ...a10,
        __proto__: a10,
        "d": 10n,
        "g": 8516,
        ...a10,
        [a10]: 268435439,
        "e": 8516,
        "c": a10,
    };
    return o11;
}
const v12 = f6(1, -2147483649n, 8516, 8516);
const v13 = f6(268435439, -2147483649n, v12, 8516);
f6(268435439, -2147483649n, 56707n, v13);
class C15 extends f6 {
    p(a17, a18, a19) {
        Object.defineProperty(v13, "h", { configurable: true, get: f6, set: f6 });
        return this;
    }
    o(a21, a22, a23) {
        Object.defineProperty(v12, a23, { enumerable: true, set: f6 });
        new Float32Array(5);
        new Uint8ClampedArray(1000);
        new Uint16Array(7);
        return 7;
    }
}
new C15();
new C15();
new C15();
let v36 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v37 = [6,17590];
[-658853788,-256];
let v43 = BigUint64Array;
const v44 = new v43(12);
const v47 = new Uint32Array(v37);
new Uint8Array(16);
let v52;
try { v52 = v36(-4294967295); } catch (e) {}
({"buffer":v36,"d":v43,"g":v52,...v52} = v44);
const o53 = {
};
new Proxy(v47, o53);
const v59 = Symbol.toPrimitive;
const o63 = {
    [v59]() {
        try {
            super.getUint16();
        } catch(e62) {
        }
        return this;
    },
};
function F70(a72, a73, a74, a75) {
    if (!new.target) { throw 'must be called with new'; }
    a74.d = a75;
    this.f = a72;
}
const v76 = new F70(-4294967296, 5n, "-16", "-16");
new F70(-1, -7n, "-16", "global");
const v78 = new F70(-4294967296, 5n, "global", "global");
"-16" == v78;
if (-1) {
} else {
    function F83(a85, a86, a87) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a87;
    }
    const v88 = new F83(F83, v76, "function");
    const t77 = -1;
    new t77(v88, "global", "function");
    new F83(v88, "global", "function");
}
