class C3 {
    static ["p"];
    static 40;
    static set f(a5) {
        const v8 = typeof a5 === "object";
        const t5 = "p";
        t5.__proto__ = a5;
        const o12 = {
            valueOf() {
                this[Symbol.search] = "object";
                return v8;
            },
        };
        this.f = v8;
    }
    4 = 1024;
    [1024] = 1024;
    ["p"] = -338456.4981128295;
}
const v13 = new C3();
const v14 = new C3();
const v15 = new C3();
function f16(a17, a18) {
    const o27 = {
        set c(a20) {
        },
        "h": a18,
        [a17]: 1024,
        "d": v13,
        "b": C3,
    };
    return o27;
}
const v29 = f16(v15, f16(C3, C3));
const v30 = f16(v14, v15);
function f31(a32, a33, a34) {
    const o45 = {
        "a": C3,
        valueOf(a36, a37) {
            const o38 = {
                "e": -338456.4981128295,
                "a": v13,
            };
            a34.b;
            for (let v40 = 0; v40 < 36; v40++) {
                try { this.getDay(); } catch (e) {}
            }
            new Date();
            C3 & v30;
            return v29;
        },
        "d": v30,
        "e": a32,
        __proto__: C3,
        "g": -338456.4981128295,
        ...v13,
        /*
        __proto__: a32,
        */
        "g": C3,
    };
    return o45;
}
f31(v15, v29, v14);
f31(v30, v29, v29);
f31(v13, v30, v30);
0n ^ 0n;
