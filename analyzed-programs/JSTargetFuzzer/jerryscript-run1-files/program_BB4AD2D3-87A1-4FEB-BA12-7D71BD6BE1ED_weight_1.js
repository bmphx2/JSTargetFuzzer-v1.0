function f0() {
    const o10 = {
        "b": "caller",
        "d": 1,
        [-6.073650423899249](a5) {
            super.g = a5;
            return "caller";
        },
    };
    return o10;
}
const v11 = f0();
const v12 = f0();
const v13 = f0();
function F14(a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a16;
}
const v17 = new F14(v11);
const v18 = new F14(f0);
const v19 = new F14(v18);
try { v11.n(v12, F14, 9007199254740990, v13); } catch (e) {}
for (let v25 of v11[8]) {
    (v25 = 9007199254740990) | v19;
}
let v27;
try { v27 = v17.reduceRight(v17, f0, f0, v19); } catch (e) {}
delete v12[v27];
