new BigUint64Array(129);
new Float64Array(16);
new Int32Array(512);
[268435441,3,-1865,-6,-706819846,512,-16774,30493,1,2130975847];
[-4294967295,7,2,2147483648,4,-256,-5];
[-2];
[-607788246,-65537,-43965,-4294967297,-4294967296,1090432341];
[0,1015497863,-54459368,-2833];
[7,129,4,-1844669148,-14,700444406,-15,512,-2,-9];
function F30() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -16;
    this.d = -16;
    this.b = -16;
}
const v33 = new F30();
const v34 = new F30();
const v35 = new F30();
function f36(a37, a38) {
    const o42 = {
        [-2]: v34,
        "d": a38,
        "g": v34,
        1814: v35,
        ...v33,
        [a38]: a37,
        get a() {
            const t27 = delete v35[this];
            t27.d = a37;
            v34[257];
            return this;
        },
        [v35]: v34,
    };
    return o42;
}
f36(v35, v33);
f36(v34, f36);
f36(v33, F30);
function f49() {
    return v34;
}
new Float64Array(5);
new Uint8ClampedArray(3332);
function f61(a62, a63) {
    a63(a63);
    a62[9] = a63;
    return f61;
}
new Promise(f61);
const v67 = new Uint32Array(129);
v35.b = v67;
