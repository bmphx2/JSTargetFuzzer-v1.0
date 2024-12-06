function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -1073741824;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 {
    set a(a8) {
        this[v4] |= a8;
    }
    p(a13, a14) {
        v4.valueOf = this;
        const v17 = Math.sign(47060);
        const v18 = Math.fround(47060);
        const v19 = -this;
        function f20(a21, a22, a23) {
            function F24(a26, a27, a28) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = a23;
                this.g = v18;
                this.a = a14;
            }
            const v29 = new F24(a14, v17, a13);
            new F24(a13, v29, F24);
            new F24(47060, C6, 47060);
            return v29;
        }
        f20(v19, F0, this);
        return a13;
    }
}
const v33 = new C6();
const v34 = new C6();
const v35 = new C6();
const v36 = [v4,v33];
[v35,v5,v34,v35,v33];
const v38 = [v36,F0,v3];
function F39(a41, a42, a43) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a42;
    this.b = F0;
    this.h = v5;
}
new F39(v3, v33, v35, v36, v4);
new F39(v3, v34, v33);
new F39(v3, v34, v34);
const v49 = new Uint32Array(181);
let v51 = BigUint64Array;
let v52 = new v51(1);
let v53 = 253;
[v53,,v51,v52] = v49;
try { v51["boolean"](181, v53, v51); } catch (e) {}
new Uint16Array(v53, v38, 181);
for (let i66 = 0; i66 < 2; i66++) {
    const v72 = new Function("x");
    v72.name;
}
Function();
