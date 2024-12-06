function F8(a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a10;
    this.f = a11;
    this.g = "symbol";
    const o14 = {
        valueOf() {
            a11[127] = undefined;
            return "i";
        },
    };
}
for (let v15 = 0; v15 < 32; v15++) {
    const t13 = "p";
    t13["p" + v15] = v15;
}
new F8(1073741823, "p", "symbol");
new F8(9007199254740992, "p", "p");
new F8(-929623621, "i", "p");
const v25 = new BigInt64Array(BigInt64Array, BigInt64Array, BigInt64Array);
v25.fill(-3);
