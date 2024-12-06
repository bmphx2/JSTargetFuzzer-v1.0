function f3() {
    return "object";
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a6;
    a6.f = f3;
}
const v7 = new F4("function");
const v8 = new F4("object", v7, v7);
const v9 = new F4("function");
function f10(a11, a12) {
    const o13 = {
        __proto__: "function",
        "g": v9,
        "b": a12,
        6: a11,
        ..."object",
        234295740: "function",
        3: "object",
        3: v9,
        5: v9,
        "d": "object",
        [a11]: a12,
        "e": a11,
        "a": "object",
    };
    return o13;
}
f10("function", "object");
f10("object", "object", v8, "function");
f10("object", "function");
try {
    function f20() {
        return f20;
    }
} catch(e21) {
}
