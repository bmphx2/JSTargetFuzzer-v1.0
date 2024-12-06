function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 10000;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
if (v4) {
    try { v3["imul"](v5); } catch (e) {}
} else {
    v5.h;
}
[-4096,-4383,-65535,9007199254740990];
[4294967295,7,9,-14,8,-1456830468];
const v20 = [23235013,-38628,-2147483648,-369824739,-13111,-2147483647,-949534105,114667471];
const v26 = Array(256);
const o27 = {
    ...v26,
    "f": 1.1518387353664731e+308,
    "h": 512,
    "c": 2147483649,
    "b": 418629319,
    __proto__: v20,
};
