function f0() {
    const o16 = {
        "a": "h",
        "f": f0,
        [f0]() {
            const o6 = {
                o() {
                    return f0;
                },
            };
        },
        ["h"]: "m",
        set h(a8) {
            const t13 = "h";
            t13[this] += a8;
            const o11 = {
                "maxByteLength": ArrayBuffer,
            };
            const v13 = new ArrayBuffer(2, o11);
            new f0(v13);
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
    try { C33(8102, a30, C33); } catch (e) {}
    return 536870889;
}
f29();
