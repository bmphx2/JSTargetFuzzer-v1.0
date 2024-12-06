const v0 = [10,65536,-11,5296,-1367489273,-17479];
const v1 = [4,1];
const v2 = [-1397282357,-51338,7,7,2,11,5,1466275835];
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v1;
    this.b = v0;
    this.h = v0;
}
const v6 = new F3(v1);
const v7 = new F3(v2);
new F3(v0);
class C9 extends F3 {
    constructor(a11, a12, a13) {
        super(v1);
        let v14 = 10;
        for (; v14--;) {
            const v17 = Symbol.iterator;
            const o26 = {
                [v17]() {
                    let v19 = 10;
                    const o25 = {
                        next() {
                            v19--;
                            const v23 = v19 == 0;
                            const o24 = {
                                "done": v23,
                                "value": v19,
                            };
                            return o24;
                        },
                    };
                    return o25;
                },
            };
        }
    }
}
const v27 = new C9(v6, v7, v1);
const v28 = new C9(v27, v27, v2);
new C9(v28, v27, v0);
function f30() {
    const o34 = {
        4096: 24473,
        __proto__: "sticky",
        "g": "sticky",
        ..."sticky",
        ["sticky"]: -2.220446049250313e-16,
        [24473]: "sticky",
        ..."sticky",
        13: "sticky",
        "f": 24473,
        "a": 24473,
        "b": "sticky",
        ..."sticky",
        "e": -2.220446049250313e-16,
    };
    return o34;
}
const v35 = f30();
const v36 = f30();
f30();
function f38() {
    return v36;
}
function F42(a44, a45, a46) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v35;
}
new F42(v35, 4294967296, v36);
const v48 = new F42(4294967296, -53536, v36);
new F42(v48, v0, v36);
new Int16Array(7);
new Int16Array(9);
let v58 = new Uint32Array(2);
v58 |= (1000.0)[8];
try {
} catch(e66) {
    v48.g = e66;
}
