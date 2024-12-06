function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 59707;
    this.g = 59707;
    this.h = 59707;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
let v8 = 10;
for (; v8--;) {
    v3.h = v3;
    v3[Symbol.toPrimitive];
}
function F14(a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -1024n;
    this.a = a18;
}
const v19 = new F14(-1024n, -1024n, v3);
const v20 = new F14(v3, 2147483648n, v4);
new F14(v5, 2147483648n, v4);
try {
    new F14();
} catch(e24) {
    try { e24(e24, F14, e24, v8, e24); } catch (e) {}
    let v26;
    try { v26 = v5.toISOString(v19); } catch (e) {}
    v20[214079101] = v26;
    for (let v28 = 0; v28 < 32; v28++) {
        v19["p" + v28] = v28;
    }
} finally {
}
