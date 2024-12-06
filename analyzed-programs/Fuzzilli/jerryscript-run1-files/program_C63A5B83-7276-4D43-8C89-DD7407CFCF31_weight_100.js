function f3(a4, a5) {
    const o10 = {
        __proto__: a4,
        "c": 6,
        "g": -9007199254740992,
        "e": a4,
        "b": -9007199254740992,
        [a5](a7) {
            this[127] = a7;
            this[a5] = a4;
            delete this[a7];
            function f9() {
                return 6;
            }
            return this;
        },
    };
    return o10;
}
const v11 = f3(6, 1424);
const v12 = f3(-9007199254740992, 6);
const v13 = f3(6, -9007199254740992);
const v14 = [880065.2262756049,6.924849294861547e+306,-0.0,0.0,23.279078825774604];
const v15 = [9.31291318423635e+307,699525.0742390382,341.89492848273926,-1000.0,-1.1286246856175641e+308,0.0];
const v16 = [Infinity,3.0,426.4866173356522,758091.8644525749,5.0,2.2250738585072014e-308,4.0,9.675177774843814,-0.0];
delete v12[v16];
v16[5] = v12;
function F18(a20, a21, a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 1424;
    this.f = a20;
}
new F18(v11, v11, 6, v14);
new F18(-9007199254740992, v11, -9007199254740992, v14);
const v26 = new F18(f3, v13, 1424, v15);
const o27 = {
    "getOwnPropertyDescriptor": f3,
};
new Proxy(v26, o27);
