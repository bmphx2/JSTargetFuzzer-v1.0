new Int16Array(4);
new Uint16Array(257);
new Int8Array(89);
new Int8Array(4096);
new Uint16Array(2177);
new Float64Array(255);
let v19 = 44256;
new Uint8ClampedArray();
const v24 = new Uint32Array(858);
const v27 = new Uint16Array();
function f28(a29, a30, a31, a32) {
    const o41 = {
        m(a34, a35, a36) {
            v19 ^= a36;
            this instanceof Uint16Array;
            return v24;
        },
        set f(a39) {
            let v40 = this.m();
            ({"a":v40,} = this);
        },
    };
    return o41;
}
const v42 = f28(f28, Uint16Array, 7, 858);
const v43 = f28(v24, Uint16Array, v42, v42);
v42[8] |= 7;
for (const v44 in v24) {
    const v46 = [v44,f28,255];
    Reflect.apply(v43.m, v27, v46);
    new Boolean();
    function f51() {
        return v46;
    }
}
