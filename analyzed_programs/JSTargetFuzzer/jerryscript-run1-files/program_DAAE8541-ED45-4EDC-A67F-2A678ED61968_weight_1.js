function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 65537;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v9 = [v5,F0,-33112n,268435439n];
[v3,F0,v4];
[v9];
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a14;
    this.d = a15;
    this.h = -118574351n;
}
new F12(v5, v5);
new F12(v3, v4);
new F12(v4, v5);
const v21 = new Int32Array(2083);
new Uint8Array(255);
const v27 = new Int16Array(7);
function f28(a29, a30, a31) {
    const o38 = {
        "h": Int32Array,
        set e(a33) {
            e = a30;
            [a31,a30];
            [v21];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v27,
        "b": Uint8Array,
        "c": 255,
        ...a29,
        1053877365: a30,
    };
    return o38;
}
const v39 = f28(2083, 255, 7);
const v40 = f28(v39, 7, 2083);
f28(f28, 255, 7);
v39[-2] &= 2083;
v27[-1] -= 7;
let v42 = 10;
for (; v42--;) {
    v40.h;
    v40[v4.toPrimitive] = 7;
}
