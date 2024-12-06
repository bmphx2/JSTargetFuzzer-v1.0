function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a5;
    this.e = -1000000000000.0;
    this.h = a5;
}
new F3(882.320673103887);
const v7 = new F3(-1000000000000.0);
new F3(1000000000.0);
function f12() {
    return 882.320673103887;
}
new Array(16);
function F16() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v19 = new F16();
const v20 = new F16();
const v21 = new F16();
[1.0,1.7976931348623157e+308,-1000000000000.0,-5.0,-395.9196354462089,-Infinity];
const v23 = [-7.9569638878927424,672676.3348163655,6.86087050671146e+306,1000000000000.0,9.469425116855657,0.7517396792910823,0.6270429876985091,867.8465619298474];
let v24 = [0.11643671933527133,408843.66494458145,-1000000000000.0,0.8004119190520272,-2.220446049250313e-16,2.220446049250313e-16,-473.66433916986387,-1.4666295576069774e+308,4.0,1000000.0];
v24[F16] = F3;
v24 = v23;
let v26 = -937546.0274885385;
const v31 = [-1e-15,1000000.0,v26,v21];
const v32 = [1000000.0,-1e-15,v20,v31,-1e-15];
const v33 = [v21,v26,v21];
function f34(a35, a36) {
    const o50 = {
        "b": -1e-15,
        ...a36,
        [v33]: v20,
        __proto__: v20,
        "d": v21,
        "f": a36,
        [a35]: v31,
        set a(a38) {
            this.__proto__ = v32;
            v33[0.22410269410035233] = a35;
            const v40 = Symbol.iterator;
            const o49 = {
                [v40]() {
                    let v42 = 10;
                    const o48 = {
                        next() {
                            const v44 = v42--;
                            const v46 = v42 == 0;
                            const o47 = {
                                "e": v7,
                                "h": v46,
                                "c": a38,
                                [v44]: v23,
                                __proto__: v33,
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
f34(v33, v19);
f34(v33, v20);
const v53 = f34(v32, v33);
with (v21) {
    let v54 = a;
    let v56 = `rizPp${0.22410269410035233}number${v53}sticky${426.7417148362349}-29565${v54 || v54}atan2`;
    ({"length":v54,} = v56);
    v26 |= 426.7417148362349;
    let v59 = -9;
    Math.round(v59);
    const v62 = v56++;
    v59++;
    Math.fround(v62);
    Math.sign(v59);
    v59 || v56;
}
