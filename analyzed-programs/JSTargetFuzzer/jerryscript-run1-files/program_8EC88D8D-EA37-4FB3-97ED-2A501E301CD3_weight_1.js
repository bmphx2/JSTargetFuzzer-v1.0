class C1 {
    10;
    static get f() {
        function f3(a4) {
            const o5 = {
                "h": a4,
                ...this,
            };
            return o5;
        }
        f3(f3(f3));
        f3(f3);
        return this;
    }
}
const v9 = new C1();
const v10 = new C1();
const v11 = new C1();
function f12(a13) {
    const o20 = {
        __proto__: a13,
        ...C1,
        "c": a13,
        "a": a13,
        "g": v11,
        set h(a15) {
            try { a15(a13, v9, a15, v11, a13); } catch (e) {}
            [0,55257498,536870889,-6,-4096];
            [-6,11,435003228,1694517399,-658599972,-9223372036854775807];
            [122235629,4294967295,-5];
        },
    };
    return o20;
}
f12(C1);
async function* f22(a23, a24, a25) {
    const v27 = Symbol.iterator;
    const o36 = {
        [v27]() {
            let v29 = 10;
            const o35 = {
                next() {
                    v29--;
                    const v33 = v29 == 0;
                    const o34 = {
                        "done": v33,
                        "value": v29,
                    };
                    return o34;
                },
            };
            return o35;
        },
    };
    await C1;
    yield v11;
    return C1;
}
f22(v11, v10, v9);
f12(v11);
f12(v10);
new Float32Array(3701);
const v50 = new Int32Array();
const v51 = new Int32Array();
function F52(a54) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v51;
    this.e = v50;
}
new Int32Array(6);
new Float32Array(0);
[-Infinity];
const o62 = {
    set a(a61) {
    },
};
for (let v63 = 0; v63 < 5; v63++) {
    o62.a;
}
[-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v67 = [13,9,-12559,-8,-4294967297];
let v68 = [65535,-1139741600];
new Uint8Array(v67);
let v71 = -41990;
const v72 = v68++;
let v73 = --v71;
function f74() {
    return f74;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v73 * (v72 << v71);
