function f0() {
    const o16 = {
        "a": "-2",
        ["4"](a5, a6) {
            Object.defineProperty(RegExp.bind(), "f", { configurable: true, get: RegExp });
            function f9() {
                arguments[2147483648];
                return arguments;
            }
            a6 === this;
            return "-2";
        },
        1411648930: "4",
        "f": "-2",
        "h": "constructor",
        "d": "constructor",
    };
    return o16;
}
const v17 = f0();
const v18 = f0();
const v19 = f0();
const v20 = [v19];
const v21 = [v20,f0,v18];
[v18,v17,v19,v18,f0];
function f23(a24, a25, a26, a27) {
    const o34 = {
        "h": v21,
        [v21]: f0,
        "b": v20,
        ...a25,
        [v18]: a27,
        "c": a24,
        n(a29, a30) {
            const o31 = {
                "apply": f0,
                "call": f0,
                "construct": f0,
                "defineProperty": f0,
                "get": f0,
                "getOwnPropertyDescriptor": f0,
                "getPrototypeOf": f0,
                "has": f0,
                "isExtensible": f0,
                "setPrototypeOf": f0,
            };
            new Proxy(a29, o31);
            return v21;
        },
    };
    return o34;
}
f23(v20, v18, v21, v18);
const v36 = f23(v20, v17, f23, v18);
const v37 = f23(v36, v17, v36, f23);
function F38(a40, a41, a42) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v37;
    this.e = a41;
}
new F38(v21, v21, v21);
new F38(v21, v20, v20);
new F38(v20, v21, v21);
let v46 = -2147483649n;
v46 &= 4n;
