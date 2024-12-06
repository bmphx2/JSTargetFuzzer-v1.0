const v7 = new WeakSet();
function f8(a9, a10) {
    const o27 = {
        __proto__: v7,
        ...v7,
        [a10](a12, a13, a14, a15) {
            const v17 = Symbol.iterator;
            const o26 = {
                [v17]() {
                    let v19 = 10;
                    const o25 = {
                        next() {
                            v19--;
                            const v23 = v19 == 0;
                            const o24 = {
                                "done": v23,
                                "value": v19,
                            };
                            return o24;
                        },
                    };
                    return o25;
                },
            };
            return a12;
        },
    };
    return o27;
}
f8(1000000000.0, f8(1.0, -3));
f8(-995.7649477049077, f8);
const v33 = new Float32Array(7);
new Int32Array(140);
new Float32Array(3);
new Float32Array(16);
new BigUint64Array(129);
const v51 = new Float32Array(837);
class C55 {
    constructor(a57) {
        const v59 = [];
        const v60 = ("SevCf").trimStart;
        Reflect.apply(v60, this, v59);
        -2.220446049250313e-16 & v60;
    }
    static o(a64, a65) {
        let v67 = Uint8Array;
        v67 = a64;
        v33[6] = 8;
        new v67(8);
        new Uint16Array(181);
        new Int32Array(367);
        return Uint16Array;
    }
}
const v78 = new C55(-20593);
const v79 = new C55(-2.220446049250313e-16);
const v80 = new C55(v78);
const v82 = new Set();
function f83() {
    return "SevCf";
}
class C84 extends f83 {
    65537;
    constructor(a86, a87) {
        super();
        switch (a86) {
            default:
                --a86;
                var d = v80;
                break;
        }
        v82 % this;
        const v91 = Symbol.iterator;
        const o105 = {
            [v91]() {
                const o104 = {
                    next() {
                        let v94 = this;
                        let v95;
                        try { v95 = C84(268435440, ...v51, v94, v94, v94, 268435440); } catch (e) {}
                        super.replaceAll("SevCf", v95);
                        v94--;
                        const v102 = 10 == 0;
                        const o103 = {
                            "done": v102,
                            "value": 10,
                        };
                        return o103;
                    },
                };
                return o104;
            },
        };
    }
}
const v106 = new C84(v79, v80);
const v107 = new C84(v78, C84);
new C84(C55, v107);
v79[v79 | v79];
if (v82 == v106) {
    let v116 = 436817333;
    const v117 = v116--;
    let v118 = ~C84;
    Math.clz32(v116);
    --v118;
    Math.sin(v118);
    v118 ^ v117;
    !"string";
} else {
    C84.valueOf = Set;
}
