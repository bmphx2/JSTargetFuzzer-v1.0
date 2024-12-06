function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -1754854982;
    this.h = -1754854982;
}
new F0();
new F0();
new F0();
new Float64Array(0);
new Float32Array(209);
new BigUint64Array(3618);
new WeakMap();
function f20() {
    return WeakMap;
}
new Int8Array(5);
new Function(190);
new Float32Array(127);
new Float32Array(209, 127, 5);
function f41(a42, a43) {
    const o50 = {
        get h() {
            this[803142468] = a42;
            try { a43(a43, a43); } catch (e) {}
            return 255;
        },
        __proto__: 255,
        m(a47) {
            this[a47] *= 803142468;
            [] = 39946;
            const v48 = super.a;
            let v49;
            try { v49 = new v48(v48, a47, a47, 190); } catch (e) {}
            v49[2147483648] = v49;
            return a47;
        },
    };
    return o50;
}
const v51 = f41(39946, 803142468);
f41(255, 803142468);
f41(255, 803142468);
const v59 = new BigUint64Array(16);
new Boolean(2);
const v65 = new Float32Array(3007);
const v68 = new Float32Array(3);
Object.defineProperty(v59, "byteOffset", { configurable: true, value: v68 });
v65[v68];
let v70 = v65[2936874794];
v51.g = -1024;
let v73 = --v70;
const v74 = v51 | v73;
const v75 = v51 ** v70;
!v74;
Math.clz32(v75);
--v73;
~v75;
