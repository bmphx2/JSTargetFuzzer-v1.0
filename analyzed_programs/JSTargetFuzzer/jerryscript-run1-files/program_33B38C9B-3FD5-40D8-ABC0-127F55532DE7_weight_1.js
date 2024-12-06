function f0() {
    const o10 = {
        "a": 4096,
        ["tKuLb"]: 4096,
        ..."tKuLb",
        m(a5) {
            a5 = this;
            const v6 = "tKuLb";
            ("message").__proto__;
            0.0 << 0.0;
            return a5;
        },
        "h": "message",
    };
    return o10;
}
const v11 = f0();
const v12 = f0();
const v13 = f0();
function f14() {
    return f0;
}
function F15(a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a17;
}
new F15(v13);
const v19 = new F15(v12);
const v20 = new F15(v12);
const v22 = [f14,[v20,v11,v19],v12,f14,f14];
[F15,v19,v22,v22,v13];
const v25 = Symbol.iterator;
let o34 = {
    [v25]() {
        let v27 = 10;
        const o33 = {
            next() {
                v27--;
                const v31 = v27 == 0;
                const o32 = {
                    "done": v31,
                    "value": v27,
                };
                return o32;
            },
        };
        return o33;
    },
};
typeof f0 === "boolean";
o34 = v19;
const v40 = v22;
try { Array.from(Uint8ClampedArray, RegExp); } catch (e) {}
