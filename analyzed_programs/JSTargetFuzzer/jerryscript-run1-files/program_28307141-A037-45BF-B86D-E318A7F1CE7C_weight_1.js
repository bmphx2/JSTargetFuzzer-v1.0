function f0() {
}
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a10;
}
new F7(-9, "BnmJ");
new F7(-65535, "BnmJ");
new F7(-12, "BnmJ");
new WeakMap();
const v16 = [2147483649];
let v17 = [2147483648];
const v18 = [-3,-8];
function F19(a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a21;
}
const v22 = new F19(v17);
const v23 = new F19(v18);
const v24 = new F19(v17);
class C25 extends F19 {
    n(a27, a28, a29, a30) {
        v24[v16] = this;
        super.f;
        return v18;
    }
    constructor(a33, a34, a35) {
        super(a34);
        super.f;
        a34 * this;
        const o39 = {
            __proto__: v16,
            2275: a35,
            "d": v17,
        };
        let v40 = 268435456;
        v40--;
        Math.log(v17);
        Math.sqrt(v40);
    }
}
const v44 = new C25(v24, v16, v18);
const v45 = new C25(v44, v18, v16);
const v46 = new C25(v44, v17, v18);
function f47(a48, a49) {
    const o57 = {
        __proto__: v17,
        "f": a49,
        "b": v44,
        [a49](a51, a52, a53) {
            for (let v54 = 0; v54 < 32; v54++) {
                a52["p" + v54] = v54;
            }
            return a49;
        },
        202: a48,
    };
    return o57;
}
f47(v22, f47(v22, v44));
function f60(a61, a62) {
    for (let v63 = 0; v63 < 5; v63++) {
        const v64 = `
            function F65(a67, a68) {
                if (!new.target) { throw 'must be called with new'; }
            }
        `;
        eval(v64);
    }
    return a61;
}
f60(f60, f60);
f47(v46, v23);
typeof C25 === "object";
const v77 = v45["n"]();
const t75 = "object";
t75.length *= v77;
let [,...v78] = "d";
v46[v17];
new F19(v77);
v46[1658] = "e";
v17 <<= v16;
[27658,1520640363,6,65537,839907017,-1024,38060];
[536870889];
new C25(v23, [65537,5749,3,59285], v16);
