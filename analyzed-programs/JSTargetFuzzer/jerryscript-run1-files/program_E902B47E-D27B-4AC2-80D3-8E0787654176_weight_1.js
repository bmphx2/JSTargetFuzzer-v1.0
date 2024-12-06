function f0() {
}
function f7(a8, a9) {
    const o27 = {
        "d": -1.7976931348623157e+308,
        __proto__: -1.7976931348623157e+308,
        "h": -1.7976931348623157e+308,
        "b": a8,
        "c": 9,
        n(a11, a12) {
            a9 /= NaN;
            const o17 = {
                "maxByteLength": 536870889,
            };
            const v19 = new ArrayBuffer(1531, o17);
            const v21 = new Float32Array(v19);
            o17[1670153190];
            for (let v24 = 0; v24 < 32; v24++) {
                v21["p" + v24] = v24;
            }
            return a11;
        },
    };
    return o27;
}
f7(9, 127);
f7(NaN, 9);
const v30 = f7(-536870912, 127);
const v34 = new BigUint64Array(256);
try { v34.set(BigUint64Array); } catch (e) {}
const o50 = {
    o(a37, a38, a39, a40) {
        const v41 = `a`;
        v30 ** NaN;
        Math.log10(a38);
        Math.cos(-1.0);
        (-1.0) ** -9223372036854775808;
        --a38;
        return v41;
    },
};
("preventExtensions").toLowerCase();
