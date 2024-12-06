function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -6;
    this.g = -6;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    v4.h = a8;
    this.b = a8;
}
new F6(v3);
new F6(v3);
new F6(v4);
const v15 = [-0.0,-62005.4832069563,-796.7184022897094,1.7976931348623157e+308,-1.0,5.0,471507.71410557977];
const v16 = [-3.0,22175.46802635526,-1000000.0,-1e-15,-1000000.0,842.1164031164237,3.0,710202.0348831015,-8.0195554739415e+307,-3.0];
let v17 = [1.7976931348623157e+308];
function f18() {
    return v15;
}
new WeakMap();
let v22 = 582866721;
let v23 = -10;
const v24 = [-1.7976931348623157e+308,NaN,4.0,-3.0,0.7202116682743733,0.10722414533286673];
const v25 = [-1e-15,0.786904425348982,1000000000.0];
const v26 = [-1000.0,-Infinity,-3.0];
const o27 = {
    "apply": f18,
    "getOwnPropertyDescriptor": f18,
    "preventExtensions": f18,
    "set": f18,
};
new Proxy(v5, o27);
v23 = v22;
const v30 = v25[v24];
const v31 = v26[9];
v17 = v26;
const v34 = typeof v31 === "object";
function* f36(a37, a38) {
    new f36();
    let v42 = 2147483647;
    v42 += v42;
    function F43(a45, a46) {
        if (!new.target) { throw 'must be called with new'; }
        this.a = a45;
    }
    new F43(3.0, a38);
    new F43(v30, 60059);
    new F43(-289352.7871606037, 9902);
    yield* v16;
    return v24;
}
const v50 = f36(v24, v23);
const v53 = [8,0,4294967297,-33048,6,1000,983207413];
const v56 = Symbol.toPrimitive;
const o88 = {
    [v56]() {
        const v59 = Symbol.iterator;
        const o87 = {
            [v59]() {
                const o67 = {
                    next() {
                        v22--;
                        const v65 = 10 == 0;
                        const o66 = {
                            "done": v65,
                            "value": 10,
                        };
                        return o66;
                    },
                };
                for (let i69 = 0; i69 < 7; i69++) {
                    const v77 = Symbol.iterator;
                    const o86 = {
                        [v77]() {
                            let v79 = 10;
                            const o85 = {
                                next() {
                                    v79--;
                                    const v83 = v79 == 0;
                                    const o84 = {
                                        "done": v83,
                                        "value": v79,
                                    };
                                    return o84;
                                },
                            };
                            return o85;
                        },
                    };
                }
                return o67;
            },
        };
        return "splice";
    },
};
try { v26["splice"](...v53, ...v50, ...v34, ...v26, v23); } catch (e) {}
("object")[2617003312];
~f36;
const v95 = [8];
[-13,-465622521,22703];
let v99 = "toString";
-2.2250738585072014e-308 ^ 674250.9577052628;
const v104 = (a105, a106) => {
    a105.length;
    v99 = "number";
    return 570009.5976097113;
};
570009.5976097113 / v22;
"number" ^ 0.4059163013705742;
v95["forEach"](v104, "forEach");
