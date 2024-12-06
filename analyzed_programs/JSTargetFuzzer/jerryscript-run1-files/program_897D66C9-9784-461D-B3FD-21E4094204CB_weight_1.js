[1.0];
[0.4240314639736641];
[0.30176650286058704,-2.0];
function F12() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v15 = new F12();
const v16 = new F12();
const v17 = new F12();
let v19 = -937546.0274885385;
const v24 = [-1e-15,1000000.0,v19,v17];
const v25 = [1000000.0,-1e-15,v16,v24,-1e-15];
const v26 = [v17,v19,v17];
function f27(a28, a29) {
    const v30 = [];
    async function* f31(a32, a33, a34) {
        await (yield v30);
        return f31;
    }
    const o50 = {
        "b": -1e-15,
        ...a29,
        [v26]: v16,
        __proto__: v16,
        "d": v17,
        "f": a29,
        [a28]: v24,
        set a(a38) {
            this.__proto__ = v25;
            v26[0.22410269410035233] = a28;
            const v40 = Symbol.iterator;
            const o49 = {
                [v40]() {
                    let v42 = 10;
                    const o48 = {
                        next() {
                            v42--;
                            const v46 = v42 == 0;
                            const o47 = {
                                "done": v46,
                                "value": v42,
                            };
                            return o47;
                        },
                    };
                    return o48;
                },
            };
        },
    };
    return o50;
}
f27(v26, v15);
f27(v26, v16);
const v53 = f27(v25, v26, -2.0, -1e-15);
with (v17) {
    let v54 = a;
    let v56 = `rizPp${0.22410269410035233}number${v53}sticky${-2.0}-29565${v54 || v54}atan2`;
    ({"length":v54,} = v56);
    v19 |= -2.0;
    let v59 = -9;
    Math.round(v59);
    const v62 = ++v56;
    v59++;
    Math.fround(v62);
    Math.sign(v59);
    v59 || v56;
}
