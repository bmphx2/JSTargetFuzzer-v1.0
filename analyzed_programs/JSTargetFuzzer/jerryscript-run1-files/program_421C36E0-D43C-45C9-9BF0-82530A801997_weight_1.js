function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 129;
    this.g = 129;
}
const v3 = new F0();
const v4 = new F0();
new F0();
F0 == v4;
new Float64Array(1575);
const v12 = new Uint16Array(64);
new BigInt64Array(2116);
class C16 {
    constructor(a18, a19) {
    }
    set f(a24) {
        const v25 = (a26, a27, a28, a29) => {
            try { a24(a29); } catch (e) {}
            new Uint8ClampedArray(1);
            new Int16Array(14);
            new Float32Array(9);
            return Int16Array;
        };
    }
}
const v40 = new C16(v3, v4);
new C16(v40, v3);
new C16(C16, v3);
new Float64Array(5);
new Uint8Array(3824);
new BigInt64Array(16);
const v56 = [[9007199254740991n,9007199254740991n,64n,64n,-2n],64n,-2n,9007199254740991n];
[v56,v56,v56];
class C61 {
    static [v4] = 1073741823n;
    [v12] = 64;
    static 255 = 64;
}
new C61();
new C61();
new C61();
try {
const t0 = -61913n;
t0();
} catch (e) {}
let v70 = 1000;
const v72 = v70 >> v70;
v72 || -47218;
+-47218;
!-47218;
-601455250 & v72;
class C77 {
    3 = 5;
}
new C77();
new C77();
new C77();
v70++;
