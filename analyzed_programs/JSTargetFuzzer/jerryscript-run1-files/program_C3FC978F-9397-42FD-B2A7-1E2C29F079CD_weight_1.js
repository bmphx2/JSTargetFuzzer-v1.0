function f3(a4, a5) {
    const o11 = {
        set g(a7) {
            this.valueOf = a7;
            const t4 = 45565;
            t4[2] = this;
            for (let v8 = 0; v8 < 32; v8++) {
                a7["p" + v8] = v8;
            }
        },
        ...a4,
        "h": a4,
        128: -12,
        8: -12,
        ...a4,
        "e": a5,
    };
    return a4;
}
const v12 = f3(-12, 45565);
const v13 = f3(45565, 1073741823);
f3(45565, -12);
function F21(a23, a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    a23.c = a24;
    this.f = a23;
    this.g = a23;
    const o30 = {
        toString(a29) {
            a29 = 1073741823;
            this[-164507876] = this;
            return this;
        },
    };
}
new F21(-12, 1073741823, 1073741823, v12);
new F21(f3, 45565, -13, v12);
new F21(45565, -13, 11, v13);
function f34(a35, a36) {
    class C37 {
    }
    return a36;
}
