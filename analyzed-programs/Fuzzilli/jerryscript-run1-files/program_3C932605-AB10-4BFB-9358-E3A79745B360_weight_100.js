function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 268435440;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function f6() {
    return v4;
}
new Uint16Array(193);
const v15 = new Uint8Array(3798);
new Int16Array(512);
new Uint32Array(512);
const v27 = new Uint8ClampedArray(4);
let v29;
try { v29 = v27.slice(); } catch (e) {}
const o30 = {
};
const v33 = new Set();
for (let v34 = 0; v34 < 32; v34++) {
    const v36 = "p" + v34;
    const t22 = "p";
    t22[5] = v36;
    [-2.2250738585072014e-308,1e-15,0.1118077085866167,-0.0,0.06131052778090906,-122.51504514719818];
    [786408.1683203042,452.353051341074,0.41489474477772514];
    [167.70916532939964,-24.546080477598593];
    v29 = v27;
    v33[v36] = v34;
}
const v40 = new Proxy(v29, o30);
function f42() {
    const o46 = {
        [1073741825]: 1.7976931348623157e+308,
        "a": "length",
        "c": v29,
        ...v29,
        ..."length",
        4096: 1.7976931348623157e+308,
        __proto__: "length",
        "e": 65535n,
        "g": v40,
        10: "length",
        [4]: v15,
        "b": "length",
        "g": 1073741825,
        536870889: 1073741825,
        3: 1.7976931348623157e+308,
        "e": v3,
    };
    return o46;
}
const v47 = f42();
function F48(a50, a51) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v40;
}
new F48(v47, v47);
new Uint32Array(0);
const o54 = {
    __proto__: o30,
    "f": v27,
    ...v27,
};
class C58 {
    constructor(a60, a61) {
        for (let i64 = 0, i65 = 10; this < i65;) {
        }
    }
    /*
    constructor(a72, a73, a74) {
        let v75 = delete this[this];
        v75 /= v75;
    }
    */
    static get a() {
        class C77 {
            7 = C58;
            c = v3;
            0 = C58;
        }
        new C77();
        new C77();
        new C77();
        return C77;
    }
}
const v82 = [7,-65536,8,4294967296,9,536870887,10,2147483647,61971];
const v83 = [-5,-42608,1,-61785];
const v84 = [1694320064,1195474237,-22462];
const v85 = [v82,v84];
const v86 = [v85];
function f87(a88, a89, a90, a91) {
    const o120 = {
        __proto__: 2147483649n,
        "d": f6,
        toString(a93, a94, a95) {
            v86["some"](a93, v84);
            Symbol[21100n] ^= 512;
            [f6,a91,Uint8Array,Symbol(a91)];
            function f101(a102, a103, a104, a105) {
                const v106 = this[7];
                a105 = Uint8Array;
                v33[1566] = v106;
                return a103;
            }
            f101(o30, a93, v40, "some");
            [this];
            [F0,128,Symbol,-4968];
            const v110 = Symbol.iterator;
            const o119 = {
                [v110]() {
                    const o118 = {
                        next() {
                            --a94;
                            const v116 = 2147483647 == 0;
                            const o117 = {
                                "done": v116,
                                "value": 2147483647,
                            };
                            return o117;
                        },
                    };
                    return a89;
                },
            };
            return a89;
        },
    };
    return o120;
}
f87(v83, v85, Uint32Array, v83);
f87(v86, v85, v83, v29);
