function f0() {
}
const v1 = -Infinity;
function f4() {
    return 4.0;
}
const v5 = [f0,f4,f4,f4,v1];
const v6 = [f4,v5,-5.969701679008581e+307];
const v7 = [v5,4.0];
class C8 {
    static set a(a10) {
        const o13 = {
            "maxByteLength": 6,
        };
        const v15 = new ArrayBuffer(6, o13);
        new Int16Array(v15);
    }
    [f0] = v7;
    [v7] = v5;
}
new f4();
const v19 = new C8();
new C8();
function f21(a22, a23) {
    const o37 = {
        3981428920: v19,
        "d": v7,
        "a": a23,
        __proto__: v6,
        set g(a25) {
            a25[4.0] = this;
            const v27 = Symbol.iterator;
            const o36 = {
                [v27]() {
                    let v29 = 10;
                    const o35 = {
                        next() {
                            v29--;
                            const v33 = v29 == 0;
                            const o34 = {
                                "done": v33,
                                "value": v29,
                            };
                            return o34;
                        },
                    };
                    return o35;
                },
            };
        },
    };
    return o37;
}
f21(-5.969701679008581e+307, f21(v1, v7));
f21(4.0, v6);
new Int8Array(168);
new Int32Array(9);
new Int16Array(2);
new Set();
new WeakMap();
new WeakSet();
const v76 = new URIError(512);
const v79 = new Int16Array(447);
new Uint32Array(2438);
function f86() {
}
v76.description <<= 2006448021;
const v94 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
("1073741824").match(v94.copyWithin(v94, v94));
new Uint8Array(0);
const v104 = [-8,4294967295,148900462];
let v105 = RegExp.bind("2147483647", v104);
const v107 = new BigUint64Array(127);
function f108(a109, a110) {
    const o111 = {
        "f": a109,
        ...v105,
        "e": a110,
    };
    return o111;
}
f108(v105, 26357);
f108(v104, 26357);
f108(v94, 2);
v105 /= v107;
new WeakSet();
new BigInt64Array(2, -14, v79);
([5]).reverse();
