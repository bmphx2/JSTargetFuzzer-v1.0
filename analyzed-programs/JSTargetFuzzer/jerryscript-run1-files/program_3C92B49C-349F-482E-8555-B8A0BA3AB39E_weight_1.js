new BigInt64Array(10);
const v5 = new Uint16Array(223);
const v8 = new Int32Array(2);
function f9(a10, a11, a12) {
    const o22 = {
        "g": v5,
        [a10]: a12,
        p() {
            for (const v14 in this) {
                break;
            }
            return a10;
        },
        "b": v5,
        set f(a16) {
            const o17 = {
            };
            const v19 = new Proxy(BigInt64Array, o17);
            10 && v8;
            function f21() {
                return v19;
            }
        },
    };
    return o22;
}
f9(2, 223, 10);
f9(223, 2, 2);
f9(223, 10, 2);
function f26(a27, a28, a29, a30) {
    const o46 = {
        m(a32, a33, a34) {
            try {
                Symbol("multiline");
                const v39 = new WeakSet();
                ("1073741824").match(([2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308]).copyWithin(v39, v39, WeakSet));
                super.deref(a34, a30);
            } catch(e45) {
            }
            return a28;
        },
        "call": f26,
        "preventExtensions": a27,
        ...a27,
        "apply": a29,
        ...a30,
    };
    return o46;
}
Reflect.apply(f26().m);
