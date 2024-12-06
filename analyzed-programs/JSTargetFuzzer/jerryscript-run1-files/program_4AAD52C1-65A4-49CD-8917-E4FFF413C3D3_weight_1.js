function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 255;
    this.f = 255;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function f6(a7, a8) {
    const o21 = {
        "b": a7,
        "c": a8,
        [a7](a10, a11) {
            const v12 = typeof a7;
            v12 === a8;
            return v12;
        },
        set a(a16) {
            do {
                f6 = this;
                a7++;
            } while (0 < 10)
        },
    };
    return a8;
}
f6(F0, v3);
f6(f6, v4);
f6(F0, v3);
[536870889,356188653,-4];
[1749126965,-12,-2147483648];
[536870889,-14,-58379];
new Array(1024);
let v31 = 2147483648n;
v31 %= v31;
