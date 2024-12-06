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
            if (v4 !== a12) {
                Math[9];
            } else {
                const o21 = {
                };
                try { ("find").repeat(-9007199254740992); } catch (e) {}
            }
            v15++;
            v15++;
        } else {
            let v27;
            try { v27 = this.n(v4, ...v3, ...this, v4); } catch (e) {}
            function F28(a30, a31, a32, a33) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = this;
            }
            const v34 = new F28(v3, a12, v27, f0);
            new F28(v3, C6, F1, v27);
            new F28(v4, v3, F1, v34);
            Object.defineProperty(v3, f0, { configurable: true, value: a12 });
        }
    }
}
new C6();
const v38 = new C6();
new C6();
const v41 = new Set();
class C42 {
    o(a44, a45) {
        function f46(a47, a48) {
            const o49 = {
                "h": a45,
            };
            function f50(a51, a52) {
                return a51 instanceof a51;
            }
            new Int16Array([Map,null]);
            return o49;
        }
        f46(f46(f46(v41, v38), this), this);
        a44 instanceof a44;
    }
}
const v63 = new C42();
const v64 = [-14,-9223372036854775808,268435456,1007853335,257,54873,536870912,257];
try { v63.o(v64); } catch (e) {}
