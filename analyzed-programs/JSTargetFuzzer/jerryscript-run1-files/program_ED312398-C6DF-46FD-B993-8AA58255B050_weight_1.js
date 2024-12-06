function f3() {
    return 65537;
}
const v4 = [193885418,65537];
const v5 = [193885418,-2147483648];
const v6 = [v4,v5,v4,193885418,v5];
let v8 = "undefined";
if (193885418 <= v6) {
    const v12 = Symbol.iterator;
    const o21 = {
        [v12]() {
            let v14 = 10;
            const o20 = {
                next() {
                    v14--;
                    const v18 = v14 == 0;
                    const o19 = {
                        "done": v18,
                        "value": v14,
                    };
                    return o19;
                },
            };
            return o20;
        },
    };
} else {
    ++v8;
}
function f23(a24, a25, a26, a27) {
    const o35 = {
        get h() {
            this.unscopables **= a24;
            return v5;
        },
        set a(a30) {
            a27[3] = v4;
            const t37 = "hihX";
            t37.__proto__ = "toString";
            const t39 = "toString";
            t39[1073741825] = -2147483648;
            try { this.n("toString", a27); } catch (e) {}
            const o32 = {
                "apply": f23,
                "call": f3,
                "construct": f23,
                "defineProperty": f23,
                "deleteProperty": f3,
                "get": f3,
                "getOwnPropertyDescriptor": f3,
                "getPrototypeOf": f23,
                "has": f23,
                "isExtensible": f23,
                "ownKeys": f23,
                "set": f3,
            };
            new Proxy(v5, o32);
            this[v5] = this;
        },
        "h": a24,
        ...v8,
        "d": v5,
        "a": 65537,
        __proto__: "hihX",
        ["hihX"]: 65537,
        ...v6,
        "c": "hihX",
        5: a24,
        /*
        __proto__: "toString",
        */
    };
    return o35;
}
f23(193885418, v6, 193885418, f23(v6, v4, v8, f23(v5, v5, "toString", v6)), v5, v8);
const v40 = new Uint8ClampedArray();
let v44;
try { v44 = v40["set"](4096, 23, ...v40, ...23); } catch (e) {}
for (const v45 in v44) {
}
