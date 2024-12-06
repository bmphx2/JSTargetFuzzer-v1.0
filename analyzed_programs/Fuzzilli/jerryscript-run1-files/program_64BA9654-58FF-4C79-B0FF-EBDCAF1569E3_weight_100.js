const v0 = [];
function f1() {
    return v0;
}
function f8(a9, a10, a11, a12) {
    const o13 = {
        ...v0,
        ...a9,
        __proto__: v0,
        "b": a10,
        "constructor": 1073741823n,
        1227: -65537n,
        "c": a10,
        "g": a10,
        "e": f1,
        [12n]: a10,
        "d": -65537,
        ...a11,
        [a11]: 12n,
    };
    return o13;
}
f8(536870889, 536870889, 1073741823n, 536870889);
f8(f8(536870889, -8544, -65537n, -8544), 536870889, -65537n, -65537);
function F17(a19, a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a19;
    this.a = a20;
    this.e = 12n;
}
new F17(12n, 1073741823n, 1073741823n, F17);
new F17(-65537n, 12n, 1073741823n, 12n);
new F17(12n, 12n, 12n, f8);
const o35 = {
    n(a27) {
        for (let i30 = 0;
            (() => {
                for (let i = 0; i < 5; i++) {
                }
                return i30 === 1;
            })();
            (() => {
                super.a = 21001;
            })()) {
        }
        return this;
    },
};
