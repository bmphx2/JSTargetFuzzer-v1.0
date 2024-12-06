function f3(a4, a5) {
    const o12 = {
        "g": "string",
        "f": a4,
        "a": a4,
        ["bigint"]: a5,
        "b": a5,
        valueOf(a7) {
            let v9;
            try { v9 = a5.charAt(f); } catch (e) {}
            try { v9["normalize"](f, "wvH", f, "normalize"); } catch (e) {}
            return a7;
        },
        "d": "string",
        ["string"]: "bigint",
    };
    return o12;
}
f3("wvH", "string");
f3(f3, "bigint");
f3("wvH", "bigint");
let v25 = -65537n;
try {
    v25 -= SyntaxError(v25).cause;
} catch(e29) {
}
