function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -9223372036854775807;
    this.g = -9223372036854775807;
    this.b = -9223372036854775807;
}
new F0();
const v4 = new F0();
const v5 = new F0();
new Uint16Array(3);
new Int32Array(3446);
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a19;
}
new F17(1, v5);
new F17(3, v5);
new F17(3, v4);
new BigUint64Array(1);
new Float32Array(16);
new BigUint64Array(129);
new Float32Array(837);
class C40 {
    constructor(a42) {
        const v44 = [];
        const v45 = ("SevCf").trimStart;
        Reflect.apply(v45, this, v44);
        -2.220446049250313e-16 & v45;
    }
    static o(a49, a50) {
        new Uint8Array(8);
        new Uint16Array(181);
        new Int32Array(367);
        return Uint16Array;
    }
}
const v60 = new C40(-20593);
const v61 = new C40(-2.220446049250313e-16);
const v62 = new C40(v60);
const v64 = new Set();
function f65() {
    return "SevCf";
}
class C66 extends f65 {
    65537;
    constructor(a68, a69) {
        super();
        switch (a68) {
            default:
                --a68;
                var d = v62;
                break;
        }
        v64 % this;
        const v73 = Symbol.iterator;
        const o82 = {
            [v73]() {
                const o81 = {
                    next() {
                        let v76 = this;
                        v76--;
                        const v79 = 10 == 0;
                        const o80 = {
                            "done": v79,
                            "value": 10,
                        };
                        return o80;
                    },
                };
                return o81;
            },
        };
    }
}
const v83 = new C66(v61, v62);
const v84 = new C66(v60, C66);
const v85 = new C66(C40, v84);
v61 | v61;
v61[v85];
if (v64 == v83) {
    let v93 = 436817333;
    const v94 = v93--;
    let v95 = ~C66;
    Math.clz32(v93);
    --v95;
    Math.sin(v95);
    v95 ^ v94;
    !"string";
} else {
    C66.valueOf = Set;
}
