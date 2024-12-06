new WeakMap();
const v11 = [2147483649];
const v12 = [2147483648];
const v13 = [-3,-8];
function F14(a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a16;
}
const v17 = new F14(v12);
const v18 = new F14(v13);
const v19 = new F14(v12);
class C20 extends F14 {
    n(a22, a23, a24, a25) {
        v19[v11] = this;
        super.f;
        return v13;
    }
    constructor(a28, a29, a30) {
        super(a29);
        super.f;
        a29 * this;
        let v34 = 268435456;
        v34--;
        Math.log(v12);
        Math.sqrt(v34);
    }
}
const v38 = new C20(v19, v11, v13);
const v39 = new C20(v38, v13, v11);
const v40 = new C20(v38, v12, v13);
function f41(a42, a43) {
    const o51 = {
        __proto__: v12,
        "f": a43,
        "b": v38,
        [a43](a45, a46, a47) {
            for (let v48 = 0; v48 < 32; v48++) {
                a46["p" + v48] = v48;
            }
            return a43;
        },
        202: a42,
    };
    return o51;
}
const v52 = f41(v17, v38);
function f53(a54, a55, a56, a57) {
    const o58 = {
        "g": a57,
        "b": -201582504,
        ...v17,
    };
    return o58;
}
f53(56229n, v11, 2090907408, 16);
f53(4n, v13, f53(-128n, v13, F14, -201582504), -201582504);
f41(v17, v52);
f41(v40, v18);
typeof C20 === "object";
const t54 = "object";
t54.length *= v39["n"]();
[27658,1520640363,6,65537,839907017,-1024,38060];
[536870889];
new C20(v18, [65537,5749,3,59285], v11);
