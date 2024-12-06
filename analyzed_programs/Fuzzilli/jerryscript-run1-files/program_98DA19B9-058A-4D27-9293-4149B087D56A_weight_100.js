function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -4294967297;
    this.b = -4294967297;
}
new F0();
new F0();
new F0();
let v11 = new Uint32Array(3);
new Uint8ClampedArray(16);
new Uint16Array(3093);
const v23 = new Float64Array(2300);
const v25 = Symbol.iterator;
const o34 = {
    [v25]() {
        let v27 = 10;
        const o33 = {
            next() {
                v27--;
                const v31 = v27 == 0;
                const o32 = {
                    "done": v31,
                    "value": v27,
                };
                return o32;
            },
        };
        return o33;
    },
};
delete v23[2];
function F37(a39) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v23;
    this.h = a39;
}
new Int32Array(2268);
const o46 = {
    "maxByteLength": 422,
};
const v48 = new ArrayBuffer(422, o46);
new Uint8ClampedArray(v48);
new Uint8Array(257);
class C55 {
    constructor(a57, a58, a59) {
        let v60 = delete this[this];
        v60 /= v60;
        Math.log(this);
        Math.clz32(this);
        a59 ^ v11;
        v11++;
    }
}
new C55(5, -1981636549, false);
