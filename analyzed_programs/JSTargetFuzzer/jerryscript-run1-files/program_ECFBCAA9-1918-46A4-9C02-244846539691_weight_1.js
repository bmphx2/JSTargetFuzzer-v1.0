function f0() {
    +null;
    const o6 = {
        ..."substring",
        ..."number",
        "c": "number",
        268435440: "substring",
        [-1.3811681541445356e+308]: "number",
        ["substring"]: "substring",
        ["number"]: -1.3811681541445356e+308,
        __proto__: "number",
        "h": "number",
        "a": "substring",
        268435439: "number",
        ..."number",
        ..."number",
        "f": "substring",
    };
    return o6;
}
const v7 = f0();
const v8 = f0();
const v9 = f0();
const v11 = [v8,false,v7,v8];
const v12 = [v9,v11,v11,false,v7];
const v13 = [v12,false];
function f17(a18, a19) {
    let v22 = -1489112994;
    if ("o") {
        v22 += -65537;
    }
    const o39 = {
        "f": a18,
        "g": -3,
        __proto__: v7,
        ...v7,
        ...v8,
        "c": v13,
        "a": a18,
        256: a18,
        "h": v11,
        o(a24, a25, a26, a27) {
            super.c = a19;
            const v29 = Symbol.iterator;
            const o38 = {
                [v29]() {
                    let v31 = 10;
                    const o37 = {
                        next() {
                            v31--;
                            const v35 = v31 == 0;
                            const o36 = {
                                "done": v35,
                                "value": v31,
                            };
                            return o36;
                        },
                    };
                    return o37;
                },
            };
            return a18;
        },
    };
    return o39;
}
f17(v12, 5294);
f17(f17, -3);
f17(-3, 5294);
-2147483649n >> 5n;
