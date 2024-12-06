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
            try { this["m"]("m", v5, a21, a22, a13); } catch (e) {}
            function F29(a31, a32, a33) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = a23;
                this.g = v18;
                this.a = a14;
            }
            const v34 = new F29(a14, v17, a13);
            new F29(a13, v34, F29);
            new F29(47060, C6, 47060);
            return v34;
        }
        f20(v19, F0, this);
        return a13;
    }
}
const v38 = new C6();
const v39 = new C6();
const v40 = new C6();
const v41 = [v4,v38];
[v40,v5,v39,v40,v38];
const v43 = [v41,F0,v3];
function F44(a46, a47, a48) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a47;
    this.b = F0;
    this.h = v5;
}
new F44(v3, v38, v40, v41, v4);
new F44(v3, v39, v38);
new F44(v3, v39, v39);
const v54 = new Uint32Array(181);
let v56 = BigUint64Array;
let v57 = new v56(1);
let v58 = 253;
[v58,,v56,v57] = v54;
try { v56["boolean"](181, v58, v56); } catch (e) {}
new Uint16Array(v58, v43, 181);
for (let i71 = 0; i71 < 2; i71++) {
    const v77 = new Function("x");
    v77.name;
}
Function();
