function f0() {
    const o4 = {
        "a": -1000000.0,
        "d": "h",
        "b": "h",
        "e": -1000000.0,
        "h": -1000000.0,
        [-1000000.0]: "D0ja",
        __proto__: "h",
        2383: -1000000.0,
        ["D0ja"]: -1000000.0,
        "c": "h",
        "g": "h",
        34: "h",
        6: "h",
        "f": -1000000.0,
    };
    return o4;
}
f0();
f0();
f0();
const v10 = new Int16Array(78);
const v13 = new Uint32Array(1259);
const v16 = new Uint32Array(1);
class C17 {
    f = Uint32Array;
    static f = v13;
    static #e = v10;
    static #valueOf(a19, a20, a21, a22) {
        try { a21(); } catch (e) {}
        for (let v24 = 0; v24 < 32; v24++) {
            a22["p" + v24] = v24;
        }
        return 1259;
    }
    static h = v13;
    c;
}
new C17();
new C17();
const v29 = new C17();
v13 & v29;
v16[1] = Uint32Array;
delete v29?.f;
const v33 = Symbol.iterator;
const o42 = {
    [v33]() {
        let v35 = 10;
        const o41 = {
            next() {
                v35--;
                const v39 = v35 == 0;
                const o40 = {
                    "done": v39,
                    "value": v35,
                };
                return o40;
            },
        };
        return o41;
    },
};
