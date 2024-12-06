const v5 = new BigInt64Array(1480);
const v8 = new Int32Array(1597);
const v10 = [];
const v12 = Reflect.apply(v5.reverse, v5, v10);
v10.length ^= 1597;
1.7976931348623157e+308 === -1000.0;
for (let v16 = 0; v16 < 32; v16++) {
    v5["p" + v16] = v16;
}
const v19 = new BigUint64Array(209);
function f20(a21, a22, a23, a24) {
    const o43 = {
        "e": a24,
        "a": v19,
        "b": -1e-15,
        "d": BigUint64Array,
        7: v12,
        ...a22,
        3552: a21,
        "c": v5,
        [a24]: a23,
        "h": a23,
        ...a24,
        "d": 1597,
        "f": a21,
        "d": a22,
        [v8](a26, a27) {
            let v25 = this;
            --v25;
            a24.valueOf = a22;
            function F29(a31, a32, a33, a34) {
                if (!new.target) { throw 'must be called with new'; }
                const o35 = {
                    "apply": f20,
                    "construct": f20,
                    "defineProperty": f20,
                    "deleteProperty": f20,
                    "get": f20,
                    "isExtensible": f20,
                    "set": f20,
                    "setPrototypeOf": f20,
                };
                new Proxy(a31, o35);
                this.b = a33;
            }
            const v38 = new F29(1.7976931348623157e+308, -1e-15, v25, v5);
            Object.defineProperty(v19, v38, { get: f20, set: f20 });
            a22.__proto__ = v38;
            a21 = a27;
            v19.b = a27;
            v38.b = v25;
            new F29(v25, 1.7976931348623157e+308, a27, a24);
            new F29(1.7976931348623157e+308, a21, 1480, -1000.0);
            const v41 = v19[-1e-15];
            super.a = 1597;
            const v42 = a23;
            super.e = a26;
            return v41;
        },
        "f": a22,
        "b": a23,
        "h": 1597,
    };
    return o43;
}
f20(-1000.0, -1000.0, -1000.0, 1480);
f20(1.7976931348623157e+308, -1000.0, -1000.0, 1480);
f20(-1e-15, 1.7976931348623157e+308, 1.7976931348623157e+308, 209);
for (let v48 = 0; v48 < 41; v48++) {
    v5.__proto__;
}
v5.buffer;
Reflect.b = 1480;
let v51 = -6n;
v51 |= -4294967296n;
