function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -8;
    this.h = -8;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = F0;
    this.h = a9;
    this.a = v4;
}
new F6(v4, v5);
new F6(v5, v4);
new F6(v3, v4);
new Uint8Array(3903);
new BigUint64Array(16);
new Uint32Array(128);
let v27 = -1992735215;
function f28(a29, a30) {
    const o38 = {
        "d": a29,
        set b(a32) {
            let v33;
            try { v33 = a32(a32, this); } catch (e) {}
            v27 = a30;
            v33.valueOf = a32;
        },
        get c() {
            const v35 = [this];
            const v36 = [545904634,a29,v35,this,v35];
            [v36,a29,v36];
            return a30;
        },
    };
    return o38;
}
f28(638957980, v27);
f28(v27, 545904634);
f28(v27, v27);
new Int32Array(249);
new Int32Array(2380);
const v50 = new Float32Array(3269);
v50[v50] = v50;
class C52 {
    [Int32Array] = 249;
    static [2380];
    a;
}
new C52();
new C52();
new C52();
