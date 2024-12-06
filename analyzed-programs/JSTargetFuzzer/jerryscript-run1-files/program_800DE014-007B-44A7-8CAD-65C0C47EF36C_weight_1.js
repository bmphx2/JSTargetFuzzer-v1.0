function f0() {
}
const v1 = [f0,f0];
[v1,f0,v1,v1,f0];
[f0,f0];
f0();
Object.defineProperty(v1, "f", { configurable: true, get: f0, set: f0 });
const v7 = Symbol.iterator;
const o16 = {
    [v7]() {
        let v9 = 10;
        const o15 = {
            next() {
                v9--;
                const v13 = v9 == 0;
                const o14 = {
                    "done": v13,
                    "value": v9,
                };
                return o14;
            },
        };
        return o15;
    },
};
[-1.0430797102472322,2.139016852394398e+307];
const v20 = [NaN,-423.5074566132198,-1e-15,-1.0,Infinity,0.0,6.0121349422418895,4.4012631889387354e+307,-1.7976931348623157e+308,1000000000.0];
const v21 = [1e-15,-8.760186819016273,-10659.92746006581];
const v29 = -Infinity;
[10n,-651476.4753644922,-481375.0738250828,2147483647n,63214n];
const v32 = [10n];
const v33 = [v29,v32,v21,-481375.0738250828,-481375.0738250828];
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
const o88 = {
    [v63](a81, a82) {
        for (let v83 = 0; v83 < 32; v83++) {
            const t88 = "w6";
            t88[o16 + v83] = v83;
        }
        return v20;
    },
    set a(a87) {
    },
};
with (v63) {
    typeof f === "bigint";
}
for (let v93 = 0; v93 < 5; v93++) {
    o88.a;
}
[-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v97 = [13,9,-12559,-8,-4294967297];
[65535,-1139741600];
new Uint8Array(v97);
let v101 = -41990;
const v102 = v64++;
let v103 = --v101;
function f104() {
    return f104;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v103 * (v102 << v101);
0 >>> "any";
new Int8Array(9);
new Float64Array(7);
new Uint16Array(64);
