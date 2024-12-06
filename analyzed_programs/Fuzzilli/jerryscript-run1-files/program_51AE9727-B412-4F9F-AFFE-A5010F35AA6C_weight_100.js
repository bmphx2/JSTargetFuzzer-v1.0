function f0() {
}
function f1() {
    const o8 = {
        ...f0,
        n() {
            Object.defineProperty(this, "g", { configurable: true, enumerable: true, set: f0 });
            const v3 = this[127];
            v3 - v3;
            return this;
        },
        "e": f0,
        [f0]: f0,
        "a": f0,
        "h": f0,
        __proto__: f0,
    };
    return o8;
}
const v9 = f1();
const v10 = f1();
f1();
[-65537,0];
const v16 = [128,1869970179,1073741824,62270,1757185637,244];
[9007199254740991,-65536,2021044023,15];
class C18 extends f1 {
    static #f = 14;
    get e() {
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
        return o30;
    }
}
const v31 = new C18();
new C18();
const v33 = new C18();
v33.a;
v31.a |= -128;
f0();
let [v39,v40,v41] = v16;
v31[2719] = v39;
C18.b = v9;
v10[1073741824] = v16;
