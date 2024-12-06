function f0() {
    const o8 = {
        6: -0.9063234599209213,
        1073741824: -1.0,
        ["boolean"]: -1.0,
        "a": -0.9063234599209213,
        [-1.0]: -1.0,
        [-0.9063234599209213]: -0.9063234599209213,
        "c": -0.9063234599209213,
        "b": -1.0,
        ["boolean"](a5, a6) {
            let v4 = this;
            v4 = a6;
            try { v4.padStart(a5, "boolean", v4); } catch (e) {}
            return v4;
        },
    };
    return o8;
}
let v9 = f0();
const v10 = f0();
const v11 = f0();
function F13(a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a15;
}
let v16 = new F13(v9);
const v17 = new F13(v10);
let v18 = new F13(v17);
function F22(a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a25;
    this.g = 255n;
}
new F22(v9, v16);
new F22(v11, v17);
new F22(v11, v16);
v9 = v10;
({"d":v18,...v16} = v17);
let {"a":v32,"b":v33,"c":v34,...v35} = v11;
const v38 = Symbol.iterator;
const o47 = {
    [v38]() {
        let v40 = 10;
        const o46 = {
            next() {
                v40--;
                const v44 = v40 == 0;
                const o45 = {
                    "done": v44,
                    "value": v40,
                };
                return o45;
            },
        };
        return o46;
    },
};
