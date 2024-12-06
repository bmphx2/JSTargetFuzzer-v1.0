const v3 = [268435440,3,268435440,-128];
const v4 = [v3,-128];
const v5 = [3,v4,3,v3,v3];
new Map();
function f8(a9, a10, a11) {
    const o22 = {
        "e": a9,
        __proto__: a11,
        "h": a10,
        o(a13, a14, a15) {
            const v17 = Symbol.toPrimitive;
            const o21 = {
                [v17]() {
                    let v19;
                    try { v19 = a9(); } catch (e) {}
                    v3[v19];
                    return a13;
                },
            };
            return a11;
        },
    };
    return o22;
}
const v23 = f8(v4, v4, v5);
f8(3, v5, v4);
f8(v5, v4, v3);
function f26(a27, a28) {
    const o33 = {
        "g": a27,
        0: 268435440,
        __proto__: v3,
        get b() {
            return v5;
        },
        "e": a28,
        [v3]: v4,
        ...v23,
        "h": a27,
        "b": v4,
        "a": a28,
    };
    return o33;
}
f26(268435440, -128);
f26(3, 3);
f26(268435440, 268435440);
new WeakMap();
function f39() {
    return WeakMap;
}
new Int8Array(5);
new Function(190);
new Float32Array(127);
function f55(a56, a57) {
    const o78 = {
        get h() {
            this[803142468] = a56;
            try { a57(a57, a57); } catch (e) {}
            return 255;
        },
        __proto__: 255,
        [a57](a61, a62, a63, a64) {
            a62[5] = Int8Array;
            Math.acos(-1166009204);
            let v68 = v3 && -1166009204;
            const v69 = --v68;
            const v70 = a62--;
            Math.acos(v70);
            Math.log2(v69);
            v70 * -1166009204;
            return a63;
        },
        m(a75) {
            this[a75] *= 803142468;
            [] = 39946;
            const v76 = super.a;
            let v77;
            try { v77 = new v76(v76, a75, a75, 190); } catch (e) {}
            v77[2147483648] = v77;
            return a75;
        },
    };
    return o78;
}
const v79 = f55(39946, 803142468);
f55(255, 803142468);
f55(255, 803142468);
const v87 = new BigUint64Array(16);
const v90 = new Float32Array(3007);
const v93 = new Float32Array(3);
Object.defineProperty(v87, "byteOffset", { configurable: true, value: v93 });
v90[v93];
let v95 = v90[2936874794];
v79.g = -1024;
let v98 = --v95;
const v99 = v79 | v98;
const v100 = v79 ** v95;
!v99;
Math.clz32(v100);
--v98;
~v100;
