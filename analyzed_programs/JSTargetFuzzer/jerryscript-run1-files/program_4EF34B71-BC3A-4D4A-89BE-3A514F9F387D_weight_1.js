function f0() {
}
function f1() {
    const o8 = {
        set a(a3) {
            this.d = f0;
            this & this;
        },
        "e": f0,
        "f": f0,
        "b": f0,
        "d": f0,
    };
    return o8;
}
const v9 = f1();
const v10 = f1();
const v11 = f1(v10, f1, v10);
const v14 = new Array(1);
function F15(a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a17;
    this.e = v11;
}
new F15(v10, 1);
const v20 = new F15(v9, v11);
new F15(v10, v20, v14, Array);
const v29 = new Set();
class C33 {
    6 = -1073741824n;
    set e(a35) {
        try {
            super.toString(-1073741824n, 12);
        } catch(e37) {
        }
    }
    static 3;
    m(a39, a40, a41) {
        a41 *= 2023143923n;
        v29[268435439] <<= -1550667973;
        new Float32Array(0);
        for (let [i49, i50] = (() => {
                for (let v47 = 0; v47 < 5; v47++) {
                }
                return [0, 10];
            })();
            i49 < i50;
            (() => {
                const o54 = {
                };
                i49++;
            })()) {
        }
        new Float32Array(9);
        new Int32Array(1000);
        return 0;
    }
}
new C33();
new C33();
new C33();
const v68 = new Int32Array(2083);
new Uint8Array(255);
const v74 = new Int16Array(7);
function f75(a76, a77, a78) {
    const o85 = {
        "h": Int32Array,
        set e(a80) {
            e = a77;
            [a78,a77];
            [v68];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v74,
        "b": Uint8Array,
        "c": 255,
        ...a76,
        [Int16Array]: a77,
        [2083]: 12,
        "global": a78,
        "e": v68,
        ...C33,
        1053877365: a77,
    };
    return o85;
}
const v86 = f75(2083, 255, 7);
const v87 = f75(v86, 7, 2083);
f75(f75, 255, 7);
v86[-2] &= 2083;
v74[-1] -= 7;
let v89 = 10;
for (; v89--;) {
    v87.h;
    v87[Symbol.toPrimitive] = 7;
}
