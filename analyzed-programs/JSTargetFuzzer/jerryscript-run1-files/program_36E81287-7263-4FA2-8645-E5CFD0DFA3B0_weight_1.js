function f0() {
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a6;
}
new F4(-9223372036854775807n);
const v8 = new F4(-9223372036854775807n);
new F4(-1073741824n);
function f13() {
}
function f14() {
    const v19 = new Uint16Array(224);
    const t13 = "toString";
    t13[6] = Uint16Array;
    for (const v20 of "string") {
        ("string").codePointAt(...v19);
    }
    const o27 = {
        get g() {
            new f13();
            return f13;
        },
        __proto__: "toString",
        "c": -1073741824n,
        [v8]: 257n,
        7: v19,
        ["d"]: "string",
        "h": f13,
        ...f13,
        "g": f13,
        "a": f13,
        ...f13,
    };
    return o27;
}
f14();
const v29 = f14();
f14();
let v33 = Int32Array;
let v34 = new v33(4096);
new Uint32Array(129);
let v40 = new Int16Array(512);
[,v33,v40,v34] = v40;
v29.g += 4096;
const v42 = Symbol.iterator;
const o51 = {
    [v42]() {
        let v44 = 10;
        const o50 = {
            next() {
                v44--;
                const v48 = v44 == 0;
                const o49 = {
                    "done": v48,
                    "value": v44,
                };
                return o49;
            },
        };
        return o50;
    },
};
