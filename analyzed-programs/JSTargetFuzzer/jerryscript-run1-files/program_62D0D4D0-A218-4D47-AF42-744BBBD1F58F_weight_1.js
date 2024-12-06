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
    let v14 = 10;
    v14--;
    function f16() {
        for (let i18 = 0;
            (() => {
                const o19 = {
                };
                return i18 < 7;
            })();
            ) {
        }
        return v14;
    }
    const o38 = {
        "d": v5,
        p(a25, a26) {
            try {
                super.toString(a25, this, a26, a25);
            } catch(e28) {
            }
            function F29(a31, a32, a33, a34) {
                if (!new.target) { throw 'must be called with new'; }
                this.b = a34;
            }
            const v35 = new F29(f11, a25, F29, v3);
            const v36 = new F29(v6, a12, v10, v10);
            new F29(v35, v36, v5, v4);
            return v3;
        },
        __proto__: v3,
        "h": a12,
        [v5]: v4,
        65: a13,
    };
    return o38;
}
const v39 = f11(v5, v5);
const v44 = f11(f11, f11(v4, v5));
try { v44.p(F0, v44, v6, v44); } catch (e) {}
const v46 = f11(v5, v3);
class C47 {
    get b() {
        super.a = v3;
        const v49 = v46 <= v3;
        411.6748089872142 - 5;
        [6.587821035819711e+307,v6];
        const v54 = [2.5870964546644305e+306];
        for (let v55 = 0; v55 < 32; v55++) {
            v54["p" + v55] = v55;
        }
        return v49;
    }
    [v46];
    constructor(a59, a60, a61, a62) {
        const v64 = Symbol.iterator;
        const o73 = {
            [v64]() {
                let v66 = 10;
                const o72 = {
                    next() {
                        v66--;
                        const v70 = v66 == 0;
                        const o71 = {
                            "done": v70,
                            "value": v66,
                        };
                        return this;
                    },
                };
                return o72;
            },
        };
    }
}
const v74 = new C47(v3, v5, C47, v5);
new C47(v3, v4, C47, v74);
new C47(v5, v4, v39, C47);
function* f78(a79, a80, a81, a82) {
    yield* "object";
    return a80;
}
f78(f78, "object", "object", "object");
