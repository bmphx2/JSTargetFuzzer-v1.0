new Int32Array(2);
new Uint16Array(255);
new BigUint64Array(2583);
new Date();
function f14() {
    const o31 = {
        set e(a19) {
            a19[this] = 3.402585846413614e+307;
            const v21 = Symbol.iterator;
            const o30 = {
                [v21]() {
                    let v23 = 10;
                    const o29 = {
                        next() {
                            v23--;
                            const v27 = v23 == 0;
                            const o28 = {
                                "done": v27,
                                "value": v23,
                            };
                            return o28;
                        },
                    };
                    return o29;
                },
            };
        },
    };
    return o31;
}
const v32 = f14();
const v33 = f14();
f14();
class C35 extends f14 {
    static toString(a37, a38) {
        let v39;
        try { v39 = this.o(v32); } catch (e) {}
        v39[this] /= v39;
        const v40 = [7,62734,-1249744538,1627,-53847];
        [-16119];
        [-9007199254740990,268435456];
        return v40;
    }
    valueOf(a44) {
        Object.defineProperty(v32, "e", { writable: true, configurable: true, enumerable: true, get: f14 });
        const o45 = {
            __proto__: v33,
            "g": a44,
            1000: a44,
        };
        return v33;
    }
}
new C35();
const v47 = new C35();
const v48 = new C35();
const v53 = [-1073741824,-2147483649,49752,1073741825,65537,-10,1033686903];
[9007199254740992,2147483647,0,-128];
const v55 = [-15];
let v56 = this;
const v57 = v48.__proto__;
v56 = v56;
v33.d = v47;
v53[v55] %= v57;
function F59(a61, a62, a63) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = "bigint";
    this.h = C35;
    this.c = a61;
}
new F59(v32, v56, v33);
new F59(v57, v56, v48);
new F59("QGv", this, v33);
