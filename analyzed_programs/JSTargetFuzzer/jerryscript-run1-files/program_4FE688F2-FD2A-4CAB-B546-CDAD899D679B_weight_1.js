function f0() {
}
function f4(a5, a6) {
    const o18 = {
        "f": f0,
        __proto__: f0,
        268435440: 1n,
        "b": -9223372036854775807n,
        get c() {
            f0();
            const v11 = new Int8Array(1175);
            new Float64Array(a5);
            new Uint16Array(889);
            return v11;
        },
    };
    return o18;
}
f4(1n, -9223372036854775807n);
f4(-1753872523n, -9223372036854775807n);
f4(-1753872523n, 1n);
SyntaxError();
