function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 129;
    this.d = 129;
}
const v3 = new F0();
new F0();
new F0();
try { v3.setUTCSeconds(); } catch (e) {}
const o16 = {
    "e": 3n,
    ...v3,
    [F0]: 255,
    [3n]: -28081,
    "a": 2,
};
