[268435441,3,-1865,-6,-706819846,512,-16774,30493,1,2130975847];
[-4294967295,7,2,2147483648,4,-256,-5];
[-2];
[-607788246,-65537,-43965,-4294967297,-4294967296,1090432341];
[0,1015497863,-54459368,-2833];
[7,129,4,-1844669148,-14,700444406,-15,512,-2,-9];
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -16;
    this.d = -16;
    this.b = -16;
}
const v18 = new F15();
const v19 = new F15();
const v20 = new F15();
function f21(a22, a23) {
    const o27 = {
        [-2]: v19,
        "d": a23,
        "g": v19,
        1814: v20,
        ...v18,
        [a23]: a22,
        get a() {
            const t24 = delete v20[this];
            t24.d = a22;
            v19[257];
            return this;
        },
        [v20]: v19,
    };
    return o27;
}
f21(v20, v18);
f21(v19, f21);
f21(v18, F15);
function f34() {
    return v19;
}
new Float64Array(5);
new Uint8ClampedArray(3332);
const v46 = new Uint32Array(129);
v20.b = v46;
