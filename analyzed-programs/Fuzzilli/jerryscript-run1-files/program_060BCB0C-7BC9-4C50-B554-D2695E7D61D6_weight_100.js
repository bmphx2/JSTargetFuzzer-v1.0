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
new Uint8Array(3798);
new Int16Array(512);
new Uint32Array(512);
const v27 = new Uint8ClampedArray(4);
let v29;
try { v29 = v27.slice(); } catch (e) {}
const o30 = {
};
const v33 = new Set();
for (let v34 = 0; v34 < 32; v34++) {
    v33["p" + v34] = v34;
}
const v37 = new Proxy(v29, o30);
function f39() {
    const o43 = {
        [1073741825]: 1.7976931348623157e+308,
        "a": "length",
        "c": 1.7976931348623157e+308,
        ..."length",
        ..."length",
        4096: 1.7976931348623157e+308,
        __proto__: "length",
        "g": 1073741825,
        536870889: 1073741825,
        3: 1.7976931348623157e+308,
        "e": v4,
    };
    return o43;
}
const v44 = f39();
function F45(a47, a48) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v37;
}
new F45(v44, v44);
new Uint32Array(0);
const o51 = {
    __proto__: o30,
    "f": v27,
    ...v27,
};
class C55 {
    constructor(a57, a58) {
        for (let i61 = 0, i62 = 10; this < i62;) {
        }
    }
    /*
    constructor(a69, a70, a71) {
        let v72 = delete this[this];
        v72 /= v72;
    }
    */
    static get a() {
        class C74 {
            7 = C55;
            c = v3;
            0 = C55;
        }
        new C74();
        new C74();
        new C74();
        return C74;
    }
}
const v79 = [7,-65536,8,4294967296,9,536870887,10,2147483647,61971];
const v80 = [-5,-42608,1,-61785];
const v81 = [1694320064,1195474237,-22462];
const v82 = [v79,v81];
const v83 = [v82];
function f84(a85, a86, a87, a88) {
    const o110 = {
        __proto__: 2147483649n,
        "d": f84,
        toString(a90, a91, a92) {
            v83["some"](a90, v81);
            Symbol[21100n] ^= 512;
            [f6,a88,Uint8Array,Symbol(a88)];
            [this];
            [F0,128,Symbol,-4968];
            const v100 = Symbol.iterator;
            const o109 = {
                [v100]() {
                    let v102 = 2147483647;
                    const o108 = {
                        next() {
                            --v102;
                            const v106 = v102 == 0;
                            const o107 = {
                                "done": v106,
                                "value": v102,
                            };
                            return o107;
                        },
                    };
                    return a86;
                },
            };
            return a90;
        },
    };
    return o110;
}
f84(v80, v82, v29, v80);
f84(v83, v82, v80, v29);
