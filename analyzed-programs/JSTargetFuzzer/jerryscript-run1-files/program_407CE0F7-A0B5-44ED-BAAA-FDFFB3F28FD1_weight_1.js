function f0() {
    let v3 = -9007199254740990;
    const o21 = {
        "b": "n",
        "g": "g",
        __proto__: "n",
        "a": "n",
        get d() {
            const v7 = v3++;
            Object.defineProperty("g", 8, { get: f0, set: f0 });
            this[Symbol.iterator];
            const v14 = v7 | this;
            gc(10000);
            function f18() {
                return f18;
            }
            class C19 extends f18 {
            }
            Math.fround(v14);
            return v3;
        },
    };
    return o21;
}
const v22 = f0();
const v23 = f0();
const v24 = f0();
function F25(a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v24;
}
const v28 = new F25(v23);
new F25(v22);
const v30 = new F25(v22);
function F31(a33, a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v36 = 0; v36 < 63; v36++) {
        Object.defineProperty(v22.__proto__, 536870889, { get: f0, set: f0 });
    }
    this.b = F25;
    this.a = v30;
    this.g = a34;
}
const v41 = new F31(v28, v22, v24);
new F31(v30, v24, v41);
new F31(v28, v23, v22);
const v49 = typeof (3 > 1);
("lx").charAt(128);
let [,...v51] = v49;
