function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -56002;
    this.c = -56002;
}
const v3 = new F0();
new F0();
new F0();
const v18 = `
    new WeakSet();
`;
eval(v18);
new Map();
const v30 = [2147483649];
const v31 = [2147483648];
const v32 = [-3,-8];
function f33() {
    const o39 = {
        "e": 1e-15,
        p(a37, a38) {
            return f33;
        },
        "f": 41151,
    };
    return o39;
}
let v40 = f33();
const v41 = f33();
let v42 = f33();
function F43(a45) {
    if (!new.target) { throw 'must be called with new'; }
    const o47 = {
        ..."42599",
    };
    new Float64Array();
}
const v50 = new F43(v40);
const o53 = {
    ...v41,
    set f(a52) {
        ({"a":v42,"b":v40,} = v50);
    },
};
function F54(a56) {
    if (!new.target) { throw 'must be called with new'; }
    const t45 = 536870912n;
    t45.f = a56;
}
function F61(a63, a64, a65, a66) {
    if (!new.target) { throw 'must be called with new'; }
    a65.d = a66;
    this.f = a63;
}
new F61(-1, -7n, "-16", "global");
const v68 = new F54(v31);
const v69 = new F54(v32);
for (let i72 = 0, i73 = 10; i72 < i73; i72++, i73--) {
    let v82;
    try { v82 = o53.some(v30, v3); } catch (e) {}
    try { v82(1000000000000.0, "bigint", "bigint", v82, v68); } catch (e) {}
    let v87 = +-1.0;
    const v88 = !-1.0;
    Math.cbrt(v88);
    Math.atanh(v87);
    v88 / 53665;
    v87++;
}
const v95 = new F54(v31);
class C96 extends F54 {
    m(a98, a99, a100) {
        v42 - a100;
    }
    constructor(a103, a104, a105) {
        super(a103, v42);
    }
    n(a107, a108, a109, a110) {
        v95[v30] = this;
        super.f;
        return v32;
    }
    /*
    constructor(a113, a114, a115) {
        super(a113);
        super.f;
        let v117 = a114 * this;
        v117--;
        Math.log(v31);
        Math.sqrt(268435456);
    }
    */
}
const v123 = new C96(v95, v30, v32);
const v124 = new C96(v123, v32, v30);
const v125 = new C96(v123, v31, v32);
function f126(a127, a128) {
    const o145 = {
        __proto__: v31,
        "f": a128,
        "b": v123,
        [a128](a130, a131, a132) {
            for (let v133 = 0; v133 < 32; v133++) {
                a131["p" + v133] = v133;
            }
            return a132;
        },
        m(a137, a138, a139, a140) {
            if (a138) {
                4001 ^ -a138;
            } else {
                for (let v144 = 0; v144 < 5; v144++) {
                }
            }
            return a140;
        },
        202: a127,
    };
    return o145;
}
f126(v68, f126(v68, v123));
f126(v125, v69);
typeof C96 === "object";
const t118 = "object";
t118.length *= v124["n"]();
[27658,1520640363,6,65537,839907017,-1024,38060];
[536870889];
new C96(v69, [65537,5749,3,59285], v30);
