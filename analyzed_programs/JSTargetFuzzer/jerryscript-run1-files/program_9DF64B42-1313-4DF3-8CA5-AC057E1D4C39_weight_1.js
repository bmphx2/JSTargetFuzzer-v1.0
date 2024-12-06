const v4 = new Set();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a7;
}
const v9 = new F5(Set, Set);
new F5(v4, F5);
new F5(v4, 1073741824);
let v17 = -1992735215;
function f18(a19, a20) {
    const o28 = {
        "d": a19,
        set b(a22) {
            let v23;
            try { v23 = a22(a22, this); } catch (e) {}
            v17 = a20;
            v23.valueOf = a22;
        },
        get c() {
            const v25 = [this];
            const v26 = [545904634,a19,v25,this,v25,a19,v25,638957980];
            [v26,a19,v26];
            return a20;
        },
    };
    return o28;
}
f18(638957980, v17, v9, v4, 1073741824);
f18(v17, 545904634);
f18(v17, v17);
new Int32Array(249);
new Int32Array(2380);
const v40 = new Float32Array(3269);
v40[v40] = v40;
class C42 {
    [Int32Array] = 249;
    static [2380];
    a;
}
new C42();
const v44 = new C42();
new C42(f18, v44);
