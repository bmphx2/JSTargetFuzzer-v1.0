function f3(a4) {
    const o9 = {
        "h": -4294967296,
        "c": a4,
        ...a4,
        "f": a4,
        "d": a4,
        valueOf(a6) {
            this[3] = f3;
            const v7 = delete this[a6];
            v7[1];
            return v7;
        },
    };
    return o9;
}
f3(-6);
f3(-4294967296);
f3(-2147483648);
try { Reflect.setPrototypeOf(Reflect); } catch (e) {}
