function f0() {
}
function f8(a9, a10) {
    const o11 = {
        __proto__: "e",
        536870888: null,
        "b": a9,
        ..."compile",
        "g": 1233598292,
        [-2147483648]: null,
        9: "e",
        65536: a9,
        "h": a9,
        ..."e",
        "c": a10,
    };
    return o11;
}
f8(1073741824, -2147483648);
f8(1233598292, 1073741824);
f8(1233598292, -2147483648);
let [...v18] = "compile";
("string").length;
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
