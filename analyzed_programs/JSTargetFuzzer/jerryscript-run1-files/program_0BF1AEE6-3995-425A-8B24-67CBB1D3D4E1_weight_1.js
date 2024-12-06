function f0() {
}
function f1() {
    return f0;
}
function f11(a12, a13, a14) {
    const o15 = {
        ["undefined"]: a14,
        "h": a14,
        10000: "object",
        "a": "resizable",
        268435456: "-1765840753",
        "e": "-1765840753",
        [a12]: f0,
        3: a12,
        5: f11,
        ["-1765840753"]: a12,
        "b": 4,
        "f": "lcWff",
    };
    return o15;
}
f11("object", "undefined", "name");
f11("lcWff", "-1765840753", "name");
f11("object", "object", "name");
let v20 = -2147483648n;
v20 &= -2147483649n;
