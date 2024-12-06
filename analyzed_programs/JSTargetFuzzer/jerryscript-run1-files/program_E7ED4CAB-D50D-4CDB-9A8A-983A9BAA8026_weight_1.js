function f0() {
}
function f1() {
    return f0;
}
function f5() {
    return -49460;
}
const v8 = new Array(13);
function f9(a10, a11) {
    const o25 = {
        "b": a10,
        __proto__: v8,
        512: a11,
        "c": v8,
        get h() {
            const v13 = v8[10];
            const v15 = Symbol.iterator;
            const o24 = {
                [v15]() {
                    let v17 = 10;
                    const o23 = {
                        next() {
                            v17--;
                            const v21 = v17 == 0;
                            const o22 = {
                                "done": v21,
                                "value": v17,
                            };
                            return o22;
                        },
                    };
                    return o23;
                },
            };
            return v13;
        },
    };
    return o25;
}
f9(9007199254740992, -49460);
f9(9007199254740992, -128);
f9(9007199254740992, -49460);
new WeakSet();
const v45 = new URIError(512);
const v48 = new Int16Array(447);
new Uint32Array(2438);
function f55() {
}
v45.description <<= 2006448021;
const v63 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
v63.copyWithin(v63, v63);
("1073741824").match("1073741824");
new Uint8Array(0);
let v74 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v76 = new BigUint64Array(127);
v74 /= v76;
new WeakSet();
new BigInt64Array(2, -14, v48);
([5]).reverse();
