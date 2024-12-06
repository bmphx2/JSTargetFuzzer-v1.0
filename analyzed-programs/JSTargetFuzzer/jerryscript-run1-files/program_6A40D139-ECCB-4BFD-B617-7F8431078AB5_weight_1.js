const v4 = ["string",["string","string","toString","string","growable"]];
const v5 = ["string","string","string"];
("string").length;
let v10;
try {
const t0 = "growable";
v10 = new t0(-14, -2147483648, -14, ...-14, ..."toString");
} catch (e) {}
const v15 = new WeakSet();
function f16(a17, a18) {
    const o28 = {
        "f": a18,
        toString(a20, a21, a22) {
            a20 = a17;
            return v10;
        },
        __proto__: v4,
        "c": a18,
        "b": "string",
        "g": v5,
        ...v5,
        ..."growable",
        "d": -2147483648,
        get g() {
            const v26 = Symbol.species[f16];
            const t25 = "growable";
            delete t25[12];
            super.e = v26;
            return v26;
        },
        "b": a17,
        /*
        __proto__: a18,
        */
        [-65537n]: a17,
        "d": "toString",
        "e": v15,
    };
    return o28;
}
f16("toString", v4);
f16("toString", v4);
f16("growable", v4);
let v32 = 10;
for (; v32--;) {
    v10 = f16;
}
Date.parse("string");
