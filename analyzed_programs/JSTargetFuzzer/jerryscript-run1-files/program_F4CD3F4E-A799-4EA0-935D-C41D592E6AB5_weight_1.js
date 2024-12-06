const v1 = new Set();
function f2() {
    return Set;
}
const v3 = [v1,Set];
const v4 = [v3,v3,f2,v3];
const v5 = [v4,v4,v4,v4,v4];
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v3;
}
new F6(v5, v5, v3);
new F6(v3, v3, v4);
new F6(v4, v5, v5);
function F14(a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a17;
}
new F14(F6, v4);
new F14(v1, v5);
new F14(Set, v4);
const v21 = [2147483649];
const v22 = [2147483648];
const v23 = [-3,-8];
function F24(a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a26;
}
const v27 = new F24(v22);
const v28 = new F24(v23);
const v29 = new F24(v22);
class C30 extends F24 {
    n(a32, a33, a34, a35) {
        v29[v21] = this;
        super.f;
        return v23;
    }
    constructor(a38, a39, a40) {
        super(a39);
        super.f;
        a39 * this;
        let v44 = 268435456;
        v44--;
        Math.log(v22);
        Math.sqrt(v44);
    }
}
const v48 = new C30(v29, v21, v23);
const v49 = new C30(v48, v23, v21);
const v50 = new C30(v48, v22, v23);
function f51(a52, a53) {
    const o61 = {
        __proto__: v22,
        "f": a53,
        "b": v48,
        [a53](a55, a56, a57) {
            for (let v58 = 0; v58 < 32; v58++) {
                a56["p" + v58] = v58;
            }
            return a53;
        },
        202: a52,
    };
    return o61;
}
f51(v27, f51(v27, v48));
f51(v50, v28);
const v66 = [-16,4];
try { v66.sort(45103); } catch (e) {}
typeof C30 === "object";
const t69 = "object";
t69.length *= v49["n"]();
[27658,1520640363,6,65537,839907017,-1024,38060];
[536870889];
new C30(v28, [65537,5749,3,59285], v21);
