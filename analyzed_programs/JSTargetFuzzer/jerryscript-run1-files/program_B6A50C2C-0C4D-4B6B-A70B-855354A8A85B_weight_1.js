const v4 = new WeakMap();
new Int8Array(7);
new Int32Array(256);
new Uint32Array(10);
const v17 = [2147483649];
const v18 = [2147483648];
const v19 = [-3,-8];
function F20(a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a22;
}
const v23 = new F20(v18);
const v24 = new F20(v19);
const v25 = new F20(v18);
class C26 extends F20 {
    n(a28, a29, a30, a31) {
        v25[2147483648n] = this;
        super.f;
        return v19;
    }
    constructor(a34, a35, a36) {
        super(a35);
        super.f;
        a35 * this;
        let v40 = 268435456;
        v40--;
        Math.log(v18);
        Math.sqrt(v40);
    }
}
const v44 = new Int32Array(v25, v17, v19);
const v45 = new C26(v44, v19, v17);
const v46 = new C26(v44, v18, v19);
function f47(a48, a49) {
    const o57 = {
        __proto__: v4,
        "f": a49,
        "b": v44,
        [a49](a51, a52, a53) {
            for (let v54 = 0; v54 < 32; v54++) {
                a52[a49 + v54] = v54;
            }
            return a49;
        },
        202: 127n,
    };
    return o57;
}
f47(v23, f47(v23, v44));
f47(v46, v24);
typeof -1.0 === "object";
const t48 = "object";
t48.length *= v45["n"]();
[27658,1520640363,6,65537,839907017,-1024,38060];
[536870889];
new C26(v24, [65537,5749,3,59285], v17);
