function F0() {
    if (!new.target) { throw 'must be called with new'; }
    F0.b = -9007199254740990;
    this.f = -9007199254740990;
    this.c = -9007199254740990;
}
const v3 = new F0();
const v4 = new F0();
new F0();
new Int8Array(198);
const v11 = new Int8Array(828);
const v14 = new Uint8ClampedArray(1024);
function f15(a16, a17, a18, a19) {
    const o32 = {
        [828](a21, a22) {
            let v23;
            try { v23 = a21(a22, a16); } catch (e) {}
            return v23[1453353462];
        },
        valueOf(a26, a27, a28) {
            return 1073741824;
        },
        "a": v11,
        __proto__: v14,
        "c": a18,
    };
    return o32;
}
f15(v4, 828, 828, 1024);
f15(v3, 828, 828, 198);
f15(v4, 198, 1024, 828);
const v40 = [[9007199254740991n,9007199254740991n,64n,64n,-2n],64n,-2n,9007199254740991n];
[v40,v40,v40];
try {
const t0 = -61913n;
t0();
} catch (e) {}
let v50 = 1000;
const v52 = v50 >> v50;
v52 || -47218;
+-47218;
!-47218;
-601455250 & v52;
v50++;
