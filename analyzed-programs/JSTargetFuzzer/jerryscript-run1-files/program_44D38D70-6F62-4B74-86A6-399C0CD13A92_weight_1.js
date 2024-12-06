function f0() {
}
function f8(a9, a10, a11, a12) {
    const o23 = {
        [a9]: -9223372036854775807n,
        __proto__: a11,
        [-9223372036854775807n](a14, a15, a16) {
            Object.defineProperty(a11, "e", { writable: true, value: -4294967297 });
            const v18 = Symbol.d;
            a11[v18] = v18;
            a11.length = 1;
            return 0.7510733677334301;
        },
        ...a11,
    };
    return o23;
}
f8(536870889, 16n, -4294967297, 53337);
f8(536870889, 16n, -9223372036854775807n, 536870889);
f8(-4294967297, 536870889n, f0, -4294967297, 53337, 16n, f0);
const v32 = new Uint16Array();
const v35 = new Uint8Array();
v32.slice(16, v35[140]);
