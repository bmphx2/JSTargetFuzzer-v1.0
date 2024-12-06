function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = f0;
    this.e = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function f9(a10, a11, a12, a13) {
    const o24 = {
        toString(a15, a16, a17) {
            const v18 = this[9];
            try { v18(); } catch (e) {}
            v5[v18];
            return a11;
        },
        __proto__: v3,
        "f": f0,
        "c": v4,
    };
    return o24;
}
f9(v4, 10, v3, 191988406);
f9(v5, 16, v5, 191988406);
f9(v4, 10, v4, 10);
const v32 = -Infinity;
[10n,-651476.4753644922,-481375.0738250828,2147483647n,63214n];
const v35 = [10n];
const v36 = [v32,v35,63214n,-481375.0738250828,-481375.0738250828];
function f37() {
    return v35;
}
class C38 {
    constructor(a40, a41) {
        super.h = a40;
        const v43 = Symbol.iterator;
        const o64 = {
            [v43]() {
                let v45 = 10;
                const o59 = {
                    next() {
                        try {
                        const t0 = 2147483647n;
                        t0(-651476.4753644922, ...v45, 10n, this);
                        } catch (e) {}
                        f37();
                        function f49(a50) {
                            return v45;
                        }
                        class C51 extends f49 {
                            d;
                        }
                        v45--;
                        const v57 = v45 == 0;
                        const o58 = {
                            "done": v57,
                            "value": v45,
                        };
                        return o58;
                    },
                };
                this.__proto__ = o59;
                try { new a40(this, Symbol, o59, o59, Symbol); } catch (e) {}
                return o59;
            },
        };
    }
}
new C38(v35, v32);
const v66 = new C38(v35, -651476.4753644922);
let v67 = new C38(v36, f37, v66);
new Float32Array(3701);
const v73 = new Int32Array();
const v74 = new Int32Array();
function F75(a77) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v74;
    this.e = v73;
}
new Int32Array(6);
new Float32Array(0);
[-Infinity];
const o85 = {
    set c(a84) {
    },
};
with (v66) {
    typeof f === "bigint";
}
for (let v90 = 0; v90 < 5; v90++) {
    o85.a;
}
[-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v94 = [13,9,-12559,-8,-4294967297];
[65535,-1139741600];
new Uint8Array(v94);
let v98 = -41990;
const v99 = v67++;
let v100 = --v98;
function f101() {
    return f101;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v100 * (v99 << v98);
