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
    const v31 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
    ("1073741824").match(v31.copyWithin(v31, v31));
}
class C35 extends F28 {
    constructor(a37, a38, a39) {
        this[a37] = a39;
    }
}
