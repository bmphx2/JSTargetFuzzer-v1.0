function f0() {
    const v2 = -Infinity;
    const o14 = {
        "h": 1.1605044669792948e+308,
        "c": 1.1605044669792948e+308,
        "f": 1.1605044669792948e+308,
        [v2]: "h",
        "d": "h",
        valueOf(a5, a6) {
            function f7(a8, a9) {
                const o10 = {
                    [v2]: this,
                    ...a9,
                };
                return o10;
            }
            f7(f7, a5);
            f7(f7(1.1605044669792948e+308, v2), a5);
            return a6;
        },
    };
    return o14;
}
f0();
const v16 = f0();
f0();
new Int32Array(1000, Int32Array, v16);
new Int16Array(1928);
new Uint8Array(768);
const v28 = [Date,Date];
function F29(a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    try { a32(F29); } catch (e) {}
}
new F29(v28, F29);
new Date(-4096);
