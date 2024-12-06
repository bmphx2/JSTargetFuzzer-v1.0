new Uint8Array(8);
new Int32Array(8);
const v11 = new Uint8ClampedArray(181);
const o20 = {
    [8](a13, a14, a15) {
        try { a15(v11); } catch (e) {}
        v11[9] **= a13;
        return 181;
    },
};
Reflect.setPrototypeOf(o20, o20);
