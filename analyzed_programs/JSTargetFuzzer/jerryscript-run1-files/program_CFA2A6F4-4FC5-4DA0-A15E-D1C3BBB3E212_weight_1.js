const v2 = new Uint8ClampedArray(5);
const v5 = new Uint8ClampedArray(2883);
const v8 = new Uint16Array(4);
class C9 extends Uint8ClampedArray {
    [v5] = v2;
    [Uint16Array] = 2883;
    constructor(a11, a12, a13, a14) {
        super(v8, a12, a12);
        function F15(a17, a18, a19, a20) {
            if (!new.target) { throw 'must be called with new'; }
            this.g = Uint16Array;
            this.f = Uint8ClampedArray;
            this.e = 4;
        }
        new F15(a12, Uint16Array, a14, v5);
        new F15(a14, a13, 2883, this);
        new F15(v8, Uint8ClampedArray, a12, v2);
    }
}
new C9(5, 5, 2883, 4);
new C9(2883, 5, 2883, 4);
new C9(2883, 2883, 4, 2883);
if (4) {
    let [v27,,v28] = v2;
    v27 / v28;
} else {
    const o35 = {
        "maxByteLength": 3197,
    };
    const v37 = new ArrayBuffer(14, o35);
    new Uint16Array(v37);
}
