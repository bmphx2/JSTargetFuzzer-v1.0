new Uint16Array(5);
const v5 = new Float32Array(4096);
const v8 = new Uint16Array(3089);
function f9(a10, a11) {
    const o23 = {
        "f": a10,
        __proto__: v8,
        get a() {
            try { this.toString(this, a11, v5, a10, this); } catch (e) {}
            new Int16Array(243);
            new Float64Array(1776);
            new BigInt64Array(14);
            return v8;
        },
    };
    return o23;
}
const v24 = f9(4096, 4096);
const v25 = f9(4096, 3089);
const v26 = f9(4096, 5);
function F27(a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a30;
    this.a = 5;
    this.b = a29;
}
const v31 = new F27(v24, v26);
const v32 = new F27(v25, v24);
new F27(v26, v26);
class C34 {
    static h;
    93;
    static a = 5;
    [v32] = v31;
}
new C34();
new C34();
const v37 = new C34();
f9(...v8, v31, ...v5, v37, v25);
