function f0() {
    const o8 = {
        "a": 4096,
        ["tKuLb"]: 4096,
        ..."tKuLb",
        m(a5) {
            a5 = this;
            const v6 = "tKuLb";
            ("message").__proto__;
            return a5;
        },
        "h": "message",
    };
    return o8;
}
const v9 = f0();
const v10 = f0();
const v11 = f0();
function f12() {
    return f0;
}
function F13(a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a15;
}
new F13(v11);
const v17 = new F13(v10);
const v18 = new F13(v10);
const v20 = [f12,[v18,v9,v17],v10,f12,f12];
[F13,v17,v20,v20,v11];
const v23 = Symbol.iterator;
let o32 = {
    [v23]() {
        let v25 = 10;
        const o31 = {
            next() {
                v25--;
                const v29 = v25 == 0;
                const o30 = {
                    "done": v29,
                    "value": v25,
                };
                return o30;
            },
        };
        return o31;
    },
};
typeof f0 === "boolean";
o32 = v17;
const v38 = v20;
try { Array.from(Uint8ClampedArray, RegExp); } catch (e) {}
