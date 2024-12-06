function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a8;
    this.c = a8;
    this.a = 268435456;
}
const v10 = new F6(9, 1245309134n);
const o11 = {
};
new Proxy(v10, o11);
try { v10["m"](1245309134n, 268435456, "m", "m"); } catch (e) {}
const v16 = new F6(5, 1000n);
const v17 = new F6(5, 4n);
function F21(a23, a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 4n;
    this.a = 9007199254740990;
    this.e = a25;
    o11[a23];
    const v30 = 44602 % this;
    44602 ^ this;
    +this;
    const v33 = +v30;
    v33 * v33;
}
new F21(-57731, v16, 3, v10);
new F21(5, v16, F6, 4n);
new F21(5, v17, v16, -57731);
new WeakMap();
function f40() {
    return WeakMap;
}
new Int8Array(5);
new Function(190);
new Float32Array(127);
function f56(a57, a58) {
    const o65 = {
        get h() {
            this[803142468] = a57;
            try { a58(a58, a58); } catch (e) {}
            return 255;
        },
        __proto__: 255,
        m(a62) {
            this[a62] *= 803142468;
            [] = 39946;
            const v63 = super.a;
            let v64;
            try { v64 = new v63(v63, a62, a62, 190); } catch (e) {}
            v64[2147483648] = v64;
            return a62;
        },
    };
    return o65;
}
const v66 = f56(39946, 803142468);
f56(255, 803142468);
f56(255, 803142468);
const v74 = new BigUint64Array(16);
const v77 = new Float32Array(3007);
const v80 = new Float32Array(3);
Object.defineProperty(v74, "byteOffset", { configurable: true, value: v80 });
v77[v80];
let v82 = v77[2936874794];
v66.g = -1024;
let v85 = --v82;
const v86 = v66 | v85;
const v87 = v66 ** v82;
!v86;
Math.clz32(v87);
--v85;
~v87;
