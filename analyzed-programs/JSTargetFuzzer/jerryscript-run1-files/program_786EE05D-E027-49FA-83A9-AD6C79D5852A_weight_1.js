let v5 = -65535n;
const v6 = [536870888,-9223372036854775807n];
const v7 = [695795362,v5,695795362];
[536870888,536870888,695795362,695795362];
function f12(a13, a14) {
    const o26 = {
        "e": a13,
        __proto__: v7,
        "d": v6,
        "a": v7,
        valueOf(a16, a17, a18) {
            v5 /= a17;
            const o21 = {
                "maxByteLength": 3673533223,
            };
            const v23 = new SharedArrayBuffer(8, o21);
            new BigInt64Array(v23);
            return a13;
        },
    };
    return o26;
}
f12(-9n, -9n);
const v28 = f12(6826, -9223372036854775807n);
f12(-1421643663, -9n);
v6[3] = v28;
function f33(a34, a35) {
    const o36 = {
        "d": a34,
    };
    return o36;
}
f33(6826, v7);
f33(14, v7);
f33(-2012991891, v7);
