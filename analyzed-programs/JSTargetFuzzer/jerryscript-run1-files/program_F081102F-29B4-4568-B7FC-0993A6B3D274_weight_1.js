function f0() {
    const o4 = {
        __proto__: "-8",
        16: -2147483647,
        "e": -2147483647,
        ...f0,
        9: f0,
        "d": "string",
        256: "-8",
        [-1]: "-8",
        "b": f0,
        "h": -2147483647,
        ..."-8",
    };
    return o4;
}
const v5 = f0();
const v6 = f0();
const v8 = [f0,v6,v5,v6,f0()];
[v8,v8,v8,v6,v8];
const v10 = [v6];
const v12 = [9007199254740990];
v12.length = 13;
v12.lastIndexOf();
Symbol.for(v10);
Symbol.keyFor(Symbol.iterator);
