function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 14;
    this.f = 14;
}
new F0();
const v4 = new F0();
const v5 = new F0();
class C6 {
    static {
        new Int8Array(129);
        new Float64Array(0);
        new Uint8ClampedArray(128);
    }
    #b;
    static f = F0;
    static 2 = v5;
}
new C6();
new C6();
new C6();
new Int32Array(198);
new Float32Array(128);
const v28 = new BigUint64Array(157);
v4[v28] = 157;
function f29(a30, a31) {
    let v32 = 0;
    while (v32 < 3) {
        const o37 = {
            "maxByteLength": 153,
        };
        const v39 = new SharedArrayBuffer(8, o37);
        new BigInt64Array(v39);
        v32++;
    }
    return 128;
}
f29(v4, 128);
