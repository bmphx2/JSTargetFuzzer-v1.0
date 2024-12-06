const v2 = new Uint16Array(0);
const v5 = new Uint8ClampedArray(1713);
const v8 = new BigUint64Array(257);
const v9 = [v5,v2];
const v10 = [v8];
const v11 = [v2,1713,v10];
new Uint8ClampedArray(v8, 0, 0);
function f13(a14, a15, a16) {
    const o18 = {
        get d() {
            this.d = v9;
            return a16;
        },
        "d": v5,
    };
    return o18;
}
f13(v11, f13(v11, f13(v10, 1713, v10), v9), v10);
