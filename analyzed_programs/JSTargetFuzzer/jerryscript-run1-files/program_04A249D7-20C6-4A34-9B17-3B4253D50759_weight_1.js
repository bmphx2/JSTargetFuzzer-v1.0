function f0() {
}
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 1000000000.0;
    this.a = -9.685872378515999;
}
new F7(-9.685872378515999, 2.220446049250313e-16);
new F7(2.220446049250313e-16, 1000000000.0);
new F7(2.220446049250313e-16, 2.220446049250313e-16);
new Float32Array(10);
new Uint8Array(2);
new BigInt64Array(2);
const v27 = `
    new WeakSet();
`;
eval(v27);
new Map();
const v39 = [2147483649];
const v40 = [2147483648];
const v41 = [-3,-8];
function f42() {
    const o48 = {
        "e": 1e-15,
        p(a46, a47) {
            return f42;
        },
        "f": 41151,
    };
    return o48;
}
let v49 = f42();
const v50 = f42();
let v51 = f42();
function F52(a54) {
    if (!new.target) { throw 'must be called with new'; }
    const o56 = {
        ..."42599",
    };
    new Float64Array();
}
const v59 = new F52(v49);
const o62 = {
    ...v50,
    set f(a61) {
        ({"a":v51,"b":v49,} = v59);
    },
};
function F63(a65) {
    if (!new.target) { throw 'must be called with new'; }
    const t50 = 536870912n;
    t50.f = a65;
}
function F70(a72, a73, a74, a75) {
    if (!new.target) { throw 'must be called with new'; }
    a74.d = a75;
    this.f = a72;
}
new F70(-1, -7n, "-16", "global");
const v77 = new F63(v40);
const v78 = new F63(v41);
const v79 = new F63(v40);
class C80 extends F63 {
    m(a82, a83, a84) {
        v51 - a84;
    }
    constructor(a87, a88, a89) {
        super(a87, v51);
    }
    n(a91, a92, a93, a94) {
        v79[v39] = this;
        super.f;
        return v41;
    }
    /*
    constructor(a97, a98, a99) {
        super(a97);
        super.f;
        let v101 = a98 * this;
        v101--;
        Math.log(v40);
        Math.sqrt(268435456);
    }
    */
}
const v107 = new C80(v79, v39, v41);
const v108 = new C80(v107, v41, v39);
const v109 = new C80(v107, v40, v41);
function f110(a111, a112) {
    const o129 = {
        __proto__: v40,
        "f": a112,
        "b": v107,
        11: a111,
        "d": BigInt64Array,
        "g": a111,
        ["-16"]: Uint8Array,
        [a112]: v41,
        [a112](a114, a115, a116) {
            for (let v117 = 0; v117 < 32; v117++) {
                a115["p" + v117] = v117;
            }
            return a116;
        },
        m(a121, a122, a123, a124) {
            if (a122) {
                4001 ^ -a122;
            } else {
                for (let v128 = 0; v128 < 5; v128++) {
                }
            }
            return a124;
        },
        202: a111,
    };
    return o129;
}
f110(v77, f110(v77, v107));
f110(v109, v78);
typeof C80 === "object";
const t117 = "object";
t117.length *= v108["n"]();
[27658,1520640363,6,65537,839907017,-1024,38060];
[536870889];
new C80(v78, [65537,5749,3,59285], v39);
