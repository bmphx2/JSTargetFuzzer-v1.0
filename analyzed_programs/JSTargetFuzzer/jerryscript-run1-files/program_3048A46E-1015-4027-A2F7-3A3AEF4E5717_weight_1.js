function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a9;
    const v11 = [65537,-345187051];
    const v12 = [v11,v11,v11,v11,v11];
    const v13 = [v12,v12,v12];
    class C14 {
        constructor(a16, a17, a18, a19) {
            v12.unshift(v11);
            v12[Symbol.replace] = v13;
        }
    }
    const v23 = new C14();
    new C14(v23, v11, v11, v11);
    this.c = 9;
}
new F7(-46992, 2147483649);
new F7(-14, 63821824);
new F7(-9223372036854775807, 9);
let v28 = -12n;
v28 >>= v28;
