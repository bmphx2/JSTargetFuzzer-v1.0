new Set();
function F11(a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a15;
}
const v16 = new F11(1000000000.0, "atanh", "4294967295");
const v17 = new F11(v16, "atanh", "o");
new F11(0.0, "atanh", "atanh");
let v21 = -1992735215;
function f22(a23, a24) {
    const o32 = {
        "d": a23,
        set e(a26) {
            let v27;
            try { v27 = a26(a26, this); } catch (e) {}
            v21 = a24;
            v27.valueOf = a26;
        },
        get c() {
            const v29 = [this];
            const v30 = [545904634,a23,v29,this,v29];
            [v30,a23,v30];
            return a24;
        },
    };
    return o32;
}
f22(638957980, v21);
f22(v21, 545904634);
f22(v21, v21);
new Int32Array(249);
new Float64Array(2380);
const v44 = new Float32Array(49974);
v44[v44] = v44;
class C46 {
    [Float64Array] = 249;
    static [2380];
    a;
}
const v47 = new C46(0.9385403991833728);
new C46(249, v47, v17);
new C46();
