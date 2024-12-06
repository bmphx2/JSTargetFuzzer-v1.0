function f0() {
    const o4 = {
        "b": -1,
        "f": -268435456,
        "a": -1,
        9: 775371.5916919385,
        [775371.5916919385]: 775371.5916919385,
        268435441: -1,
        190: -268435456,
        65536: -268435456,
        "d": -1,
        "g": 775371.5916919385,
    };
    return o4;
}
const v5 = f0();
const v6 = f0();
const v7 = f0();
function f8(a9, a10) {
    const o22 = {
        get d() {
            let v12;
            try { v12 = a9(a10, v6, this); } catch (e) {}
            +v12;
            v6.__proto__;
            const o17 = {
                "maxByteLength": 3667,
            };
            const v19 = new ArrayBuffer(3667, o17);
            const t29 = 3667;
            new t29(v19);
            return o17;
        },
    };
    return o22;
}
class C24 extends Array {
    toString(a26, a27) {
        [a27,this];
    }
}
const v29 = new C24();
const v30 = [2.0,0.5421251159488445,NaN,645885.6717831241];
const v32 = [Array];
Reflect.apply(v30.every, v30, v32);
Reflect["get"](v32, "get", v29);
f8(v5, v5);
f8(f0, v6);
f8(v7, v7);
new Uint8Array(6);
const v48 = new Uint8Array(3818);
let v49 = 169;
new BigInt64Array(v49);
function F55(a57, a58, a59) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a57;
}
new F55(6, Uint8Array, 128n);
new F55(v49, v48, 128n);
new F55(Uint8Array, BigInt64Array, 16n);
v49 %= 3818;
function f63(a64) {
    return Uint8Array;
}
class C65 extends f63 {
    e;
    2 = v49;
    static [v49] = F55;
}
Uint8Array ^ v49;
