const v4 = `
    new WeakSet();
`;
eval(v4);
new Map();
const v16 = [2147483649];
const v17 = [2147483648];
const v18 = [-3,-8];
function f19() {
    const o25 = {
        "e": 1e-15,
        p(a23, a24) {
            return f19;
        },
        "f": 41151,
    };
    return o25;
}
let v26 = f19();
const v27 = f19();
let v28 = f19();
function F29(a31) {
    if (!new.target) { throw 'must be called with new'; }
}
const v32 = new F29(v26);
const o35 = {
    ...v27,
    set f(a34) {
        ({"a":v28,"b":v26,} = v32);
    },
};
function F36(a38) {
    if (!new.target) { throw 'must be called with new'; }
    const t33 = 536870912n;
    t33.f = a38;
}
const v39 = new F36(v17);
const v40 = new F36(v18);
const v41 = new F36(v17);
class C42 extends F36 {
    n(a44, a45, a46, a47) {
        v41[v16] = this;
        super.f;
        return v18;
    }
    constructor(a50, a51, a52) {
        super(a50);
        super.f;
        let v54 = a51 * this;
        v54--;
        Math.log(v17);
        Math.sqrt(268435456);
    }
}
const v60 = new C42(v41, v16, v18);
const v61 = new C42(v60, v18, v16);
const v62 = new C42(v60, v17, v18);
function f63(a64, a65) {
    const o73 = {
        __proto__: v17,
        "f": a65,
        "b": v60,
        [a65](a67, a68, a69) {
            for (let v70 = 0; v70 < 32; v70++) {
                a68["p" + v70] = v70;
            }
            return a69;
        },
        202: a64,
    };
    return o73;
}
f63(v39, f63(v39, v60));
f63(v62, v40);
typeof C42 === "object";
const t72 = "object";
t72.length *= v61["n"]();
[27658,1520640363,6,65537,839907017,-1024,38060];
[536870889];
new C42(v40, [65537,5749,3,59285], v16);
