const v0 = [];
try { Uint8Array(); } catch (e) {}
function f4(a5, a6) {
    const o8 = {
        ...a6,
        "a": a6,
        "h": a5,
        get c() {
            super.d = this;
            return a5;
        },
        "d": a6,
        [a6]: v0,
        ...v0,
    };
    return o8;
}
const v9 = f4(v0, undefined);
const v11 = f4(f4(v9, v9), v0);
function f15(a16, a17) {
    const o24 = {
        [v0]: a17,
        "f": a17,
        "a": -24432,
        set c(a19) {
            try { new a19(a19, this, ...-2147483649, a17, a16); } catch (e) {}
            const o21 = {
                "construct": f4,
            };
            new Proxy(a19, o21);
        },
    };
    return o24;
}
f15(-2147483649, v11);
f15(-2147483649, v9);
f15(-2147483649, v9);
new Set();
new Int32Array(2916);
