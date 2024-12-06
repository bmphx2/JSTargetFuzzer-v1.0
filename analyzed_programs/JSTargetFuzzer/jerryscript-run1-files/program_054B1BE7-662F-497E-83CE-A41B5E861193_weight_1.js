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
new Uint16Array(64);
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
try {
const t0 = -61913n;
t0();
} catch (e) {}
let v66 = 1000;
const v68 = v66 >> v66;
v68 || -47218;
+-47218;
!-47218;
-601455250 & v68;
v66++;
