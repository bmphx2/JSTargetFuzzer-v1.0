function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 2147483649;
    this.f = 2147483649;
    this.c = 2147483649;
}
const v3 = new F0();
let v4 = new F0();
const v7 = Symbol.toPrimitive;
const o9 = {
    [v7]() {
        return 0;
    },
};
const v10 = new F0();
class C11 extends F0 {
    constructor(a13) {
        super();
        try {
            super.filter(this);
        } catch(e15) {
        }
    }
    get b() {
        let v16 = this;
        v4.b = v16;
        try {
            super.clear(v3, F0, v16);
        } catch(e18) {
        }
        v16[141];
        v16 = v10;
        return v3;
    }
}
const v20 = new C11(v4);
const v21 = new C11(C11);
const v22 = new C11(v4);
function f23(a24, a25, a26, a27) {
    const o41 = {
        [v3](a29, a30, a31) {
            super.f = a29;
            new Float64Array(127);
            new Uint8Array(7);
            const v40 = new Uint16Array(2491);
            return v40;
        },
        "e": a25,
        "h": a25,
        __proto__: v22,
        [a25]: f23,
        ...a27,
        "a": v4,
        497: v20,
        "c": a26,
        ...v21,
        [-2]: a26,
    };
    return o41;
}
f23(v21, f23(v10, v3, v4, v3), v22, v3);
f23(v3, v20, v21, F0);
new Int32Array(129);
new Uint32Array(64);
v4 = v22;
new C11(0);
const v54 = Symbol.iterator;
const o63 = {
    [v54]() {
        let v56 = 10;
        const o62 = {
            next() {
                v56--;
                const v60 = v56 == 0;
                const o61 = {
                    "done": v60,
                    "value": v56,
                };
                return o61;
            },
        };
        return o62;
    },
};
new Uint16Array(16);
const v66 = [6,9,-1089835214,268435441,-25858,-454143031,-1];
const v67 = [4,1038512201,65537,4096,8,1073741823,-1073741824];
const o68 = {
};
const v70 = Math.log10(Math);
v67[0] = v66;
o68[0] %= v70;
