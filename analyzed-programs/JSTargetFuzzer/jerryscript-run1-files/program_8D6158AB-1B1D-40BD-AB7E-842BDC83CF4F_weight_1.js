const v8 = new Date();
function f9() {
    return -4294967295;
}
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a12;
}
new F10(4, -4294967295, true);
v8[4294967296] = 7;
new F10(-2147483649, 1436956539, -4294967295);
new F10(7, 14, -4294967295);
new F10(1436956539, -4294967295, 4);
const v26 = `
    new WeakSet();
`;
eval(v26);
new Map();
const v38 = [2147483649];
const v39 = [2147483648];
const v40 = [-3,-8];
function f41() {
    const o47 = {
        "e": 1e-15,
        p(a45, a46) {
            return f41;
        },
        "f": 41151,
    };
    return o47;
}
let v48 = f41();
const v49 = f41();
let v50 = f41();
function F51(a53) {
    if (!new.target) { throw 'must be called with new'; }
    const o55 = {
        ..."42599",
    };
    new Float64Array();
}
const v58 = new F51(v48);
const o61 = {
    ...v49,
    set f(a60) {
        ({"a":v50,"b":v48,} = v58);
    },
};
function F62(a64) {
    if (!new.target) { throw 'must be called with new'; }
    const t50 = 536870912n;
    t50.f = a64;
}
function F69(a71, a72, a73, a74) {
    if (!new.target) { throw 'must be called with new'; }
    a73.d = a74;
    this.f = a71;
    function f76(a77, a78) {
        const o79 = {
        };
        return o79;
    }
    const v80 = f76();
    for (let i = 0; i < 5; i++) {
        Object.defineProperty(v80, 32753n, { enumerable: true, get: f76 });
    }
}
new F69(-1, -7n, "-16", "global");
const v82 = new F62(v39);
const v83 = new F62(v40);
const v84 = new F62(v39);
class C85 extends F62 {
    m(a87, a88, a89) {
        v50 ** a89;
    }
    constructor(a92, a93, a94) {
        super(a92, v50);
    }
    n(a96, a97, a98, a99) {
        v84[v38] = this;
        super.f;
        return v40;
    }
    /*
    constructor(a102, a103, a104) {
        super(14);
        super.f;
        let v106 = a103 * this;
        v106--;
        Math.log(v39);
        Math.sqrt(268435456);
    }
    */
}
const v112 = new C85(v84, v38, v40);
const v113 = new C85(v112, v40, v38);
const v114 = new C85(v112, v39, v40);
function f115(a116, a117) {
    const o134 = {
        __proto__: v39,
        "f": a117,
        "b": v112,
        [a117](a119, a120, a121) {
            for (let v122 = 0; v122 < 32; v122++) {
                a120["p" + v122] = v122;
            }
            return a121;
        },
        m(a126, a127, a128, a129) {
            if (a127) {
                4001 ^ -a127;
            } else {
                for (let v133 = 0; v133 < 5; v133++) {
                }
            }
            return a129;
        },
        202: a116,
    };
    return o134;
}
f115(v82, f115(v82, v112));
f115(v114, v83);
typeof C85 === "object";
const t121 = "object";
t121.length *= v113["n"]();
[27658,1520640363,6,65537,839907017,-1024,38060];
[536870889];
new C85(v83, [65537,5749,3,59285], v38);
