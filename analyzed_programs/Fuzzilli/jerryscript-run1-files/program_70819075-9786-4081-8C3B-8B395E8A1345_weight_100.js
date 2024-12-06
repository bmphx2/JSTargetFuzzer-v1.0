const v4 = new Map();
let v5 = 536870889;
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -4096;
}
new F8(1927508705, 1927508705);
new F8(v5, Map);
const v14 = new F8(-4096, -4096);
async function* f15(a16, a17) {
    v14.__proto__ = v4;
    [F8,v5,,...a16] = v4;
    const v18 = await v14;
    yield v14;
    return v18;
}
f15(268435441, F8);
try { F8(); } catch (e) {}
F8 /= v4;
