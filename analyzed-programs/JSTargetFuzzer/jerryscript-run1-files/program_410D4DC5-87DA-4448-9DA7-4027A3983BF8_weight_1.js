function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = f0;
    this.g = f0;
}
new F1();
new F1();
new F1();
const v19 = `
    new WeakSet();
`;
const v23 = eval(v19);
new Map();
const v31 = [2147483649];
const v32 = [2147483648];
const v33 = [-3,-8];
function f34() {
    const o38 = {
        valueOf() {
            delete this[this];
            let v37;
            try { v37 = this.valueOf(); } catch (e) {}
            v37.__proto__ = this;
            return v37;
        },
    };
    try { o38.valueOf(o38, o38, o38, o38, o38); } catch (e) {}
    const o45 = {
        "e": 1e-15,
        p(a43, a44) {
            return f34;
        },
        "f": 41151,
    };
    return o45;
}
let v46 = f34();
const v47 = f34();
let v48 = f34();
function F49(a51) {
    if (!new.target) { throw 'must be called with new'; }
    const o53 = {
        ..."42599",
    };
    new Float64Array();
}
const v56 = new F49(v46);
const o68 = {
    ...v47,
    __proto__: v33,
    [v23](a58) {
        super.h;
    },
    m(a61, a62, a63) {
        return eval(a61);
    },
    set f(a67) {
        ({"a":v48,"b":v46,} = v56);
    },
};
function F69(a71) {
    if (!new.target) { throw 'must be called with new'; }
    const t64 = 536870912n;
    t64.f = a71;
}
3 > 1;
const o88 = {
    "a": 1000,
    "f": v33,
    1073741824: -9007199254740992,
    [-9007199254740992]: 9007199254740990,
    64: -9007199254740992,
    o(a83) {
        try { new a83(a83, 9007199254740990, 1000, this, 1000); } catch (e) {}
        return 1000;
    },
};
function F89(a91, a92, a93, a94) {
    if (!new.target) { throw 'must be called with new'; }
    a93.d = a94;
    this.f = a91;
}
new F89(-1, -4n, "-16", "global");
const v96 = new F69(v32);
const v97 = new F69(v33);
const v98 = new F69(v32);
class C99 extends F69 {
    m(a101, a102, a103) {
        v48 - a103;
    }
    constructor(a106, a107, a108) {
        new Float64Array();
        const v113 = new Int16Array(211);
        v113["p" + 1962208839] = 1962208839;
        super(a106, v48);
    }
    n(a117, a118, a119, a120) {
        v98[v31] = this;
        super.f;
        return v33;
    }
    /*
    constructor(a123, a124, a125) {
        super(a123);
        super.f;
        let v127 = a124 * this;
        v127--;
        Math.log(v32);
        Math.sqrt(268435456);
    }
    */
}
const v133 = new C99(v98, v31, v33);
const v134 = new C99(v133, v33, v31);
const v135 = new C99(v133, v32, v33);
function f136(a137, a138) {
    -5534n >= 9007199254740990n;
    let v141 = 10;
    for ((() => {
            class C142 {
            }
        })();
        v141--;
        ) {
    }
    const o160 = {
        __proto__: v32,
        "f": a138,
        "b": v133,
        [a138](a145, a146, a147) {
            for (let v148 = 0; v148 < 32; v148++) {
                a146["p" + v148] = v148;
            }
            return a147;
        },
        m(a152, a153, a154, a155) {
            if (a153) {
                4001 ^ a153++;
            } else {
                for (let v159 = 0; v159 < 5; v159++) {
                }
            }
            return a155;
        },
        202: a137,
    };
    return o160;
}
f136(v96, f136(v96, v133));
f136(v135, v97);
typeof C99 === "object";
const t150 = "object";
t150.length *= v134["n"]();
[27658,1520640363,6,65537,839907017,-1024,38060];
[536870889];
new C99(v97, [65537,5749,3,59285], v31);
