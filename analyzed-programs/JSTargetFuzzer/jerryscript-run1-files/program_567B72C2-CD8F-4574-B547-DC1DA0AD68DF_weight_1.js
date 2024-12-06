function f8() {
    return 9007199254740991;
}
const v12 = [2147483649];
const v13 = [2147483648];
const v14 = [-3,-8];
function F15(a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a17;
}
const v18 = new F15(v13);
const v19 = new F15(v14);
const v20 = new F15(v13);
class C21 extends F15 {
    n(a23, a24, a25, a26) {
        v20[v12] = this;
        super.f;
        return v14;
    }
    constructor(a29, a30, a31) {
        super(a30);
        super.f;
        a30 * this;
        let v35 = 268435456;
        v35--;
        Math.log(v13);
        Math.sqrt(v35);
    }
}
const v39 = new C21(v20, v12, v14);
const v40 = new C21(v39, v14, v12);
const v41 = new C21(v39, v13, v14);
function f42(a43, a44) {
    const o52 = {
        __proto__: v13,
        "f": a44,
        "e": v19,
        ...v41,
        "b": a43,
        "g": -58315,
        "a": f42,
        "b": v39,
        [a44](a46, a47, a48) {
            for (let v49 = 0; v49 < 32; v49++) {
                a47["p" + v49] = v49;
            }
            return a44;
        },
        202: a43,
        1853321172: f8,
        ..."o",
        6: v39,
        [v39]: F15,
        "c": "boolean",
    };
    return o52;
}
f42(v18, f42(v18, v39));
f42(v41, v19);
typeof C21 === "object";
const t57 = "object";
t57.length *= v40["n"]();
[27658,1520640363,6,65537,839907017,-1024,38060];
new Float64Array(255);
new Float64Array(238);
new Uint8Array(11);
[536870889];
new C21(v19, [65537,5749,3,59285], v12);
