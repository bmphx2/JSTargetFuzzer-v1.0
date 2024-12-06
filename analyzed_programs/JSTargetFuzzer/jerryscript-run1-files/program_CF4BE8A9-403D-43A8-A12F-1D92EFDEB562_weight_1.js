function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 1000;
    this.h = 1000;
    const t4 = 1000;
    t4.g = 1000;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    a9.b = a8;
    this.d = v3;
    this.e = a9;
}
new F6(v3, v4);
const v11 = new F6(v3, v3);
new F6(v11, v5);
const v18 = new Int16Array();
v18.copyWithin(256, 1717, 1717);
const v28 = -Infinity;
[10n,-651476.4753644922,-481375.0738250828,2147483647n,63214n];
const v31 = [10n];
const v32 = [v28,v31,63214n,-481375.0738250828,-481375.0738250828];
function f33() {
    return v31;
}
class C34 {
    constructor(a36, a37) {
        super.h = a36;
        const v39 = Symbol.iterator;
        const o60 = {
            [v39]() {
                let v41 = 10;
                const o55 = {
                    next() {
                        try {
                        const t0 = 2147483647n;
                        t0(-651476.4753644922, ...v41, 10n, this);
                        } catch (e) {}
                        const v44 = f33();
                        function f45(a46) {
                            return f33;
                        }
                        class C47 extends v44 {
                            d;
                        }
                        v41--;
                        const v53 = v41 == 0;
                        const o54 = {
                            "done": v53,
                            "value": v41,
                        };
                        return o54;
                    },
                };
                this.__proto__ = v11;
                try { new a36(this, Symbol, o55, o55, Symbol); } catch (e) {}
                return o55;
            },
        };
    }
}
new C34(v31, v28);
const v62 = new C34(v31, -651476.4753644922);
let v63 = new C34(v32, f33);
new Float32Array(3701);
const v69 = new Int32Array();
const v70 = new Int32Array();
function F71(a73) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v70;
    this.e = v69;
}
new Int32Array(6);
new Float32Array(0);
[-Infinity];
const o81 = {
    set a(a80) {
    },
};
with (v62) {
    typeof f === "bigint";
}
for (let v86 = 0; v86 < 5; v86++) {
    o81.a;
}
[-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v90 = [13,9,-12559,-8,-4294967297];
[65535,-1139741600];
new Uint8Array(v90);
let v94 = -41990;
const v95 = v63++;
let v96 = --v94;
function f97() {
    return F0;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v96 * (v95 << v94);
