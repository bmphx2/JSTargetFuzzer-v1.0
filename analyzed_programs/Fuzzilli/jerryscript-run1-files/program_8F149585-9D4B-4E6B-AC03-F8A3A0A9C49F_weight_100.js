function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 65537n;
}
new F3(65537n);
const v7 = new F3(65537n);
new F3(-378128870n);
function f9(a10, a11) {
    const o16 = {
        get d() {
            class C14 extends v7.constructor {
                c;
                [65537n] = this;
            }
            new C14();
            return this;
        },
        "a": a11,
        "g": a10,
        [a11]: 65537n,
        [a10]: a10,
    };
    return o16;
}
const v17 = f9(-207769690n, -378128870n);
f9(65537n, 65537n);
f9(65537n, -378128870n);
new Float64Array(127);
new Int8Array(18);
const v31 = new Int8Array(58);
v31[18] = v17;
