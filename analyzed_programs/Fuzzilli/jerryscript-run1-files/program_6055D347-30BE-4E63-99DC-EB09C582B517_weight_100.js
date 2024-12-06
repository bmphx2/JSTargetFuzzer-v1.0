function f0() {
    const o13 = {
        set a(a5) {
            const o8 = {
                "maxByteLength": 3107,
            };
            const v10 = new ArrayBuffer(3107, o8);
            new Uint32Array(v10);
        },
        ...8.226112233021315,
        ...-9223372036854775807,
    };
    return o13;
}
const v14 = f0();
const v15 = f0();
const v16 = f0();
class C17 extends f0 {
    #m(a19) {
        const v20 = v14[1073741824];
        try {
            super.valueOf(v20, v15, v20);
        } catch(e22) {
        }
        return v16;
    }
    toString(a24, a25) {
        const v27 = new Map();
        v27.length = 0;
        v15[v15] = a25;
        return this;
    }
}
new C17();
const v30 = new C17();
const v31 = new C17();
function f32() {
    return v16;
}
function F33(a35, a36, a37) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a37;
    this.b = v30;
}
new F33(v15, C17, v16);
const v39 = new F33(v16, v15, v14);
new F33(v39, v15, C17);
v31[65536] = v15;
const o43 = {
    "maxByteLength": 2147483648,
};
const v45 = new ArrayBuffer(128, o43);
new Uint8ClampedArray(v45);
