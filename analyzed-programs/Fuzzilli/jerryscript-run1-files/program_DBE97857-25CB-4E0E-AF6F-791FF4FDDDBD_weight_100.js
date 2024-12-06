function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 2147483648;
    this.a = 2147483648;
    this.f = 2147483648;
}
new F0();
new F0();
new F0();
new Int8Array(9);
new Float64Array(4);
new BigInt64Array(254);
function f15() {
    const o24 = {
        "c": 1.7007219033055525e+308,
        [-52196]: 1.7007219033055525e+308,
        m(a20, a21) {
            a20[4294967296] &= this;
            this[a20];
            this - a20;
            return this;
        },
        "a": 1.7007219033055525e+308,
        "g": -52196,
        "b": -52196,
        [f15]: "Du",
        "e": "Du",
        __proto__: "Du",
    };
    return f15;
}
const v25 = f15();
const t31 = f15();
t31();
const v31 = new Uint32Array(256);
const v35 = new Proxy([Uint32Array,Uint32Array,v31], [Uint32Array]);
const v36 = new v25();
let v39 = 268435440;
do {
    v39++;
} while ((() => {
        function f46() {
            return -4;
        }
        ("f").length;
        return v39 < 1;
    })())
new Map();
new Uint32Array(Uint16Array);
let [,v65,,v66] = [];
function f71(a72) {
    const o99 = {
        [10](a74, a75) {
            [a72];
            new WeakMap();
            let v81 = 536870887;
            --v81;
            v35 - Int16Array;
            const v85 = -v81;
            v66++;
            v35 >>> v85;
            const v88 = [a72,-6];
            [v88];
            let v92 = 5.0;
            const v93 = v92 + v85;
            v92--;
            a72--;
            v93 * v92;
            ~a72;
            Math.asin(128);
            return v88;
        },
        2: a72,
        [a72]: 1512,
        "c": 1512,
        "g": 10,
        __proto__: a72,
        "d": a72,
        ...a72,
        "h": 10,
        /*
        __proto__: 10,
        */
    };
    return o99;
}
const v100 = f71(10);
const v101 = f71(10);
const v102 = f71(1512);
const v103 = v101.__proto__;
try { v103(v100, 1512, v102, f71, v102); } catch (e) {}
const o105 = {
};
const t93 = o105.__proto__;
t93[8] = 3;
for (const v107 in "construct") {
    function f110(a111, a112) {
        const o113 = {
            [a111]: "bigint",
            "c": "callee",
            "h": a111,
            [a112]: v66,
            ...a111,
            "e": "bigint",
            "a": a112,
            ...a111,
            ...a112,
            ..."callee",
            "g": "bigint",
        };
        Symbol.toStringTag;
        class C116 {
            constructor(a118, a119) {
                for (let i122 = 0, i123 = 10; this < i123;) {
                }
            }
            /*
            constructor(a130, a131, a132) {
                let v133 = delete this[this];
                v133 /= v133;
            }
            */
            static get a() {
                class C135 {
                    7 = C116;
                    c = this;
                    0 = C116;
                }
                new C135();
                new C135();
                new C135();
                return C135;
            }
        }
        return "bigint";
    }
    f110 /= v36;
}
