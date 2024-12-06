function f0() {
    const o12 = {
        __proto__: "-1073741824",
        "h": -2.0,
        "g": f0,
        "c": NaN,
        "f": "-1073741824",
        "e": f0,
        "a": -2.0,
        "f": -2.0,
        valueOf(a5) {
            const o6 = {
                "defineProperty": f0,
            };
            new Proxy("-1073741824", o6);
            const v11 = new Array(1024);
            return v11;
        },
        "e": "-1073741824",
        ..."-1073741824",
        "g": -2.0,
        ..."-1073741824",
        "b": f0,
        "d": "-1073741824",
        1073741824: f0,
        237: -2.0,
        ..."-1073741824",
        "a": NaN,
    };
    return o12;
}
const v13 = f0();
const v14 = f0();
const v15 = f0();
function f16(a17, a18) {
    const o23 = {
        "c": a18,
        get g() {
            const o20 = {
                "defineProperty": f0,
                "isExtensible": f0,
                "ownKeys": f0,
                "set": f0,
                "g": f0,
                "h": v15,
                [this]: this,
                "f": this,
                "d": this,
                "setPrototypeOf": f0,
            };
            const v22 = new Proxy(this, o20);
            return v22;
        },
        "b": a17,
    };
    return o23;
}
Object.defineProperty(v13, "a", { configurable: true, get: f16 });
const v24 = v14 !== v14;
const v25 = v24 ? v14 : v14;
try { v13.valueOf(v24, v15, v25, ...v25, v13, v25); } catch (e) {}
v25[1073741823] = 7n;
const v31 = Symbol.iterator;
const o40 = {
    [v31]() {
        let v33 = 10;
        const o39 = {
            next() {
                v33--;
                const v37 = v33 == 0;
                const o38 = {
                    "done": v37,
                    "value": v33,
                };
                return o38;
            },
        };
        return o39;
    },
};
f16(v14, v13);
f16(v14, f16(v13, v14));
function f53() {
    return f53;
}
const v54 = [2036046200,-9223372036854775807,-61646];
v54[6] = f53;
try { v54.sort(Symbol); } catch (e) {}
