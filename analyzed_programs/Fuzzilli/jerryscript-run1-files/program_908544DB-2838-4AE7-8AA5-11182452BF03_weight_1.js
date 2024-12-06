class C3 {
    valueOf(a5) {
        const o8 = {
            "maxByteLength": 255,
        };
        const v10 = new ArrayBuffer(255, o8);
        new DataView(v10);
        return 9.28389802912625e+307;
    }
}
const v13 = new C3();
const v14 = new C3();
const v15 = new C3();
function f16() {
    return 9.28389802912625e+307;
}
function f20() {
    return v15;
}
function F21(a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a24;
    this.h = a24;
}
new F21(v14, v15);
new F21(v14, v14);
const v27 = new F21(v15, v13);
v27[128] = v15;
const o30 = {
    "maxByteLength": 2776,
};
const v32 = new ArrayBuffer(2776, o30);
new Int8Array(v32);
