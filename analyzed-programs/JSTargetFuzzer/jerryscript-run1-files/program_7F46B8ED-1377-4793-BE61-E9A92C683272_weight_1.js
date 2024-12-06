function f0() {
    const o14 = {
        __proto__: "iterator",
        1: 16,
        p(a5, a6) {
            a5[a5] = 16;
            let v7 = 0;
            do {
                for (let v8 = 0; v8 < 32; v8++) {
                    a6["p" + v8] = v8;
                }
                v7++;
            } while (v7 < 0)
            return "iterator";
        },
    };
    return o14;
}
f0();
const v16 = f0();
const v17 = f0();
function f18(a19) {
    const o26 = {
        "isExtensible": a19,
        "has": f0,
        ...v17,
        [v16]() {
            return a19;
        },
        [v16]: v17,
        3412: a19,
        "g": v16,
        set e(a22) {
            const o23 = {
                "construct": f0,
                "get": f0,
                "has": f0,
                "preventExtensions": f0,
                "set": f0,
            };
            new Proxy(this, o23);
        },
    };
    return o26;
}
f18(f18(f18(v16)));
new BigInt64Array(904);
new BigInt64Array(7);
new Float32Array(1987);
new Int8Array(168);
new Int32Array(9);
new Int16Array(2);
new Set();
for (let v56 = 0; v56 < 5; v56++) {
    Object.keys(Object);
    Object[835951012] = Map;
}
new WeakMap();
new WeakSet();
const o72 = {
};
([]).lastIndexOf();
Math.atan2();
function f77(a78, a79) {
}
function f81(a82, a83, a84, a85) {
    a84 == 127;
    return a83;
}
const v93 = new URIError(512);
const v96 = new Int16Array(447);
new Uint32Array(2438);
const v101 = new Int32Array(Int32Array, Int32Array, Int32Array);
v101.set(v101);
const v104 = new Uint8Array();
v104.__proto__;
function f109() {
}
v93.description <<= 2006448021;
const v117 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
("1073741824").match(v117.copyWithin(v117, v117));
new Uint8Array(0);
const v127 = [-8,4294967295,148900462];
let v128 = RegExp.bind("2147483647", v127);
const v130 = new BigUint64Array(127);
function f131(a132, a133) {
    const o134 = {
        "f": a132,
        ...v128,
        "e": a133,
    };
    return o134;
}
f131(v128, 26357);
f131(v127, 26357);
f131(v117, 2);
v128 /= v130;
new WeakSet();
new BigInt64Array(2, -14, v96);
([5]).reverse();
