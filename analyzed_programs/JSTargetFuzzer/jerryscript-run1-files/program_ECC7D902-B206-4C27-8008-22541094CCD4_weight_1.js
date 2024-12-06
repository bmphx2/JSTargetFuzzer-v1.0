new Float32Array(1);
new Int8Array(257);
new Uint8Array(8);
const v9 = [1.0,-0.0,-1000000000000.0,-3.0];
const v10 = [-1.0,1000000.0,-3.0,-1.7976931348623157e+308,-6.236094104331902e+307,1000000.0,120684.20413669175,-1e-15,-965.8217438207726];
const v11 = [-1000000.0,1000000000.0,0.5816889588847605];
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a14;
    this.h = a15;
    this.a = a15;
}
new F12(v10, v11);
new F12(v9, v11);
new F12(v11, v9);
function F19() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v22 = new F19();
const v23 = new F19();
const v24 = new F12();
let v26 = -937546.0274885385;
const v31 = [-1e-15,1000000.0,v26,v24];
const v32 = [1000000.0,-1e-15,v23,v31,-1e-15];
const v33 = [v24,v26,v24];
function f34(a35, a36) {
    const o64 = {
        "b": -1e-15,
        ...a36,
        [v33]: v24,
        __proto__: v24,
        "d": v24,
        "f": a36,
        [a35]: v31,
        set a(a38) {
            this.__proto__ = v10;
            v33[0.22410269410035233] = a35;
            const v40 = Symbol.iterator;
            while (0 < 5, a38) {
                let v45 = -1331069923;
                Math.tanh(1000000000000.0);
                Math.log10(-9223372036854775808);
                Math.acosh(-9223372036854775808);
                Uint8Array & -9223372036854775808;
                -(1000000000000.0 * -9223372036854775808);
                v45++;
            }
            const o63 = {
                [v40]() {
                    let v56 = 10;
                    const o62 = {
                        next() {
                            v56--;
                            const v60 = v56 == 0;
                            const o61 = {
                                "done": v60,
                                "value": v56,
                            };
                            return o61;
                        },
                    };
                    return o62;
                },
            };
        },
    };
    const o66 = {
    };
    const v68 = new Proxy(Float32Array, o66);
    try { v68(v68, v68, v68, v68); } catch (e) {}
    return o64;
}
f34(v33, v22);
f34(v9, v23);
const v72 = f34(v32, v33);
with (v24) {
    let v73 = a;
    let v75 = `rizPp${0.22410269410035233}number${v72}sticky${426.7417148362349}-29565${v73 || v73}atan2`;
    ({"length":v73,} = v75);
    v26 |= 0.22410269410035233;
    let v78 = -9;
    f34(v78++, Math);
    Math.round(v78);
    const v86 = v75++;
    v78++;
    Math.fround(v86);
    Math.sign(v78);
    v78 || v75;
}
