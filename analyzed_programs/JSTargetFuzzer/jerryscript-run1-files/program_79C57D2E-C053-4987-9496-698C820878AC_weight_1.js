function f9() {
    return 127n;
}
function f13(a14, a15, a16) {
    const o31 = {
        "c": 127n,
        "h": 10,
        get d() {
            Object.defineProperty(this, "c", { writable: true, configurable: true, set: f9 });
            const v18 = 2147483647 instanceof a16;
            const v19 = this.__proto__;
            try { this.parse(0, v19, f9, v18); } catch (e) {}
            let v23 = 1470005497;
            v23 | 1000000.0;
            const v26 = a16 & 1000000.0;
            ++v23;
            !v26 - 1000000.0;
            Math.log10(a16);
            return a14;
        },
    };
    return a16;
}
f13(31351n, 18813, 1073741824);
f13(31351n, 536870912, 9223372036854775807n);
f13(536870912, 2147483647, -7758);
const v40 = new Uint32Array(3);
const v43 = new Uint8Array(10);
const v46 = new Uint32Array(21);
[2.220446049250313e-16,NaN,1000.0,-Infinity,-2.0,0.8418049481265658];
const v48 = [-2.2250738585072014e-308];
[0.5565764498837954];
try {
    v40[5] = v46;
} finally {
    v43.valueOf = 215831012;
    try { v48.reduce(536870912); } catch (e) {}
}
+Uint32Array;
