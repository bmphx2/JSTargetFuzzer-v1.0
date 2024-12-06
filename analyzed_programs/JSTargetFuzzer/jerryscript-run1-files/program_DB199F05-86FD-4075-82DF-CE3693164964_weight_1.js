function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -3;
    this.a = -3;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C9 {
    constructor(a11, a12) {
        v3.__proto__ = this;
        try {
            super.p();
        } catch(e14) {
        }
    }
    o(a16, a17, a18, a19) {
        for (let i21 = 0;
            (() => {
                eval(a17);
                const o24 = {
                };
                return v4 < 9;
            })();
            ) {
        }
        a16[this] = a19;
        new Float32Array(3);
        new Int32Array(2);
        new BigInt64Array(4096);
        return v3;
    }
}
const v38 = new C9(2147483647, v4);
const v39 = new C9(268435439, v38);
const v40 = new C9(268435456, v3);
function f44(a45, a46, a47, a48) {
    const o59 = {
        "a": v39,
        "b": C9,
        "f": 268435439,
        [a47](a50, a51, a52, a53) {
            Object.defineProperty(v4, this, { writable: true, configurable: true, enumerable: true, value: a53 });
            this[-4294967297n] = a45;
            return v3;
        },
        get g() {
            super.e;
            try { this.p(a47, this, 2147483647, v38); } catch (e) {}
            try {
                super.p();
            } catch(e58) {
            }
            return F0;
        },
    };
    return o59;
}
f44(v5, v5, f44(v4, v5, v39, -9223372036854775807n), v4);
f44(v3, v40, 268435439, v39);
new BigInt64Array(256);
const v71 = new Uint32Array(v4);
new Uint16Array(227);
function F75(a77, a78) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a78;
}
new F75(256, 129);
new F75(v71, 227);
new F75(v71, 129);
function f82() {
}
new Uint8Array(227);
let v96 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v96);
v96 /= v96;
new WeakSet();
new BigInt64Array(2);
RangeError();
new BigInt64Array();
([-Infinity,1000.0,7.248654515133236,-294889.9046393214,0.0])["indexOf"]("indexOf", -15);
([5]).reverse();
