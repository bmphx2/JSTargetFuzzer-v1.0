new Uint8ClampedArray(9);
new Float64Array(5);
new Uint8Array(1000);
const v19 = `
    new WeakSet();
`;
eval(v19);
new Map();
const v31 = [2147483649];
const v32 = [2147483648];
const v33 = [-3,-8];
function f34() {
    const o40 = {
        "e": 1e-15,
        p(a38, a39) {
            return f34;
        },
        "f": 41151,
    };
    return o40;
}
let v41 = f34();
const v42 = f34();
let v43 = f34();
function F44(a46) {
    if (!new.target) { throw 'must be called with new'; }
    const o48 = {
        ..."42599",
    };
    new Float64Array();
}
const v51 = new F44(v41);
const o54 = {
    ...v42,
    set f(a53) {
        ({"a":v43,"b":v41,} = v51);
    },
};
function F55(a57) {
    if (!new.target) { throw 'must be called with new'; }
    const t40 = 536870912n;
    t40.f = a57;
}
function F62(a64, a65, a66, a67) {
    if (!new.target) { throw 'must be called with new'; }
    a66.d = a67;
    const t46 = 1000000000000.0;
    t46.f = a64;
}
new F62(-1, -7n, "-16", "global");
const v69 = new F55(v32);
const v70 = new F55(v33);
const v71 = new F55(v32);
class C72 extends F55 {
    m(a74, a75, a76) {
        v43 - a76;
    }
    constructor(a79, a80, a81) {
        super(a79, v43);
    }
    n(a83, a84, a85, a86) {
        v71[v31] = this;
        super.f;
        return v33;
    }
    /*
    constructor(a89, a90, a91) {
        super(a89);
        super.f;
        let v93 = F62 * this;
        v93--;
        Math.log(v32);
        Math.sqrt(268435456);
    }
    */
}
const v99 = new C72(v71, v31, v33);
const v100 = new C72(v99, v33, v31);
const v101 = new C72(v99, v32, v33);
function f102(a103, a104) {
    const o121 = {
        __proto__: v32,
        "f": a104,
        "b": v99,
        [a104](a106, a107, a108) {
            for (let v109 = 0; v109 < 32; v109++) {
                a107["p" + v109] = v109;
            }
            return a108;
        },
        m(a113, a114, a115, a116) {
            if (a114) {
                4001 ^ -a114;
            } else {
                for (let v120 = 0; v120 < 5; v120++) {
                }
            }
            return a116;
        },
        202: a103,
    };
    return o121;
}
f102(v69, f102(v69, v99));
f102(v101, v70);
typeof C72 === "object";
const t103 = "object";
t103.length *= v100["n"]();
[27658,1520640363,6,65537,839907017,-1024,38060];
[536870889];
new C72(v70, [65537,5749,3,59285], v31);
