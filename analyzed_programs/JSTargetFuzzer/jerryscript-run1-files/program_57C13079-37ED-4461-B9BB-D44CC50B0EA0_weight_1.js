function F0() {
    if (!new.target) { throw 'must be called with new'; }
    new Date(4, 9007199254740990);
    this.d = 15;
}
new F0();
new F0();
new F0();
new Float32Array(7);
new Int8Array(6);
new Int16Array(3596);
const v29 = -Infinity;
[10n,-651476.4753644922,-481375.0738250828,2147483647n,63214n];
const v32 = [10n];
const v33 = [v29,v32,63214n,-481375.0738250828,-481375.0738250828];
function f34() {
    return v32;
}
class C35 {
    constructor(a37, a38) {
        super.h = a37;
        const v40 = Symbol.iterator;
        const o61 = {
            [v40]() {
                let v42 = 10;
                const o56 = {
                    next() {
                        try {
                        const t0 = 2147483647n;
                        t0(-651476.4753644922, ...v42, 10n, this);
                        } catch (e) {}
                        f34();
                        function f46(a47) {
                            return v42;
                        }
                        class C48 extends f46 {
                            d;
                        }
                        v42--;
                        const v54 = v42 == 0;
                        const o55 = {
                            "done": v54,
                            "value": v42,
                        };
                        return o55;
                    },
                };
                this.__proto__ = o56;
                try { new a37(this, Symbol, o56, o56, Symbol); } catch (e) {}
                return o56;
            },
        };
    }
}
new C35(v32, v29);
const v63 = new C35(v32, -651476.4753644922);
let v64 = new C35(v33, f34);
new Float32Array(3701);
const v70 = new Int32Array();
const v71 = new Int32Array();
function F72(a74) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v71;
    this.e = v70;
}
new Int32Array(6);
new Float32Array(0);
[-Infinity];
const o82 = {
    set a(a81) {
    },
};
with (v63) {
    typeof f === "bigint";
}
for (let v87 = 0; v87 < 5; v87++) {
    o82.a;
}
[-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v91 = [13,9,-12559,-8,-4294967297];
[65535,-1139741600];
new Uint8Array(v91);
let v95 = -41990;
const v96 = v64++;
let v97 = --v95;
function f98() {
    return f98;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v97 * (v96 << v95);
