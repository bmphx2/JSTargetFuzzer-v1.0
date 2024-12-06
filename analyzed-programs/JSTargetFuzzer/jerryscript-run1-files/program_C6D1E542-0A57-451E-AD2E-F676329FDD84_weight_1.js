function f6(a7, a8, a9, a10) {
    const o17 = {
        "a": -65536,
        ..."hM",
        ["l"]: "hM",
        [a8]: 9007199254740990,
        "h": a10,
        n(a12, a13, a14) {
            let v15;
            try { v15 = a13.trimStart(a14, ...a12, ...this, a8, this); } catch (e) {}
            function f16() {
                return v15;
            }
            return a12;
        },
    };
    return o17;
}
f6("l", -65536, "hM", -65536);
f6("l", -65536, "l", 9007199254740990);
f6("hM", -65536, "-4096", 7);
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
    const o60 = {
        "b": -1e-15,
        ...a38,
        [v35]: v25,
        __proto__: v25,
        "d": v26,
        "f": a38,
        [a37]: v33,
        set a(a40) {
            new Int16Array();
            function f43() {
                const o44 = {
                };
                return o44;
            }
            f43();
            typeof f43 === "number";
            this.__proto__ = v34;
            v35[0.22410269410035233] = a37;
            const v50 = Symbol.iterator;
            const o59 = {
                [v50]() {
                    let v52 = 10;
                    const o58 = {
                        next() {
                            v52--;
                            const v56 = v52 == 0;
                            const o57 = {
                                "done": v56,
                                "value": v52,
                            };
                            return o57;
                        },
                    };
                    return o58;
                },
            };
        },
    };
    return o60;
}
f36(v35, v24);
f36(v35, v25);
const v63 = f36(v34, v35);
with (v26) {
    let v64 = a;
    let v66 = `rizPp${0.22410269410035233}number${v63}sticky${426.7417148362349}-29565${v64 || v64}atan2`;
    ({"length":v64,} = v66);
    v28 |= 426.7417148362349;
    let v69 = -9;
    Math.round(v69);
    const v72 = v66++;
    v69++;
    Math.fround(v72);
    Math.sign(v69);
    v69 || v66;
}
