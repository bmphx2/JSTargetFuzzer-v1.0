new WeakMap();
function f2() {
    return WeakMap;
}
new Int8Array(5);
new Function(190);
new Float32Array(127);
function f18(a19, a20) {
    const o27 = {
        get h() {
            this[803142468] = a19;
            try { a20(a20, a20); } catch (e) {}
            return 255;
        },
        __proto__: 255,
        m(a24) {
            this[a24] *= 803142468;
            [] = 39946;
            const v25 = super.a;
            let v26;
            try { v26 = new v25(v25, a24, a24, 190); } catch (e) {}
            v26[2147483648] = v26;
            return a24;
        },
    };
    return o27;
}
const v28 = f18(39946, 803142468);
f18(255, 803142468);
f18(255, 803142468);
const v36 = new BigUint64Array(16);
const v39 = new Float32Array(3007);
const v42 = new Float32Array(3);
Object.defineProperty(v36, "byteOffset", { configurable: true, value: v42 });
v39[v42];
let v44 = v39[2936874794];
v28.g = -1024;
let v47 = --v44;
const v48 = v28 | v47;
const v49 = v28 ** v44;
!v48;
Math.clz32(v49);
--v47;
~v49;
