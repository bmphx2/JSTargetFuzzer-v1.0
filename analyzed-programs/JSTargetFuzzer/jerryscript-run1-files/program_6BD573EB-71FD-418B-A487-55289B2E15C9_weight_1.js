class C3 {
    constructor(a5, a6) {
        delete this[128];
        try { this["values"](); } catch (e) {}
        const v11 = Symbol.iterator;
        const o20 = {
            [v11]() {
                let v13 = 10;
                const o19 = {
                    next() {
                        v13--;
                        const v17 = v13 == 0;
                        const o18 = {
                            "done": v17,
                            "value": v13,
                        };
                        return o18;
                    },
                };
                return o19;
            },
        };
    }
}
const v21 = new C3(65537, 65537);
const v22 = new C3(268435456, -1665583733);
const v23 = `
    const v24 = ~-1665583733;
    try { v22["p"]("p", v22, "p", v24, v24); } catch (e) {}
`;
eval(v23);
const v29 = new C3(-1665583733, 65537);
function f33(a34, a35) {
    const o42 = {
        __proto__: a34,
        "b": v22,
        5: 268435456,
        "g": a35,
        [268435456]: a34,
        "d": a34,
        "c": -3n,
        get a() {
            v21[-533375884n] = v21;
            v29[this] = this;
            const v37 = new C3(a35, -1665583733);
            try { v22.toString(v37, v37, C3); } catch (e) {}
            return v29;
        },
    };
    return o42;
}
f33(f33(v22, -1665583733), -1665583733);
f33(v22, -1665583733);
const v51 = new Uint32Array(181);
let v53 = BigUint64Array;
let v54 = new v53(1);
let v55 = 253;
[v55,,v53,v54] = v51;
try { v53["abs"](181, v55, v53); } catch (e) {}
new Uint16Array(v55);
for (let i68 = 0; i68 < 2; i68++) {
    const v74 = new Function("x");
    v74.name;
}
Function();
