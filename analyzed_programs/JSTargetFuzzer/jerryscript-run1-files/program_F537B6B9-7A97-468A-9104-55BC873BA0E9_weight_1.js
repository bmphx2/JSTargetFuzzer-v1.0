function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -128;
    this.g = -128;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v3;
    this.a = F0;
    this.c = F0;
}
const v10 = new F6(v5, v3);
const v11 = new F6(v4, v10);
const v12 = new F6(v4, v11);
function f13(a14, a15, a16, a17) {
    const o21 = {
        "c": v12,
        get h() {
            try { this(); } catch (e) {}
            function f20() {
                return a17;
            }
            Object.defineProperty(v10, v5, { value: a14 });
            return v10;
        },
        3: v11,
        "b": v11,
        4: F6,
    };
    const v23 = new Int8Array(Int8Array);
    const v24 = v23.values();
    const v26 = new BigInt64Array();
    v26.lastIndexOf(v24);
    return o21;
}
f13(v10, v11, v12, v3);
f13(v10, v11, v12, v5);
f13(v10, v10, v10, v5);
async function f31(a32, a33) {
    return a32;
}
f31(f31, f31);
