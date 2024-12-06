const v4 = new Date();
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -1469961305;
}
new F8(7n, 4294967296);
new F8(7n, 1130);
new F8(4096n, -1469961305);
let v17 = -1992735215;
function f18(a19, a20) {
    const o28 = {
        "d": a19,
        "g": v4,
        "f": a19,
        __proto__: Date,
        "c": a19,
        "e": a20,
        set b(a22) {
            let v23;
            try { v23 = a22(a22, this); } catch (e) {}
            v17 = a20;
            v23.valueOf = a22;
        },
        get c() {
            const v25 = [this];
            const v26 = [545904634,a19,v25,this,v25];
            [v26,a19,v26];
            return a20;
        },
    };
    return o28;
}
f18(638957980, v17);
f18(v17, 545904634);
f18(v17, v17);
const v34 = new Int32Array(249);
for (let i38 = 0, i39 = 10; i38 < i39; i38++, i39--) {
    const v47 = v34.__proto__;
    v47.b = v47;
}
new Int32Array(2380);
const v52 = new Float32Array(3269);
v52[v52] = v52;
class C54 {
    [Int32Array] = 249;
    static [2380];
    a;
}
new C54();
new C54();
new C54();
