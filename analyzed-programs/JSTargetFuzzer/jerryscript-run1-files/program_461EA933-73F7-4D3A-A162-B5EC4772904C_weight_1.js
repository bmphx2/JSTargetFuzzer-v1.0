const v1 = new Map();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a4;
    this.g = a4;
    this.e = v1;
}
new F2(F2);
new F2(F2);
new F2(v1);
new Float32Array(16);
new Uint8ClampedArray(3);
new BigUint64Array(8);
function f20(a21, a22) {
    const o30 = {
        "d": a21,
        set b(a24) {
            let v25;
            try { v25 = a24(a24, this); } catch (e) {}
            v25 = a22;
            v25.valueOf = a24;
        },
        get c() {
            const v27 = [this];
            [[545904634,a21,v27,this,v27],a21,Map];
            return a22;
        },
    };
    return o30;
}
f20(638957980, -1992735215);
f20(-1992735215, 545904634);
f20(-1992735215, -1992735215);
new Int32Array(249);
new Int32Array(2380);
const v42 = new Float32Array(3269);
v42[v42] = v42;
class C44 {
    [Int32Array] = 249;
    static [2380];
    a;
}
new C44();
new C44();
new C44();
