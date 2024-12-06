function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 10000;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o14 = {
        "d": v3,
        1252: a7,
        "c": v4,
        "a": a7,
        toString(a9) {
            let v10;
            try { v10 = a9(this, a7, this, this); } catch (e) {}
            const v11 = [a9,a9,v10,v10,F0];
            const v12 = [a9,v11,a9,v11,v11];
            [v12,v12,v5,this,a7];
            return this;
        },
        "e": v4,
        "b": F0,
        "g": v3,
    };
    return o14;
}
const v15 = f6(v4);
const v16 = f6(v4);
f6(v3);
function F21(a23, a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a25;
    this.f = a25;
}
new F21(-256, v16, v15);
const v27 = new F21(919004637, v15, v15);
new F21(1000, v27, v15);
typeof 1000 === "object";
try {
    for (let v32 = 0; v32 < 32; v32++) {
        const t41 = "object";
        t41["p" + v32] = v32;
    }
} catch(e35) {
    e35 << e35;
} finally {
    delete v5[v4];
    v3.__proto__;
}
