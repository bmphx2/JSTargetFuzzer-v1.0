function f0() {
    const o8 = {
        ["p"]: 30036,
        "f": 30036,
        65536: "p",
        [30036]: 4294967296,
        p(a5, a6) {
            Object.defineProperty(a6, "d", { value: a6 });
            let v7;
            try { v7 = a5.p(); } catch (e) {}
            v7 = a5;
            return a5;
        },
    };
    return o8;
}
f0();
f0();
f0();
new Float32Array(2219);
new BigInt64Array(1000);
new Uint8Array(16);
function F21() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v24 = new F21();
const v25 = new F21();
const v26 = new F21();
let v28 = -937546.0274885385;
const v33 = [-1e-15,1000000.0,v28,v26];
const v34 = [1000000.0,-1e-15,v25,v33,-1e-15];
const v35 = [v26,v28,v26];
function f36(a37, a38) {
    const o61 = {
        "b": -1e-15,
        ...v35,
        set a(a40) {
        },
        __proto__: v33,
        o(a42, a43, a44, a45) {
            eval();
            return v25;
        },
        [v35]: v25,
        /*
        __proto__: v25,
        */
        "d": v26,
        "f": a38,
        [a37]: v33,
        set a(a49) {
            this.__proto__ = v34;
            this[0.22410269410035233] = a37;
            const v51 = Symbol.iterator;
            const o60 = {
                [v51]() {
                    let v53 = 10;
                    const o59 = {
                        next() {
                            v53--;
                            const v57 = v53 == 0;
                            const o58 = {
                                "done": v57,
                                "value": v53,
                            };
                            return o58;
                        },
                    };
                    return o59;
                },
            };
        },
    };
    return o61;
}
f36(v35, v24);
f36(v35, v25);
const v64 = f36(v34, v35);
with (v26) {
    let v65 = a;
    let v67 = `rizPp${0.22410269410035233}number${v64}sticky${426.7417148362349}-29565${v65 || v65}atan2`;
    ({"length":v65,} = v67);
    v28 |= 426.7417148362349;
    let v70 = -9;
    Math.round(v70);
    const v73 = v67++;
    v70++;
    Math.fround(v73);
    Math.sign(v70);
    v70 || v67;
}
