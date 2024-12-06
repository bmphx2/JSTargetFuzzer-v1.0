const v0 = [2147483647,9007199254740990,0,9007199254740990,-9223372036854775808,1,255];
const v1 = [-2];
const v2 = [59636,577435599,8,10,268435440,7,9,8];
const v4 = new Date();
const v5 = [v1,v2];
const v6 = [v2,v1,v0];
[v6,v6,v4];
function f8(a9, a10) {
    const o14 = {
        o(a12, a13) {
            super.f = this;
            this[1] = v4;
            Object.defineProperty(v0, 5, { configurable: true, get: Date, set: Date });
            return Date;
        },
        "f": a9,
        "e": a10,
        "d": a9,
        "a": v5,
        "b": a10,
        "g": a9,
        "h": v6,
    };
    return a9;
}
f8(v0, f8(v5, v0));
f8(v1, v5);
for (const v22 of "preventExtensions") {
    break;
}
