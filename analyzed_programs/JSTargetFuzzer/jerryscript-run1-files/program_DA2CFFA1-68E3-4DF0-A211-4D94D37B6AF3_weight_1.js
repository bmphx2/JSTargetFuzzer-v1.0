function f6(a7, a8, a9) {
    const o22 = {
        __proto__: a8,
        7: a7,
        [16](a11, a12, a13, a14) {
            a13.__proto__ = this;
            const o17 = {
                "maxByteLength": 208,
            };
            const v19 = new SharedArrayBuffer(this, o17);
            new Uint8Array(v19);
            return 128;
        },
    };
    return o22;
}
f6(0n, 128, 2015873013n);
f6(f6, 16, 0n);
f6(0n, 4294967296, -9007199254740990n);
new Map();
const v32 = new Uint16Array();
const v33 = v32.toLocaleString();
for (let v34 = 0; v34 < 5; v34++) {
    v33 ** v34;
}
