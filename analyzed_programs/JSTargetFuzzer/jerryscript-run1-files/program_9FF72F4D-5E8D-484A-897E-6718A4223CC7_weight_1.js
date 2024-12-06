function f9(a10, a11, a12) {
    const o24 = {
        "h": a10,
        [a10](a14, a15, a16) {
            const o19 = {
                "maxByteLength": 536870912,
            };
            const v21 = new SharedArrayBuffer(1, o19);
            new Float32Array(v21);
            return a15;
        },
    };
    return o24;
}
f9(7, 5, 5, f9(0, -1708984753, -1708984753), 7);
f9(4, 0, 5);
function F28(a30) {
    if (!new.target) { throw 'must be called with new'; }
}
class C31 extends F28 {
    constructor(a33, a34, a35) {
        this[a33] = a35;
    }
}
