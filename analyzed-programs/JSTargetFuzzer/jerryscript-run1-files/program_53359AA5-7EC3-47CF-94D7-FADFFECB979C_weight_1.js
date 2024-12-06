function f3(a4, a5) {
    const o12 = {
        __proto__: a5,
        [a4](a7) {
            try { a7.p(this, 268435456n, a4, a7); } catch (e) {}
            return 3n;
        },
        [3n]: 268435456n,
        "f": 3n,
    };
    return o12;
}
f3(268435456n, 8n);
f3(3n, 3n);
f3(8n, 8n);
new BigInt64Array(232);
new Float64Array(13);
new Uint32Array(13);
const v27 = new BigUint64Array(11);
function f28() {
    return f28;
}
v27["every"](f28, ("1073741824").match(([2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308]).copyWithin(11, 257, 11)));
