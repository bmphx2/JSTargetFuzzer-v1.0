class C3 {
    677584049;
    constructor(a5, a6) {
        new Int16Array(127);
        new Uint16Array(72);
        new Int8Array(257);
    }
}
new C3(256, -9223372036854775807);
const v17 = new C3(-9223372036854775807, 239195353);
new C3(239195353, 256);
function f23(a24, a25, a26, a27) {
    const o37 = {
        ...a26,
        "a": 256,
        [a26]: null,
        ...a26,
        9: v17,
        o(a29, a30) {
            return -46997;
        },
    };
    return o37;
}
f23(239195353, 256, "255", 256);
f23(256, null, "255", 256);
f23(-9223372036854775807, f23, v17, -9223372036854775807);
function F44(a46, a47, a48, a49) {
    if (!new.target) { throw 'must be called with new'; }
}
const v50 = new F44();
"function" == v50;
const v52 = new BigInt64Array(512);
const o53 = {
    ...v52,
};
delete o53[5];
