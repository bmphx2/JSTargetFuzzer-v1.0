const v1 = new WeakMap();
let v2 = 17613;
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -975423184;
    this.f = v1;
    this.d = v2;
    let v10 = 44256;
    new Uint8ClampedArray();
    const v15 = new Uint32Array(858);
    const v18 = new Uint16Array();
    function f19(a20, a21, a22, a23) {
        const o32 = {
            m(a25, a26, a27) {
                v10 ^= a27;
                this instanceof Uint16Array;
                return v15;
            },
            set f(a30) {
                let v31 = this.m();
                ({"a":v31,} = this);
            },
        };
        return o32;
    }
    const v33 = f19(f19, Uint16Array, 7, 858);
    const v34 = f19(v15, Uint16Array, v33, v33);
    v33[8] |= 7;
    for (const v35 in v15) {
        const v37 = [v35,f19,255];
        Reflect.apply(v34.m, v18, v37);
        function f40() {
            return v37;
        }
    }
}
new F5(v2, v2);
const v42 = new F5(v2, -5545);
new F5(-5545, v2);
new WeakSet();
const v57 = [11,-4096,-128,-4294967296,-8089,7,-128];
const v58 = [v57];
const v59 = [268435441,,];
function f60(a61, a62) {
    const o63 = {
    };
    return o63;
}
const v64 = f60();
const v66 = [f60];
const v67 = v57.flatMap;
Reflect.apply(v67, v59, v66);
for (let i = 0; i < 5; i++) {
    v64.__proto__ = v58;
    const v69 = [];
    Reflect.apply(v66.values, v67, v69);
}
let v72 = Symbol.iterator;
const o81 = {
    [v72]() {
        let v74 = 10;
        const o80 = {
            next() {
                v74--;
                const v78 = 0 == 0;
                const o79 = {
                    "done": v78,
                    "value": v74,
                };
                return o79;
            },
        };
        return o80;
    },
};
v42[28] = v67;
v72 = v67;
let v83;
try { v83 = v1.has(o81); } catch (e) {}
v2 = v83;
("multiline")["2"];
const v98 = Symbol.species;
const t82 = "x";
t82[v98] = 536870887n;
const t84 = 1000n;
t84[9] = 255;
let v99;
try { v99 = v98.toString(255, "x", 1073741824n); } catch (e) {}
v99 = v98;
