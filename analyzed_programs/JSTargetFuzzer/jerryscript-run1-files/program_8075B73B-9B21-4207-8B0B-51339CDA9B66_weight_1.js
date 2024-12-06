function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = false;
}
let v3 = new F1();
new F1();
const v5 = new F1();
class C10 extends F1 {
    static valueOf(a12, a13, a14) {
        ({"f":a13,"h":v3,} = v5);
        const t10 = "boolean";
        t10.length ^= v3;
        const v19 = Symbol.iterator;
        const o28 = {
            [v19]() {
                let v21 = 10;
                const o27 = {
                    next() {
                        v21--;
                        const v25 = v21 == 0;
                        const o26 = {
                            "done": v25,
                            "value": v21,
                        };
                        return this;
                    },
                };
                return o27;
            },
        };
        return 257;
    }
}
new C10();
new C10();
new C10();
function f35(a36) {
    const o43 = {
        "a": 1000,
        "f": a36,
        1073741824: -9007199254740992,
        [-9007199254740992]: 9007199254740990,
        64: -9007199254740992,
        o(a38) {
            try { new a38(a38, 9007199254740990, 1000, this, 1000); } catch (e) {}
            return 1000;
        },
    };
    return o43;
}
f35(1000);
f35(-9007199254740992);
f35(-9007199254740992);
let v55 = 6;
v55 = 1000;
let v58 = 65536;
Math.abs(-9223372036854775808);
const v61 = -9.44001634896165e+306 * -9.44001634896165e+306;
let v62 = (-9.44001634896165e+306) ** -9.44001634896165e+306;
-9.44001634896165e+306 || v61;
v62--;
--v58;
