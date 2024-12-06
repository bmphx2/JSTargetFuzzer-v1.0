function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = f0;
    this.a = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
class C6 {
    n(a8, a9) {
        a8 != v3;
        return v5;
    }
    set d(a12) {
        if (a12) {
            let v15 = +this;
            if (v4 === a12) {
                Math[9];
            } else {
            }
            v15++;
            ~v15;
        } else {
            let v23;
            try { v23 = this.n(v4, ...v3, ...this, v4); } catch (e) {}
            function F24(a26, a27, a28, a29) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = this;
            }
            const v30 = new F24(v3, a12, v23, f0);
            new F24(v3, C6, F1, v23);
            new F24(v4, v3, F1, v30);
            Object.defineProperty(v3, f0, { configurable: true, value: a12 });
        }
    }
}
new C6();
const v34 = new C6();
new C6();
const v37 = new Set();
class C38 {
    o(a40, a41) {
        function f42(a43, a44) {
            const o45 = {
                "h": a41,
            };
            return o45;
        }
        f42(f42(f42(v37, v34), this), this);
        a40 instanceof a40;
    }
}
const v50 = new C38();
const v51 = [-14,-9223372036854775808,268435456,1007853335,257,54873,536870912,257];
try { v50.o(v51); } catch (e) {}
