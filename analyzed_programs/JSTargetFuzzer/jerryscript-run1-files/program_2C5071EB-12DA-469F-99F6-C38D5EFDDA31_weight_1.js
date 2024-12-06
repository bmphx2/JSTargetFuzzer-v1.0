function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 13;
    this.g = 13;
    this.d = 13;
}
new F0();
const v4 = new F0();
new F0();
const o15 = {
    __proto__: v4,
    "e": "7",
    "f": "7",
    "c": 2,
};
const t15 = "7";
t15[7] = 2n;
