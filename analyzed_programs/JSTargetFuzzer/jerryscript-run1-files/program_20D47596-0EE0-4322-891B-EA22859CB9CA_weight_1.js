function f3(a4, a5) {
    const o25 = {
        [a4](a7, a8) {
            let v9;
            try { v9 = a7(this, a8, ...a7, ...a5, this, this); } catch (e) {}
            Object.defineProperty(v9, 7, { get: f3 });
            function f10() {
                return this;
            }
            ("symbol")[Symbol.unscopables];
            return "symbol";
        },
        __proto__: "valueOf",
        n(a15, a16, a17, a18) {
            const t14 = "undefined";
            t14[7] = this;
            for (let v19 = 0; v19 < 32; v19++) {
                const t17 = "symbol";
                t17["p" + v19] = v19;
            }
            return this;
        },
        "message": a4,
        ..."valueOf",
        [a5](a23, a24) {
            ({"e":a24,"g":a23,"length":a23,} = "symbol");
            return "valueOf";
        },
        127: a4,
    };
    return o25;
}
f3("valueOf", "symbol");
f3("valueOf", "symbol");
f3("undefined", "valueOf");
new Uint16Array(1000);
const v34 = new Uint16Array(1000);
new BigUint64Array(257, BigUint64Array, v34);
const o40 = {
    get f() {
        super.toStringTag = "v";
        return this;
    },
};
