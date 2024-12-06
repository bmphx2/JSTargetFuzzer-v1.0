function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -9007199254740992;
}
new F0();
const v4 = new F0();
new F0();
new Uint8Array(256);
new Uint16Array(11);
new Uint8Array(16);
new Float64Array(1);
const v24 = new Int32Array(2517);
new Uint8Array(101);
let v29 = -1992735215;
function f30(a31, a32) {
    const o40 = {
        "d": a31,
        set b(a34) {
            let v35;
            try { v35 = a34(a34, this); } catch (e) {}
            v29 = a32;
            v35.valueOf = a34;
        },
        get c() {
            const v37 = [this];
            const v38 = [545904634,a31,v37,this,v37];
            [v38,a31,v38];
            return a32;
        },
        "c": v4,
        "g": a31,
        8: a32,
        "a": v24,
        "b": a31,
    };
    return o40;
}
f30(638957980, v29);
f30(v29, 545904634);
f30(v29, v29);
new Int32Array(249);
new Int32Array(2380);
const v52 = new Float32Array(3269);
v52[v52] = v52;
class C54 {
    set g(a56) {
    }
    [Int32Array] = 249;
    static [2380];
    a;
}
const v60 = new C54();
638957980 >>> 2380;
C54[638957980] = v60;
new C54();
new C54();
