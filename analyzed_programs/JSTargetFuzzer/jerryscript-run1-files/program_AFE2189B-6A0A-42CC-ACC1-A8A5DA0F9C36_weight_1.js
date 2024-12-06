function f0() {
    let v3 = -9007199254740990;
    const o16 = {
        "b": "n",
        "g": "g",
        __proto__: "n",
        "a": "n",
        get d() {
            const v7 = v3++;
            Object.defineProperty("g", 8, { get: f0, set: f0 });
            this[Symbol.iterator];
            Math.fround(v7 | this);
            return v3;
        },
    };
    return o16;
}
const v17 = f0();
const v18 = f0();
const v19 = f0();
function F20(a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v19;
}
const v23 = new F20(v18);
new F20(v17);
const v25 = new F20(v17);
function F26(a28, a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v31 = 0; v31 < 63; v31++) {
        Object.defineProperty(v17.__proto__, 536870889, { get: f0, set: f0 });
    }
    this.b = F20;
    this.a = v25;
    this.g = a29;
}
const v36 = new F26(v23, v17, v19);
new F26(v25, v19, v36);
new F26(v23, v18, v17);
const v44 = typeof (3 > 1);
("lx").charAt(128);
let [,...v46] = v44;
