function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 1671311086;
    this.f = 1671311086;
    this.c = 1671311086;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o14 = {
        [v4](a9, a10) {
            for (let v11 = 0; v11 < 32; v11++) {
                "p" + v11;
                a9[a9] = v11;
            }
            return a9;
        },
        [a7]: a7,
        ...a7,
        "d": v3,
        "g": v4,
        ...a7,
        "e": F0,
    };
    return o14;
}
const v15 = f6(v5);
f6(F0);
f6(F0);
ArrayBuffer.isView();
[v4,v3,[[v5,v15]]];
const v27 = [512,512];
Object.defineProperty(v27, 30972, { writable: true, enumerable: true, value: 512 });
v27.length -= 255;
