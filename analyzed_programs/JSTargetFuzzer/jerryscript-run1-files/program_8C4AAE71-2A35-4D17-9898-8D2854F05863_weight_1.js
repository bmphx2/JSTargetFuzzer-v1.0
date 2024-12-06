function f0() {
    const o14 = {
        __proto__: "function",
        "h": "function",
        o(a5, a6) {
            const v8 = Symbol.toPrimitive;
            const o13 = {
                [v8]() {
                    for (let v10 = 0; v10 < 32; v10++) {
                        this["p" + v10] = v10;
                    }
                    return "function";
                },
            };
            return o13;
        },
        [-2]: "function",
        "a": "function",
        "g": -34702507,
        "e": -34702507,
        ..."function",
    };
    return o14;
}
const v15 = f0();
const v16 = f0();
const v17 = f0();
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = f0;
    this.d = f0;
}
const v22 = new F18(v15, v16);
const v23 = new F18(v15, v17);
const v24 = new F18(v17, v22);
const v26 = [v16,f0,[v23,v15,v24],v24];
function* f27(a28, a29) {
    typeof a29 === "number";
    yield* v23;
    return a29;
}
f27(v16, v15);
[v26,F18,v24];
const v39 = new Uint16Array();
let {...v40} = v39;
