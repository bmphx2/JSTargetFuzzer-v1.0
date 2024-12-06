new Uint32Array(512);
const v8 = new Uint8ClampedArray(4);
let v10;
try { v10 = v8.slice(); } catch (e) {}
const o11 = {
};
const v14 = new Set();
for (let v15 = 0; v15 < 32; v15++) {
    v14["p" + v15] = v15;
}
const v18 = new Proxy(v10, o11);
function f20() {
    const o24 = {
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
        "e": 1.7976931348623157e+308,
    };
    return o24;
}
const v25 = f20();
function F26(a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v18;
}
new F26(v25, v25);
new Uint32Array(0);
class C35 {
    constructor(a37, a38) {
        for (let i41 = 0, i42 = 10; this < i42;) {
        }
    }
    /*
    constructor(a49, a50, a51) {
        let v52 = delete this[this];
        v52 /= v52;
    }
    */
    static get a() {
        class C54 {
            7 = C35;
            c = this;
            0 = C35;
        }
        new C54();
        new C54();
        new C54();
        return C54;
    }
}
const v59 = [7,-65536,8,4294967296,9,536870887,10,2147483647,61971];
const v60 = [-5,-42608,1,-61785];
const v61 = [1694320064,1195474237,-22462];
const v62 = [v59,v61];
const v63 = [v62];
function f64(a65, a66, a67, a68) {
    const o86 = {
        __proto__: 2147483649n,
        "d": f64,
        toString(a70, a71, a72) {
            v63["some"](a70, v61);
            const v76 = Symbol.iterator;
            const o85 = {
                [v76]() {
                    let v78 = 2147483647;
                    const o84 = {
                        next() {
                            --v78;
                            const v82 = v78 == 0;
                            const o83 = {
                                "done": v82,
                                "value": v78,
                            };
                            return o83;
                        },
                    };
                    return o84;
                },
            };
            return a70;
        },
    };
    return o86;
}
f64(v60, v62, v10, v60);
f64(v63, v62, v60, v10);
