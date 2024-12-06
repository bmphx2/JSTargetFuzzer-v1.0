function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -4294967295;
    this.c = -4294967295;
    this.a = -4294967295;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o19 = {
        "a": a7,
        [v4]: v3,
        set b(a9) {
            f6[9] = a9;
            var h = a7;
            function F10(a12, a13, a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = this;
                this.g = a7;
            }
            new F10(a7, a9, a9, a7);
            const v17 = new F10(a7, v5, v3, F0);
            new F10(a9, v3, a7, v17);
        },
    };
    return o19;
}
f6(v5, v3);
f6(v3);
f6(v4);
[2.0,-2.220446049250313e-16,-1000000000.0];
[1.0,-7.740583115722266];
[1000000.0];
const v28 = ([-16,4]).slice(45103);
const v31 = new BigInt64Array(2863);
v31[9] = v28;
