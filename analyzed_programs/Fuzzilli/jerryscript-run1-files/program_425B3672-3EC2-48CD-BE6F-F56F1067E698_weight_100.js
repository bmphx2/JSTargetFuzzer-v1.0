const v3 = ["log2"];
const v4 = ["undefined",v3,v3,v3,v3];
const v5 = [v4,v4];
function f6(a7, a8, a9) {
    const o12 = {
        "e": a9,
        [a7]: a9,
        get c() {
            this.__proto__ = v3;
            a8 /= "log2";
            "-13" ^ a9;
            return a7;
        },
        "f": a9,
        "a": v5,
        __proto__: "undefined",
    };
    return o12;
}
let v13 = f6(v5, "undefined", v3);
const v14 = f6(v3, "undefined", v4);
const v15 = f6(v3, "undefined", v5);
function f16(a17, a18) {
    const o26 = {
        "c": f6,
        m(a20, a21, a22) {
            Object.defineProperty(v14, "f", { writable: true, value: this });
            Object.defineProperty(this, "c", { get: f6 });
            return "log2";
        },
        "g": f6,
        __proto__: a18,
    };
    return o26;
}
f16("undefined", v5);
f16("log2", v5);
const v29 = f16("-13", v3);
let v30 = 0;
do {
    let v31;
    try { v31 = v29.m(v5); } catch (e) {}
    v15.b = v31 & v4;
    break;
    Math.pow(v30, 4.0);
    -2147483649 | 5;
    -2147483649 ^ v13;
    Math.hypot(5);
    Math.sinh(4.0);
    ++v13;
    v30++;
} while (v30 < 0)
