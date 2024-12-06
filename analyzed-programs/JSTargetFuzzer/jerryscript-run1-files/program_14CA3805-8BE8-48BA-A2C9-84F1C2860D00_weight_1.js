new Set();
function F14() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -9;
}
const v17 = new F14();
const o19 = {
    "f": "4294967297",
    ["4294967297"]: 129,
    "g": -65536,
    "a": 129,
    "d": "flags",
    ...v17,
    get b() {
        return this;
    },
};
