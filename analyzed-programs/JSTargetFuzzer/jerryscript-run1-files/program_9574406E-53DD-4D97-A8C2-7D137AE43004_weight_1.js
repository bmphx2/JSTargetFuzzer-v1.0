function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = F0;
}
const v3 = new F0();
new F0();
const v5 = new F0();
const v10 = new Set();
function f11(a12, a13) {
    const o31 = {
        225: v5,
        [v3]: v3,
        ...v10,
        5: a13,
        o(a15, a16, a17) {
            delete v10[-13n];
            new Float32Array(136);
            new Uint16Array(15);
            new Uint32Array(1000);
            return Float32Array;
        },
    };
    return o31;
}
try {
    1n ^ -2;
} catch(e35) {
} finally {
}
const v36 = f11("c", "length");
f11(v5, "length");
f11(v36, "BT");
function f39() {
    const o41 = {
        [f39]() {
        },
    };
    return f11;
}
for (const v43 in f39()) {
    v43.search(v43);
}
