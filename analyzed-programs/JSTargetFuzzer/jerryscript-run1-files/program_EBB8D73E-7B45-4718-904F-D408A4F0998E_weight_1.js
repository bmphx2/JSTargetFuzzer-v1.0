function f0() {
    const o16 = {
        get g() {
            const v6 = Symbol.iterator;
            const o15 = {
                [v6]() {
                    let v8 = 10;
                    const o14 = {
                        next() {
                            v8--;
                            const v12 = v8 == 0;
                            const o13 = {
                                "done": v12,
                                "value": v8,
                            };
                            return o13;
                        },
                    };
                    return o14;
                },
            };
            return "p";
        },
    };
    return o16;
}
const v17 = f0();
const v18 = f0();
const v19 = f0();
function f20(a21) {
    let v23 = 58354n;
    (v23 <<= 39655n) | 268435439n;
    const o33 = {
        "f": v18,
        "h": a21,
        __proto__: v18,
        "c": a21,
        toString(a27) {
            const v29 = this == (f0 >>> a27);
            [2.0,-1.7976931348623157e+308,-7.5166200690231655,-0.9590901318366303,NaN,1.9629684371291525,7.218415736954455,2.8866767282072997e+307,-4.0,-1000000.0];
            [279.9338055734513,-3.0,-4.532251251045003,-7.666644963121003e+307,207.91851897675906,1.1262904896827476e+308,438484.3925689359,NaN,26.259377912450645];
            [-1000000000000.0,5.0];
            return v29;
        },
    };
    return o33;
}
f20(v19);
f20(v19);
f20(v17);
new Int8Array(168);
new Int32Array(9);
new Int16Array(2);
new Set();
new WeakMap();
new WeakSet();
const v75 = new URIError(512);
const v78 = new Int16Array(447);
new Uint32Array(2438);
function f85() {
}
v75.description <<= 2006448021;
const v93 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
("1073741824").match(v93.copyWithin(v93, v93));
new Uint8Array(0);
const v103 = [-8,4294967295,148900462];
let v104 = RegExp.bind("2147483647", v103);
const v106 = new BigUint64Array(127);
function f107(a108, a109) {
    const o110 = {
        "f": a108,
        ...v104,
        "e": a109,
    };
    return o110;
}
f107(v104, 26357);
f107(v103, 26357);
f107(v93, 2);
v104 /= v106;
new WeakSet();
new BigInt64Array(2, -14, v78);
([5]).reverse();
