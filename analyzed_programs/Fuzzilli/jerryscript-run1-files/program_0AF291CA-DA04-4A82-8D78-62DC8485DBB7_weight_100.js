class C3 {
    static n(a5) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            this.g = a12;
            this.a = 3.0;
            this.h = 1129386486;
        }
        new F9(-7.545833661150933, -4.0, a5, -4.0);
        new F9(-4.0, -7.545833661150933, 3.0, -4.0);
        const v17 = new F9(-4.0, 3.0, -7.545833661150933, -4.0);
        return v17;
    }
    static d;
}
const v18 = new C3();
const v19 = new C3();
let v20 = new C3();
const v21 = [-1043840672,-2147483648,-65535,65537,-1054418344,2147483647,701329996,2147483647,-4,5];
const v22 = [-1073741824,-355937498,3];
const v23 = [-2147483648,948126229,2109673324,-34886,255];
const v24 = [-Infinity,-4.463781862515328,0.0,5.0,0.8454956765542706,6.759503182618914,0.6025047122320651,1000000.0];
const v25 = [-Infinity,-1.216624801647516e+308,-256.69968557961533,0.08255238109700869,2.2250738585072014e-308,-335988.18366291746];
const v26 = [-1e-15,739.2986430851147,-428625.4496332848,-1.0,-1000000.0,3.0,-4.0,6.202641973911383,1000000.0,-1.7976931348623157e+308];
function f27(a28, a29, a30, a31) {
    const o44 = {
        4: a30,
        valueOf(a33, a34) {
            new Int32Array(0);
            new Uint8Array(4);
            new Uint8ClampedArray(9);
            return v18;
        },
        __proto__: a29,
        "a": v24,
    };
    return o44;
}
const v45 = f27(v24, v22, v21, v22);
f27(v22, v19, v23, v21);
const v48 = f27(v23, -2, v23, v19).__proto__;
let v49;
try { v49 = new v48(v48, v22, v48, v21); } catch (e) {}
function F50(a52, a53, a54) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v25;
    this.f = v49;
}
new F50(v24, v45, v24);
new F50(v24, "now", v26);
new F50(v22, v45, v21);
v20 ||= v23;
