const v2 = new Int32Array(3);
v2[8] = Int32Array;
function f4() {
    return Int32Array;
}
try { v2.includes(f4, 9); } catch (e) {}
const v7 = new Int16Array(9);
const v10 = new Int16Array(759);
function f11(a12, a13, a14, a15) {
    const o34 = {
        get e() {
            function f17(a18, a19) {
                'use strict';
                a18.c = this;
                return a19;
            }
            return this;
        },
        valueOf(a21, a22) {
            super.e = a21;
            const v24 = Symbol.isConcatSpreadable;
            v2[v24] = v24;
            return a15;
        },
        get e() {
            return arguments[this];
        },
        m(a29, a30, a31) {
            eval(eval);
            return a12;
        },
        ...v10,
        "e": 3,
        [a13]: v7,
    };
    new Map();
    a15 > 4294967296n;
    function f40(a41) {
        const o42 = {
            "a": "setBigInt64",
        };
        return o42;
    }
    const v43 = f40("setBigInt64");
    const o44 = {
        "get": f40,
        "set": f40,
    };
    new Proxy(v43, o44);
    return o34;
}
const v47 = f11(Int16Array, Int32Array, 9, 3);
f11(f11, f11, 3, 759);
f11(v47, Int16Array, 759, 3);
try { Uint16Array(); } catch (e) {}
