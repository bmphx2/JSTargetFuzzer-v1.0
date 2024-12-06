function f6(a7, a8, a9) {
    const o19 = {
        "g": a8,
        ...a9,
        "d": 2.2250738585072014e-308,
        "f": a8,
        ["number"](a11, a12, a13) {
            typeof (this !== "255" ? this : "255") === "boolean";
            return "number";
        },
    };
    return o19;
}
f6("255", 2.2250738585072014e-308, "number");
f6("construct", "construct", "construct");
f6("number", f6, "255");
"number" >> "number";
for (const v24 in "construct") {
    class C25 extends f6 {
        g = "255";
        a = f6;
    }
    new C25();
    new C25();
    new C25();
}
