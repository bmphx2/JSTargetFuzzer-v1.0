function f0() {
}
function F10() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 268435440;
}
const v13 = new F10();
const v14 = new F10();
new F10();
function f16() {
    return v14;
}
new Uint16Array(193);
new Uint8Array(3798);
new Int16Array(512);
new Uint32Array(512);
const v37 = new Uint8ClampedArray(4);
let v39;
try { v39 = v37.slice(); } catch (e) {}
const o40 = {
};
const v43 = new Set();
for (let v44 = 0; v44 < 32; v44++) {
    v43["p" + v44] = v44;
}
const v47 = new Proxy(v39, o40);
function f49() {
    const o53 = {
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
        "e": v14,
    };
    return o53;
}
const v54 = f49();
function F55(a57, a58) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v47;
}
new F55(v54, v54);
new Uint32Array(0);
const o61 = {
    __proto__: o40,
    "f": v37,
    ...v37,
};
class C65 {
    constructor(a67, a68) {
        for (let i71 = 0, i72 = 10; this < i72;) {
        }
    }
    /*
    constructor(a79, a80, a81) {
        let v82 = delete this[this];
        v82 /= v82;
    }
    */
    static get a() {
        class C84 {
            7 = C65;
            c = v13;
            0 = C65;
        }
        new C84();
        new C84();
        new C84();
        return C84;
    }
}
const v89 = [7,-65536,8,4294967296,9,536870887,10,2147483647,61971];
const v90 = [-5,-42608,1,-61785];
const v91 = [1694320064,1195474237,-22462];
const v92 = [v89,v91];
const v93 = [v92];
function f94(a95, a96, a97, a98) {
    const o120 = {
        __proto__: 2147483649n,
        "d": f94,
        toString(a100, a101, a102) {
            v93["a"](a100, v91);
            Symbol[21100n] ^= 512;
            [f16,a98,Uint8Array,Symbol(a98),v47];
            [this];
            [F10,128,Symbol,-4968];
            const v110 = Symbol.iterator;
            const o119 = {
                [v110]() {
                    let v112 = 2147483647;
                    const o118 = {
                        next() {
                            --v112;
                            const v116 = v112 == 0;
                            const o117 = {
                                "done": v116,
                                "value": v112,
                            };
                            return o117;
                        },
                    };
                    return a96;
                },
            };
            return a100;
        },
    };
    return o120;
}
f94(v90, v92, v39, v90);
f94(v93, v92, v90, v39);
