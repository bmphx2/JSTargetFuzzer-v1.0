function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a5;
    this.d = a6;
}
const v7 = new F3(-21627n, 376138371n);
const v8 = new F3(-4294967296n, -4294967296n);
const v9 = new F3(-21627n, 376138371n);
function f13(a14, a15, a16, a17) {
    const o44 = {
        "h": a17,
        ...v8,
        n(a19, a20, a21) {
            const v24 = typeof a20 === "bigint";
            v8.__proto__ = a21;
            let v25;
            try { v25 = a15.m(v24, v7, this, a16, a15); } catch (e) {}
            v25 = a15;
            const v26 = !376138371n;
            a21 = v24;
            Object.defineProperty(this, v7, { configurable: true, get: f13, set: f13 });
            function F27(a29, a30) {
                if (!new.target) { throw 'must be called with new'; }
                this.b = 0.7706898383472626;
            }
            new F27(a15, 376138371n);
            new F27(0.7706898383472626, 376138371n);
            new F27(1000000.0, v25);
            try {
                try {
                    super.o(a19, a14, v26, f13, a17);
                } catch(e35) {
                }
                const o36 = {
                    "apply": f13,
                    "call": f13,
                    "construct": f13,
                    "deleteProperty": f13,
                    "get": f13,
                    "getPrototypeOf": f13,
                    "isExtensible": f13,
                    "preventExtensions": f13,
                    "set": f13,
                };
                new Proxy("bigint", o36);
                -34557n == -9223372036854775808;
                super.o();
            } catch(e43) {
            }
            return "bigint";
        },
    };
    return o44;
}
f13(v9, v8, -4294967296n, 1000000.0);
f13(v9, v8, 376138371n, 1000000.0);
f13(v8, v8, -21627n, 0.7706898383472626);
const v49 = RegExp.bind();
function f50(a51, a52) {
    const o53 = {
        ...v49,
    };
    return f50;
}
const v54 = f50();
const v55 = f50(v54, v54);
[1.0,1000.0];
[1e-15,1.1414188690071744e+308,0.9144374315699108,-1000000.0,0.1194434939254555];
[0.1967847413629431,1.517142000855215e+308,0.9529378582441324,720598.1136813953,1000000.0,-1000000000.0,-1.0];
f50 ** v55;
f50();
