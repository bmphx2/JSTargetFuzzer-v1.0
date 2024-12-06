let v0 = 1;
class C3 {
    static toString(a5) {
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
        return a5;
    }
}
new C3();
new C3();
let v19 = new C3();
function f23() {
    return 9007199254740990;
}
const v24 = /a\bca\fb\nc\rd\te\vf/ysu;
const v25 = [v24,v24,v24,v24,v24];
function f26(a27) {
    return a27;
}
class C28 extends f26 {
}
({"source":v0,"sticky":v19,} = v24);
const t38 = -65535;
t38[6] = C28;
try { v24.test(v0); } catch (e) {}
C28[f23] >>= 4096;
new Uint16Array(3);
new print(22);
new Float64Array(221);
for (let i41 = 0, i42 = 10; i41 < i42;) {
    ({"f":i42,"length":i41,...C28} = v25);
}
