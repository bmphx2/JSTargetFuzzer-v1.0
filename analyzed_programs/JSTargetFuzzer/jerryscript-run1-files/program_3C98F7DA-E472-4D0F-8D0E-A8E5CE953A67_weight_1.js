function f9() {
    return -1.7976931348623157e+308;
}
function F10() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v13 = new F10();
const v14 = new F10();
const v15 = new F10();
let v17 = -937546.0274885385;
const v22 = [-1e-15,1000000.0,v17,v15];
let v23 = -36134n;
v23 %= v23;
try { Uint16Array(2147483647); } catch (e) {}
function F26(a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = f9;
}
const v30 = [1000000.0,-1e-15,v14,v22,-1e-15];
const v31 = [v15,v17,v15];
function f32(a33, a34) {
    const o68 = {
        "b": -1e-15,
        ...a34,
        [v31]: v14,
        __proto__: v14,
        "d": v15,
        "f": a34,
        [a33]: v22,
        set a(a36) {
            this.__proto__ = v30;
            v31[0.22410269410035233] = a33;
            let v38 = 26181;
            v38--;
            let v40 = 7;
            async function f41(a42, a43, a44) {
                await (v40 = a36 % a43.padEnd(a43, a44, f41, v40, a36));
                return a34;
            }
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
        set e(a59) {
            /a\S/gisum;
        },
        o(a62, a63, a64, a65) {
            eval();
            return f9;
        },
    };
    return o68;
}
f32(v31, v13);
f32(v31, v14);
const v71 = f32(v30, v31, 3.31355267635798e+307, v14, 0.22410269410035233);
with (v15) {
    let v72 = a;
    let v74 = `rizPp${0.22410269410035233}number${v71}sticky${426.7417148362349}-29565${v72 || v72}cause`;
    ({"length":v72,} = v74);
    v17 |= 426.7417148362349;
    let v77 = -9;
    Math.round(v77);
    const v80 = v74++;
    v77++;
    Math.fround(v80);
    Math.sign(v77);
    v77 || v74;
}
