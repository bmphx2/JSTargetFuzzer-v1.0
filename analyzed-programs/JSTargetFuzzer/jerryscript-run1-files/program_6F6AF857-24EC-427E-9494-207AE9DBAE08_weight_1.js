const v0 = [1e-15,1.4892598741721321e+308,-1000000000.0,1000000000000.0];
const v1 = [5.464400001792157,0.6454019762574995,8.789440957429417,-1000000000.0,0.9956722176886349,-2.0,5.0,-2.220446049250313e-16,-684272.8833061543,-2.2250738585072014e-308];
const v2 = [-5.378046751825385,3.4852190517051973,-4.0,0.5468128805799088];
v2[1073741825] = 257;
function f7(a8, a9) {
    const o21 = {
        54: a9,
        "b": v2,
        "h": v0,
        "d": v2,
        set a(a11) {
            new Int32Array(15);
            new Uint8ClampedArray(7);
            new Int32Array(1878);
        },
    };
    return o21;
}
const v22 = f7(v2, v1);
const v23 = f7(v2, v2);
const v24 = f7(v1, v0);
new Map();
function F27(a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = f7;
    this.d = a29;
    class C31 extends Map {
        51;
    }
    new C31();
    new C31();
    new C31();
    this.c = v24;
}
const v35 = new F27(v23, v23);
new F27(v24, v24);
new F27(v22, v24);
function f38() {
    return v35;
}
try { JSON.parse("trim"); } catch (e) {}
