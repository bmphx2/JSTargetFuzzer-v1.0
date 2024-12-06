for (let v5 = 0; v5 < 32; v5++) {
    const t1 = 255;
    t1["p" + v5] = v5;
}
function f9(a10, a11) {
    const o22 = {
        "g": 2,
        "c": 2,
        "e": a11,
        ...a11,
        n(a13, a14, a15) {
            let v16;
            try { v16 = this.m(2147483649, this, a11); } catch (e) {}
            try { this.defineProperty(v16); } catch (e) {}
            try { a11(); } catch (e) {}
            this.valueOf = v16;
            return a11;
        },
        "h": -43771,
        ...a11,
        "b": a11,
    };
    return a11;
}
f9(2, 1589571602);
f9(255, 255);
f9(255, -2147483647);
const v30 = [Infinity];
const v31 = [-9.40814191403733];
class C32 extends Date {
    constructor(a34, a35) {
        super(a35);
    }
}
new C32(v30, v31);
