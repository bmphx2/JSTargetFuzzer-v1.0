const v0 = [];
function f1() {
    return v0;
}
function f2() {
    return f1;
}
const v4 = new WeakSet();
function f5(a6, a7) {
    const o11 = {
        ...v0,
        "f": a7,
        ...v4,
        set d(a9) {
            function f10() {
                return this;
            }
        },
        [a7]: a7,
        __proto__: v4,
    };
    return o11;
}
f5(f5, WeakSet);
f5(v4, f5);
f5(f5, WeakSet);
new Float32Array(16);
new BigUint64Array(129);
[...[612.4534697791091,-1000.0,2.220446049250313e-16],[1220965441,476008270,4294967296,-4096,-9007199254740990,4294967297,256,-9223372036854775808]];
new Float32Array(837);
class C36 {
    constructor(a38) {
        const v40 = [];
        const v41 = ("SevCf").trimStart;
        Reflect.apply(v41, this, v40);
        -2.220446049250313e-16 & v41;
    }
    static o(a45, a46) {
        new Uint8Array(8);
        new Uint16Array(181);
        new Int32Array(367);
        return Uint16Array;
    }
}
const v56 = new C36(-20593);
const v57 = new C36(-2.220446049250313e-16);
const v58 = new C36(v56);
const v60 = new Set();
function f61() {
    return "SevCf";
}
class C62 extends f61 {
    65537;
    constructor(a64, a65) {
        super();
        switch (a64) {
            default:
                --a64;
                var d = v58;
                break;
        }
        v60 % this;
        const v69 = Symbol.iterator;
        const o78 = {
            [v69]() {
                const o77 = {
                    next() {
                        let v72 = this;
                        v72--;
                        const v75 = 10 == 0;
                        const o76 = {
                            "done": v75,
                            "value": 10,
                        };
                        return o76;
                    },
                };
                return o77;
            },
        };
    }
}
const v79 = new C62(v57, v58);
const v80 = new C62(v56, C62);
const v81 = new C62(C36, v80);
v57 | v57;
v57[v81];
if (v60 == v79) {
    let v89 = 436817333;
    const v90 = v89--;
    let v91 = ~C62;
    Math.clz32(v89);
    --v91;
    Math.sin(v91);
    v91 ^ v90;
    !"string";
} else {
    C62.valueOf = Set;
}
