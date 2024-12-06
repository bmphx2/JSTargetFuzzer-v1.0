function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 9007199254740992;
    this.a = 9007199254740992;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f9(a10, a11, a12, a13) {
    const o14 = {
        ...a12,
        [v3]: v4,
        [v4]: v5,
        [a10]: 10,
        ...v5,
        "e": a11,
        6: a12,
        "a": -2,
        ...v4,
        [-2]: a10,
    };
    return a11;
}
f9(v5, v5, v3, 10);
const v16 = f9(f9, v3, v5, -2);
f9(v4, v4, v5, 55785);
async function* f19(a20, a21) {
    return a21;
}
try { Array.from(Uint8ClampedArray, v16); } catch (e) {}
("find").slice(v16);
const o27 = {
    ...v16,
};
/[^a\sc]/isum;
