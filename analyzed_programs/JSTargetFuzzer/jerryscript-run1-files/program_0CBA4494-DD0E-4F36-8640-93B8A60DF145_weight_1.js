class C3 {
    set c(a5) {
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
    }
}
const v17 = new C3();
const v18 = new C3();
const v19 = new C3();
function f20(a21, a22) {
    const o42 = {
        ...v18,
        "e": a21,
        "d": v17,
        "g": a21,
        set h(a24) {
            a22.__proto__ = this;
            function f25() {
                return v19;
            }
            Object.defineProperty(C3, 128, { get: f20 });
            function F27(a29, a30, a31) {
                if (!new.target) { throw 'must be called with new'; }
                this.c = a29;
                this.g = a24;
            }
            const v32 = new F27(a21, v18, a21);
            new F27(v32, v17, v32);
            new F27(v17, a24, a21);
            const o41 = {
                get a() {
                    try {
                    } catch(e36) {
                        function f37(a38, a39, a40) {
                            return f37;
                        }
                    }
                    return this;
                },
            };
        },
        ...a21,
        ...C3,
        "b": a22,
        "a": C3,
        [v19]: a21,
    };
    return o42;
}
f20(v18, v19);
f20(v19, v19);
f20(v18, v19);
new Uint8Array(0);
const v52 = new Int32Array(129);
const v55 = new BigInt64Array(169);
[0.4659282130893555,-7.240102750313133,-321247.5483330466];
[-5.0,861703.2716650965,-920.344802942703,-558.7346435368617,0.030855282246346594,847697.8602930598,943634.1307008564,0.7666674547904692];
const t71 = [-2.0,4.0,-3.0,5.300459396949485e+307,4.0,1.7860964241890591e+308,1000000000.0,-2.0,0.15911456184575923,-1.1030684426976987e+308];
t71.__proto__ = v55;
if (41638 !== v55) {
    v52[Symbol.search];
} else {
}
class C65 {
    constructor(a67) {
        const v68 = [-1000000.0,535179.2230165782,-2.2250738585072014e-308,-730.4166423777232,-0.0,1000000.0];
        this.toString = a67;
        super.f;
        new WeakMap();
        try { a67(); } catch (e) {}
        v68.includes(a67);
    }
}
new Int8Array(129);
new BigUint64Array(64);
new Uint16Array(1024);
let v81 = 8n;
v81 &= 63703n;
