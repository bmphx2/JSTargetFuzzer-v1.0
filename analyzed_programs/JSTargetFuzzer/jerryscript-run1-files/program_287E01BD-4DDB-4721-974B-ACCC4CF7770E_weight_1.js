const v0 = [4294967297,-1058836228,-9,11957,1830282666,-65386,9223372036854775807,1000];
const v1 = [-65536];
const v2 = [50970];
function f3(a4, a5) {
    const o11 = {
        __proto__: v1,
        p(a7) {
            return v2[Symbol.toStringTag];
        },
        "f": a4,
        "e": a5,
        [v0]: a4,
    };
    return o11;
}
f3(v1, v0);
f3(v2, v0);
f3(v0, v0);
[-13,129,-9007199254740992,-9007199254740990,0];
[-15,512];
[268435439,13];
function F18() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v21 = new F18();
const v22 = new F18();
const v23 = new F18();
let v25 = -937546.0274885385;
for (let v27 = 0; v27 < 32; v27++) {
    v22["p" + v27] = v27;
}
const v33 = [-1e-15,1000000.0,v25,v23];
const v34 = [1000000.0,-1e-15,v22,v33,-1e-15];
const v35 = [v23,v25,v23];
function f36(a37, a38) {
    const o52 = {
        "b": -1e-15,
        ...a38,
        [v35]: v22,
        __proto__: v22,
        "d": v23,
        "a": a37,
        "g": v2,
        ...v35,
        [a38]: v33,
        [426.7417148362349]: a38,
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
f36(v35, v21);
f36(v35, v22);
const v55 = f36(v34, v35);
with (v23) {
    let v56 = a;
    let v58 = `rizPp${0.22410269410035233}number${v55}sticky${426.7417148362349}-29565${v56 || v56}atan2`;
    ({"length":v56,} = v58);
    v25 |= 426.7417148362349;
    let v61 = -9;
    Math.round(v61);
    const v64 = v58++;
    v61++;
    Math.fround(v64);
    Math.sign(v61);
    v61 || v58;
}
