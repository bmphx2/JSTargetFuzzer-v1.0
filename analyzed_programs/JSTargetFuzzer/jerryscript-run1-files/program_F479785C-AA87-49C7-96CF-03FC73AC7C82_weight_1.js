const v6 = ["N",-830053.4301263245,3.09420078493841,3.09420078493841,-830053.4301263245];
const v7 = [v6];
const v8 = [3.09420078493841,v7,-830053.4301263245,1000000000.0,"N"];
function f9(a10, a11, a12) {
    const o30 = {
        "g": a11,
        __proto__: v7,
        "c": "N",
        m(a14, a15) {
            try { a12.shift(); } catch (e) {}
            /O^/isum;
            /(\xed\xb0\x80ia\D[^123]a{?)/gyism;
            const v20 = Symbol.iterator;
            const o29 = {
                [v20]() {
                    let v22 = 10;
                    const o28 = {
                        next() {
                            v22--;
                            const v26 = v22 == 0;
                            const o27 = {
                                "done": v26,
                                "value": v22,
                            };
                            return o27;
                        },
                    };
                    return o28;
                },
            };
            return o29;
        },
    };
    return o30;
}
const v31 = f9(v6, "N", v8);
const v32 = f9("-268435456", "N", v6);
f9(v32, "-268435456", v6);
Object.defineProperty(v7, "PI", { get: f9 });
function F35(a37, a38) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a38;
    this.g = a38;
}
new F35("-268435456", v31);
new F35("PI", v32);
new F35("N", v31);
const v45 = new Uint16Array();
let {...v46} = v45;
