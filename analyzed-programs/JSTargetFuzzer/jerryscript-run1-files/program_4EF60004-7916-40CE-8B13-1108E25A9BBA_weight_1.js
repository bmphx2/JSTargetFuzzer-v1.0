function f3() {
    return "o";
}
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a13;
}
new F10("o", 1073741823);
new F10("valueOf", 1073741823);
new F10("o", 1073741823);
const v19 = new Int32Array(2083);
new Uint8Array(255);
const v25 = new Int16Array(7);
function f26(a27, a28, a29) {
    const o43 = {
        "h": Int32Array,
        set e(a31) {
            e = a28;
            [a29,a28];
            ([]).sort();
            const v36 = new Uint8Array();
            Symbol.toPrimitive != v36;
            [v19];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v25,
        "b": Uint8Array,
        "c": 255,
        ...a27,
        1053877365: a28,
    };
    return o43;
}
const v44 = f26(2083, 255, 7);
const v45 = f26(v44, 7, 2083);
f26(f26, 255, 7);
v44[-2] &= 2083;
v25[-1] -= 7;
let v47 = 10;
for (; v47--;) {
    v45.h;
    v45[Symbol.toPrimitive] = 7;
}
