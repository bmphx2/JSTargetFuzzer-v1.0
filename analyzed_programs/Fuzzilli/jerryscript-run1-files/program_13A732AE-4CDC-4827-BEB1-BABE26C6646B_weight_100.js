function f0() {
    const o17 = {
        set e(a5) {
            a5[this] = 3.402585846413614e+307;
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
        },
    };
    return o17;
}
const v18 = f0();
const v19 = f0();
f0();
class C21 extends f0 {
    static toString(a23, a24) {
        let v25;
        try { v25 = this.o(v18); } catch (e) {}
        v25[this] /= v25;
        [7,62734,-1249744538,1627,-53847];
        const v27 = [-16119];
        [-9007199254740990,268435456];
        return v27;
    }
    valueOf(a30) {
        Object.defineProperty(v18, "e", { writable: true, configurable: true, enumerable: true, get: f0 });
        const o31 = {
            __proto__: v19,
            "g": a30,
            1000: a30,
        };
        return v19;
    }
}
new C21();
const v33 = new C21();
const v34 = new C21();
const v39 = [-1073741824,-2147483649,49752,1073741825,65537,-10,1033686903];
[9007199254740992,2147483647,0,-128];
[-15];
let v42 = this;
const v43 = v34.__proto__;
v42 = v39;
v19.d = v33;
v39[v39] %= v43;
function F45(a47, a48, a49) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = "bigint";
    this.h = C21;
    this.c = a47;
}
new F45(v18, v42, v19);
new F45(v43, v42, v34);
new F45("QGv", this, v19);
