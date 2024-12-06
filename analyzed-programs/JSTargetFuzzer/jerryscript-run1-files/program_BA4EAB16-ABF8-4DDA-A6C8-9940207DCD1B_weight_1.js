new WeakSet();
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
        for (let v32 = 0; v32 < 32; v32++) {
            this["p" + v32] = v32;
        }
        a29 * this;
        let v37 = 268435456;
        v37--;
        Math.log(v12);
        Math.sqrt(v37);
    }
}
const v41 = new C20(v19, v11, v13);
const v42 = new C20(v41, v13, v11);
const v43 = new C20(v41, v12, v13);
function f44(a45, a46) {
    const o54 = {
        __proto__: v12,
        "f": a46,
        ...v41,
        1545: "f",
        "e": v41,
        "h": F14,
        9: -216925.83954264037,
        "b": v41,
        [a46](a48, a49, a50) {
            for (let v51 = 0; v51 < 32; v51++) {
                a48["p" + v51] = v51;
            }
            return a46;
        },
        202: a45,
    };
    try { v19.valueOf(o54, o54, v17, v42, WeakSet); } catch (e) {}
    o54.__proto__;
    return v41;
}
f44(v41, f44(v17, v41));
typeof f44(v43, v18) === "boolean";
const t55 = "object";
t55.length *= v42["n"]();
[27658,1520640363,6,65537,839907017,-1024,38060];
[536870889];
new C20(v18, [65537,5749,3,59285], v11);
