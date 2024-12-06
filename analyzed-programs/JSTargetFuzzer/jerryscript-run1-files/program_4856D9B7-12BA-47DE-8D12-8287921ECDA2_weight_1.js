function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 1671311086;
    ~-37993n;
    this.f = 1671311086;
    this.c = 1671311086;
}
const v5 = new F0();
const v6 = new F0();
const v7 = new F0();
function f8(a9) {
    const o16 = {
        [v6](a11, a12) {
            for (let v13 = 0; v13 < 32; v13++) {
                "p" + v13;
                a11[a11] = v13;
            }
            return a11;
        },
        [a9]: a9,
        ...a9,
        "d": v5,
        "g": v6,
        ...a9,
        "e": F0,
    };
    return o16;
}
const v17 = f8(v7);
f8(F0);
f8(F0);
ArrayBuffer.isView();
[v6,v5,[[v7,v17]]];
const v29 = [512,512];
Object.defineProperty(v29, 30972, { writable: true, enumerable: true, value: 512 });
v29.length -= 255;
