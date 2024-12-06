function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -9223372036854775808;
    this.e = -9223372036854775808;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
let v6;
try { v6 = v3.getUTCDay(v5); } catch (e) {}
delete v3[3970];
v6 instanceof F0;
let v10;
try { v10 = v3["n"](v3, v6); } catch (e) {}
function f11(a12, a13) {
    const o28 = {
        "d": v5,
        p(a15, a16) {
            try {
                super.toString(a15, this, a16, a15);
            } catch(e18) {
            }
            function F19(a21, a22, a23, a24) {
                if (!new.target) { throw 'must be called with new'; }
                this.b = a24;
            }
            const v25 = new F19(f11, a15, F19, v3);
            const v26 = new F19(v6, a12, v10, v10);
            new F19(v25, v26, v5, v4);
            return v3;
        },
        __proto__: v3,
        "h": a12,
        [v5]: v4,
        65: a13,
    };
    return o28;
}
const v29 = f11(v5, v5);
const v34 = f11(f11, f11(v4, v5));
try { v34.p(F0, v34, v6, v34); } catch (e) {}
const v36 = f11(v5, v3);
class C37 {
    get b() {
        super.a = v3;
        return v36 <= v3;
    }
    [v36];
    constructor(a41, a42, a43, a44) {
        const v46 = Symbol.iterator;
        const o55 = {
            [v46]() {
                let v48 = 10;
                const o54 = {
                    next() {
                        v48--;
                        const v52 = v48 == 0;
                        const o53 = {
                            "done": v52,
                            "value": v48,
                        };
                        return this;
                    },
                };
                return o54;
            },
        };
    }
}
const v56 = new C37(v3, v5, C37, v5);
new C37(v3, v4, C37, v56);
new C37(v5, v4, v29, C37);
function* f60(a61, a62, a63, a64) {
    yield* "object";
    return a62;
}
f60(f60, "object", "object", "object");
