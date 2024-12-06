[3,257,58341,-9007199254740992,1000,6];
[-65537,-504200149,1,-13,-984514001,8,7468];
const v11 = [-9007199254740992,65536];
const v14 = new BigUint64Array(480);
const v17 = new Uint8ClampedArray(1711);
const v20 = new Float32Array(10);
function F21() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v24 = new F21();
const v25 = new F21();
const v26 = new F21();
let v28 = -937546.0274885385;
for (let v29 = 0; v29 < 32; v29++) {
    v14["p" + v29] = v29;
}
const v36 = [-1e-15,1000000.0,v28,v26];
const v37 = [1000000.0,-1e-15,v25,v36,-1e-15];
const v38 = [v26,v28,v26];
function f39(a40, a41) {
    const o58 = {
        "b": -1e-15,
        ...a41,
        [v38]: v25,
        __proto__: v25,
        "d": v26,
        "f": a41,
        [a40]: v36,
        set a(a43) {
            this.__proto__ = v37;
            for (const v44 in this) {
                v20.__proto__ = v20;
                v17["entries"]();
            }
            v38[0.22410269410035233] = a40;
            const v48 = Symbol.iterator;
            const o57 = {
                [v48]() {
                    let v50 = 10;
                    const o56 = {
                        next() {
                            v50--;
                            const v54 = v50 == 0;
                            const o55 = {
                                "done": v54,
                                "value": v50,
                            };
                            return o55;
                        },
                    };
                    return o56;
                },
            };
        },
    };
    return o58;
}
v11.__proto__;
v26[14];
f39(v38, v24);
f39(v38, v25);
const v66 = f39(v37, v38);
with (v26) {
    let v67 = a;
    let v69 = `rizPp${0.22410269410035233}number${v66}sticky${426.7417148362349}-29565${v67 || v67}atan2`;
    ({"length":v67,} = v69);
    v28 |= 426.7417148362349;
    let v72 = -9;
    Math.round(v72);
    const v75 = v69++;
    v72++;
    Math.fround(v75);
    Math.sign(v72);
    v72 || v69;
}
