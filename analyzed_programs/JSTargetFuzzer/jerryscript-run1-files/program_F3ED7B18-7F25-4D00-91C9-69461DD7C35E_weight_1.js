function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 3;
}
new F3(3, 7);
const v8 = new F3(-1024, 3);
new F3(v8, 3);
new Float64Array(14);
new Uint8Array(7);
new Float32Array(257);
new Int8Array(255);
new BigUint64Array(1422);
new Float32Array(1300);
function f30(a31, a32) {
    let v34;
    try { v34 = a32(1300, this, a31, 1422, a32); } catch (e) {}
    +v34;
}
new Promise(f30);
new Int8Array(64);
const v41 = Symbol.iterator;
const o50 = {
    [v41]() {
        let v43 = 10;
        const o49 = {
            next() {
                v43--;
                const v47 = v43 == 0;
                const o48 = {
                    "done": v47,
                    "value": v43,
                };
                return o48;
            },
        };
        return o49;
    },
};
new Uint8ClampedArray(256);
new BigUint64Array(1905);
class C59 {
    o(a61, a62) {
        const t42 = a61 instanceof a61;
        t42[7] = "m";
        var c = a61;
        try {
            super.m();
        } catch(e65) {
            super.f;
            const v67 = e65.__proto__;
            try { v67["m"](256, a62); } catch (e) {}
            Object.defineProperty("m", "b", { set: f30 });
        }
        return -6356;
    }
    static valueOf(a71, a72, a73, a74) {
        this.length = 1073741824;
        return a71;
    }
    static 4 = -6356;
    4294967296;
}
let v76 = new C59();
const v77 = new C59();
new C59();
const v80 = new Set();
const v81 = [19167,-1653864233,4];
const v82 = [-14,-9223372036854775808,268435456,1007853335,257,54873,536870912,257];
const v83 = [8,-34566,-1073741824];
v80 == v81 ? v80 : v81;
C59.d = v83;
let v86;
try { v86 = v76(); } catch (e) {}
v80[v86] /= -376497935;
v81[v82] &= -6356;
v76 = v77;
("m").length;
const o88 = {
};
new Proxy(v82, o88);
