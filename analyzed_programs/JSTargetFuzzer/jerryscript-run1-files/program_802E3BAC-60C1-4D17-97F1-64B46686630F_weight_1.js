function f0() {
}
const v2 = [,,f0,,f0];
const v3 = [,f0,,f0,v2];
const v4 = [v2,f0,v3,f0,,v3,f0];
function f5(a6, a7) {
    const o21 = {
        [a7]: undefined,
        "h": v4,
        "e": f5,
        get a() {
            Object.defineProperty(a6, this === f0, { writable: true, get: f0 });
            new f0();
            try { a6.shift(); } catch (e) {}
            new Float32Array(a6);
            new DataView(-65535);
            const v20 = new print(84);
            return v20;
        },
    };
    return o21;
}
f5(v3, v3);
const v23 = f5(v3, v2);
f5(v3, f5, v2, v23);
function F28(a30, a31, a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
    this.unicode = a33;
    this.b = a32;
    this.h = v4;
}
new F28(v3, v2, 1, v4);
new F28(v3, v2, 256, undefined, v23);
new F28(v3, v2, 1, v3);
78967273n | 268435439n;
