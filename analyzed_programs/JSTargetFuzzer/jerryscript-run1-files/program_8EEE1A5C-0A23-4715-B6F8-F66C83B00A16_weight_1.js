function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a5;
    this.c = -2147483647n;
}
const v7 = new F3(-2147483647n, 4096n);
const v8 = new F3(-2147483647n, 4096n);
const v9 = new F3(-2147483647n, -9007199254740991n);
function f10() {
    return -9007199254740991n;
}
function F11(a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a13;
}
new F11(f10, v8, 4096n);
const v17 = new F11(v7, v9, 4096n, f10);
new F11(v17, v9, 4096n);
function f22(a23, a24) {
    const o31 = {
        get h() {
            this[46667] = a23;
            try { a24(a24, a24); } catch (e) {}
            return 255;
        },
        __proto__: 255,
        m(a28) {
            this[a28] *= 46667;
            [] = 39946;
            const v29 = super.a;
            let v30;
            try { v30 = new v29(v29, a28); } catch (e) {}
            v30[2147483648] = v30;
            return a28;
        },
    };
    return o31;
}
const v32 = f22(39946, 46667);
f22(255, 46667);
f22(255, 46667);
const v40 = new BigUint64Array(16);
const v43 = new Float32Array(3007);
const v46 = new Float32Array(3);
Object.defineProperty(v40, "byteOffset", { configurable: true, value: v46 });
v43[v46];
let v48 = v43[2936874794];
v32.g = -1024;
let v51 = --v48;
const v52 = v32 | v51;
const v53 = v32 ** v48;
!v52;
Math.clz32(v53);
--v51;
~v53;
