new Uint8ClampedArray(1);
new Float32Array(3564);
new Int8Array(14);
const v18 = [2147483648,-9,65535,-216988321,-65536,47176,-1940727804,-65537];
function f19(a20, a21) {
    v18.concat(a21);
    return a21;
}
function f23(a24, a25) {
    const o39 = {
        ...a25,
        valueOf() {
            let v28 = super.d;
            v28 |= Boolean;
            return 14;
        },
        "c": a25,
        "b": 1073741824,
        "e": a25,
        __proto__: a25,
        [3](a30, a31, a32) {
            try {
                super.m(a25, a30, a32, a30);
            } catch(e34) {
                let v35 = [-1000000.0,0.0,-1.1019751985107344e+308];
                const v36 = [2.2250738585072014e-308,-3.0523145138510728,8.8528793692258,Infinity,-1.0,-9.967973400042263,0.9935714796792462,808174.2085289448,0.3227943248176133];
                const o37 = {
                    __proto__: v36,
                };
                v35 &= o37;
            }
            const v38 = this[8];
            a24 **= -33749;
            return v38;
        },
    };
    return o39;
}
f23(10000, 512);
f23(-33749, f23);
f23(3, f23);
function F43(a45, a46) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a46;
}
new F43(10000, 3);
const v48 = new F43(512, 22165);
new F43(1073741824, 3);
delete v48[1509295508];
Math.sinh(F43);
Math.sinh(10000);
const v60 = 127 * 3;
10000 >> -1000000000.0;
Math.atan(v60);
