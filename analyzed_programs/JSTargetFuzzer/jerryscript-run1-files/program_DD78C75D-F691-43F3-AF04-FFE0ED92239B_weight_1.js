function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -9007199254740990;
    this.f = -9007199254740990;
}
const v3 = new F0();
const v4 = new F0();
v3.f = v4;
let v6;
try { v6 = v4["catch"]("catch", v3, v4); } catch (e) {}
const t10 = "catch";
t10.length >>= v6;
const v7 = delete v4[F0];
let v10 = 256;
const v11 = v10 << -1706570871;
v11 - v11;
const v13 = -1706570871 + v3;
const v14 = -1706570871 ^ v7;
++v10;
const v16 = Math.asinh(-1706570871);
-1706570871 && v14;
v3.a = v3;
v4.toString = v4;
const v19 = Symbol.iterator;
const o28 = {
    [v19]() {
        let v21 = 10;
        const o27 = {
            next() {
                v21--;
                const v25 = v21 == 0;
                const o26 = {
                    "done": v25,
                    "value": v21,
                };
                return o26;
            },
        };
        return o27;
    },
    "e": v6,
    4: v16,
    ...v19,
    [v13]: v3,
    "b": v3,
};
new F0();
const v35 = new Int8Array(795);
delete v35[F0];
v3[7] = v3;
new Int16Array(64);
new BigInt64Array(5);
const o59 = {
    set c(a47) {
        /{,}[\011]+/gis;
        F0 ** -(-4);
        -8 & -4;
        const o56 = {
            "call": Symbol,
            "deleteProperty": Symbol,
            "get": Symbol,
            "has": Symbol,
            "ownKeys": Symbol,
            "preventExtensions": Symbol,
            "setPrototypeOf": Symbol,
        };
        new Proxy(a47, o56);
    },
};
new Float64Array(3355);
new BigInt64Array(1000);
new Int32Array(1448);
