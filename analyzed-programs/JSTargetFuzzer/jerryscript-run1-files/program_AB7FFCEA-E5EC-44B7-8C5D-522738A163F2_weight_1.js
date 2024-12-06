function f3() {
    return "3";
}
function f7() {
    return 4294967295;
}
function f8(a9, a10) {
    const o32 = {
        [a10](a12, a13, a14) {
            a9 instanceof f7;
            for (let v16 = 0; v16 < 32; v16++) {
                const t11 = "p";
                t11["p" + v16] = v16;
            }
            return a9;
        },
        __proto__: a9,
        valueOf(a20, a21) {
            return f7;
        },
        ...a9,
        ..."boolean",
        p(a26, a27, a28) {
            Object.defineProperty(this, "f", { writable: true, enumerable: true, value: this });
            ("boolean")[a10];
            new Set();
            return a9;
        },
        ..."p",
    };
    return o32;
}
f8("boolean", 25190);
const v34 = f8("p", 25190);
f8("boolean", 4294967295);
for (const v38 in v34) {
}
function f43() {
    return arguments;
}
const v45 = f43();
function f46() {
    const o47 = {
        ...v45,
    };
    return o47;
}
f46();
f46();
