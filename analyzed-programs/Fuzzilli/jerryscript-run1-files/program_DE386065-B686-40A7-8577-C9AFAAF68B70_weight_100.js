const v3 = [-4,-4,-371516652,-4,536870889];
const v4 = [536870889,-371516652,536870889,v3,-371516652];
const v5 = [v3,v3,v4,v3];
function f6(a7, a8) {
    const o15 = {
        "h": a7,
        [a7](a10, a11) {
            [127,-1024,2036893667,-4,-1774132400,435331922];
            [125840336,1073741825,8,8939,-61124];
            [9,-799932431,-1024,-7,-42955];
            return a10;
        },
        "b": a7,
        [-4]: v5,
        [-371516652]: v4,
        2147483649: v3,
    };
    return o15;
}
const v16 = f6(v3, 536870889);
const v17 = f6(v4, 536870889);
const v18 = f6(v17, -4);
new Array(2882);
v3.length;
function F23(a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a25;
    this.d = 536870889;
}
new F23(v17, F23);
const v28 = new F23(v18, -371516652);
const v29 = new F23(v16, v18);
Object.defineProperty(v29, 2882, { configurable: true, get: Array });
try { v28.getMinutes(536870889, F23, v17); } catch (e) {}
