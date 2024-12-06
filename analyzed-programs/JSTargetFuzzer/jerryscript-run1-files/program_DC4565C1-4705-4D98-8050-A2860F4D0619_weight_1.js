function f0() {
    const o16 = {
        "a": "number",
        "g": f0,
        [f0]() {
            const o6 = {
                next() {
                    return f0;
                },
            };
        },
        ["number"]: "m",
        set h(a8) {
            const t13 = "number";
            t13[a8] += a8;
            const o11 = {
                "maxByteLength": 512,
            };
            const v13 = new ArrayBuffer(2, o11);
            new Float64Array(v13);
        },
    };
    return o16;
}
f0();
f0();
f0();
async function f29(a30, a31) {
    class C32 extends a31 {
    }
    class C33 {
        static m(a35, a36, a37) {
        }
    }
    try { C33(); } catch (e) {}
    return C32;
}
f29();
