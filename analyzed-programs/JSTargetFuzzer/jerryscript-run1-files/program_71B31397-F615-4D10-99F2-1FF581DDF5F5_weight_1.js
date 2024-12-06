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
const v33 = Array.from(1);
function F34(a36, a37, a38, a39) {
    if (!new.target) { throw 'must be called with new'; }
}
const v40 = new F34(Array, F34, v33, Array);
with (v40) {
    try { v33(); } catch (e) {}
}
const v44 = [-1e-15,1000000.0,v25,v23];
const v45 = [1000000.0,-1e-15,v22,v44,-1e-15];
const v46 = [v23,v25,v23];
function f47(a48, a49) {
    const o63 = {
        "b": -1e-15,
        ...a49,
        [v46]: v22,
        __proto__: v22,
        "d": v23,
        "a": a48,
        "g": v2,
        ...v46,
        [a49]: v44,
        [426.7417148362349]: a49,
        "f": a49,
        [a48]: v44,
        set a(a51) {
            this.__proto__ = v45;
            v46[0.22410269410035233] = a48;
            const v53 = Symbol.iterator;
            const o62 = {
                [v53]() {
                    let v55 = 10;
                    const o61 = {
                        next() {
                            v55--;
                            const v59 = v55 == 0;
                            const o60 = {
                                "done": v59,
                                "value": v55,
                            };
                            return o60;
                        },
                    };
                    return o61;
                },
            };
        },
    };
    return o63;
}
f47(v46, v21);
f47(v46, v22);
const v66 = f47(v45, v46);
with (v23) {
    let v67 = a;
    let v69 = `rizPp${0.22410269410035233}number${v66}sticky${426.7417148362349}-29565${v67 || v67}atan2`;
    ({"length":v67,} = v69);
    v25 |= 426.7417148362349;
    let v72 = -9;
    Math.round(v72);
    const v75 = v69++;
    v72++;
    Math.fround(v75);
    Math.sign(v72);
    v72 || v69;
}
