function f3(a4, a5) {
    const o6 = {
        "c": a4,
        ["setFullYear"]: "setFullYear",
        "a": a4,
        "f": "setFullYear",
        "g": "global",
        ...a4,
        __proto__: a5,
        "h": a5,
        "e": a5,
        ...a5,
    };
    return o6;
}
const v7 = f3("function", "global");
const v8 = f3(f3, "function");
const v9 = f3(v7, "setFullYear");
v8 << "function";
function f14(a15) {
    return "global";
}
class C16 extends f14 {
    #b;
    #c;
}
try { v8.toString(v8); } catch (e) {}
Object.defineProperty(v9, "f", { writable: true, get: f3 });
