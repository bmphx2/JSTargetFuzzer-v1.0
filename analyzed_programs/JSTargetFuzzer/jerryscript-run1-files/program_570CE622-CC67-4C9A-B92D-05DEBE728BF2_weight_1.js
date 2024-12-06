function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -57048;
    this.f = -57048;
    this.g = -57048;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o40 = {
        [v4]: a7,
        m(a9, a10) {
            let v11;
            try { v11 = a10.setMinutes(this, v5); } catch (e) {}
            for (let v12 = 0; v12 < 32; v12++) {
                this["p" + v12] = v12;
            }
            a10 <<= this;
            v5[v11];
            super.c = this / v4;
            this[2] >>= a7;
            let {"b":v17,"f":v18,"h":v19,} = this;
            const v20 = a9 % a7;
            const v24 = new Set();
            const v26 = v24.__proto__;
            try { Date["UTC"](-9007199254740990, -65536, ..."UTC", ...v26); } catch (e) {}
            return v20;
        },
        "c": a7,
        set h(a30) {
            a30 *= a7;
            function F31(a33, a34, a35, a36) {
                if (!new.target) { throw 'must be called with new'; }
                this.a = a33;
                this.b = a35;
                this.f = F0;
            }
            const v37 = new F31(v3, v5, F31, a7);
            const v38 = new F31(v4, v5, v4, v37);
            new F31(v3, v3, v38, a7);
        },
        [F0]: a7,
        __proto__: v4,
        [a7]: v3,
    };
    return o40;
}
let v41 = f6(v5);
const v42 = f6(v5);
f6(v4);
function F44(a46, a47, a48) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a46;
    this.h = v5;
}
const v49 = new F44(f6, v5, v41);
new F44(v49, v5, v41);
new F44(v5, v3, v42);
if ("4294967297") {
    g = v41;
} else {
    v41 = v42;
    function f56() {
        return v5;
    }
}
class C57 {
    constructor(a59, a60) {
        ("4294967297").replaceAll(a60, a59);
    }
}
new Int8Array(2);
new Int32Array(9);
new BigInt64Array(1024);
new C57(C57);
