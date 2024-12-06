function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -4294967295;
    this.h = -4294967295;
    this.f = -4294967295;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F12(a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 268435440;
    this.f = v4;
}
new F12(v3, v5, v4);
new F12("valueOf", v5, v5);
new F12("valueOf", v3, v5);
const v24 = -Infinity;
[10n,-651476.4753644922,-481375.0738250828,2147483647n,63214n];
const v27 = [10n];
const v28 = [v24,v27,63214n,-481375.0738250828,-481375.0738250828];
function f29() {
    return v27;
}
class C30 {
    constructor(a32, a33) {
        super.h = a32;
        const v35 = Symbol.iterator;
        const o58 = {
            [v35]() {
                let v37 = 10;
                const o53 = {
                    next() {
                        let v39;
                        try {
                        const t0 = 2147483647n;
                        v39 = t0(-651476.4753644922, ...v37, 10n, this);
                        } catch (e) {}
                        f29();
                        function f41(a42) {
                            return v37;
                        }
                        class C43 extends f41 {
                            d;
                        }
                        v37--;
                        const v49 = v37 == 0;
                        v4.f = this;
                        const v50 = new F12(f29, C43, this);
                        v50[v39] = this;
                        function f51() {
                            return this;
                        }
                        const o52 = {
                            "done": v49,
                            "value": v37,
                        };
                        return o52;
                    },
                };
                this.__proto__ = o53;
                try { new a32(this, Symbol, o53, o53, Symbol); } catch (e) {}
                return o53;
            },
        };
    }
}
new C30(v27, v24);
const v60 = new C30(v27, -651476.4753644922);
let v61 = new C30(v28, f29);
new Float32Array(3701);
const v67 = new Int32Array();
const v68 = new Int32Array();
function F69(a71) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v68;
    this.e = v67;
}
new Int32Array(6);
new Float32Array(0);
[-Infinity];
const o79 = {
    set a(a78) {
    },
};
with (v60) {
    typeof f === "bigint";
}
for (let v84 = 0; v84 < 5; v84++) {
    o79.a;
}
[-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v88 = [13,9,-12559,-8,-4294967297];
[65535,-1139741600];
new Uint8Array(v88);
let v92 = -41990;
const v93 = v61++;
let v94 = --v92;
function f95() {
    return f95;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v94 * (v93 << v92);
