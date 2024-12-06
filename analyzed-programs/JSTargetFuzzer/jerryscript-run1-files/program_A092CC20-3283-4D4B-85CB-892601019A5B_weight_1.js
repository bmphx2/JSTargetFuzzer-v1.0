const v0 = [];
class C1 {
    static p() {
        this >>> this;
        const v5 = Symbol.iterator;
        const o16 = {
            [v5]() {
                let v7 = 10;
                const o15 = {
                    next() {
                        v7--;
                        const v11 = v7 == 0;
                        const o14 = {
                            set g(a13) {
                            },
                            "done": v11,
                            "value": v7,
                        };
                        return o14;
                    },
                };
                return o15;
            },
        };
        return v0;
    }
}
const v17 = new C1();
const v18 = new C1();
const v19 = new C1();
function f20(a21) {
    const o28 = {
        "g": v17,
        get b() {
            a21.__proto__;
            new WeakMap();
            return WeakMap;
        },
        "f": C1,
        "h": v0,
        p(a27) {
            switch (v19) {
            }
            return v18;
        },
        ...a21,
    };
    return o28;
}
const v29 = f20(v18);
f20(v29);
const v31 = f20(v0);
function F32(a34, a35, a36, a37) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a36;
    this.e = v29;
    this.f = a37;
}
const v38 = new F32(C1, C1, v29, v29);
new F32(v19, v31, v38, v29);
new F32(v17, v0, v38, v29);
let v41 = -1024n;
v41 >>= v41;
