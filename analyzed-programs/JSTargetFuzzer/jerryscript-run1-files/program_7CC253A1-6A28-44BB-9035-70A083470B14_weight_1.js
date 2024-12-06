function f3() {
    return 65535;
}
function f4() {
    return f3;
}
function f11() {
    return 3;
}
const t9 = [1073741824,-747252372,268435439,-65537,-256];
t9[5.0] <<= 5.0;
function F15() {
    if (!new.target) { throw 'must be called with new'; }
}
function f17(a18, a19) {
    return F15;
}
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
    const o52 = {
        "b": -1e-15,
        ...a38,
        [v35]: v25,
        __proto__: v25,
        "d": v26,
        "f": a38,
        [a37]: v33,
        set a(a40) {
            this.__proto__ = v34;
            v35[0.22410269410035233] = a37;
            const v42 = Symbol.iterator;
            const o51 = {
                [v42]() {
                    let v44 = 10;
                    const o50 = {
                        next() {
                            v44--;
                            const v48 = v44 == 0;
                            const o49 = {
                                "done": v48,
                                "value": v44,
                            };
                            return o49;
                        },
                    };
                    return o50;
                },
            };
        },
    };
    return o52;
}
f36(v35, v24);
f36(v35, v25);
const v55 = f36(v34, v35);
with (v26) {
    let v56 = a;
    let v58 = `rizPp${0.22410269410035233}number${v55}sticky${426.7417148362349}-29565${v56 || v56}atan2`;
    ({"length":v56,} = v58);
    v28 |= 426.7417148362349;
    let v61 = -9;
    Math.round(v61);
    const v64 = v58++;
    v61++;
    Math.fround(v64);
    Math.sign(v61);
    v61 || v58;
}
const o72 = {
    get g() {
        return this;
    },
    set g(a71) {
    },
};
