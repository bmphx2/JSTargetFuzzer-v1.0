function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = f0;
    this.e = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function f6(a7, a8) {
    const o20 = {
        [a7](a10, a11, a12) {
            a11.__proto__;
            a11[F1] = this;
            return v3;
        },
        [-2]: a7,
        valueOf(a15, a16) {
            try {
                super.p(this, v3, b, F1);
            } catch(e19) {
            }
            return a8;
        },
    };
    return o20;
}
const v21 = f6(v4, v4);
f6(v21, f6(v21, v4));
const v28 = new Date();
function f29(a30, a31) {
    const o32 = {
        "e": f6,
        "b": f29,
        [a31]: a31,
        "c": v28,
        "g": a31,
        ...a30,
        ...a31,
        "a": a30,
        ...a30,
        __proto__: a30,
        "h": a30,
        ...Date,
        ...v28,
        ...v28,
    };
    return f29;
}
const v33 = f29(v28, f29);
const v34 = f29(f0, Date);
const v35 = f29(v34, v28);
const v36 = [268435440];
const v37 = [4096,-1,55445,9223372036854775807,-52192,38428];
const v38 = [-1,-1,-59687,268435456];
function f39(a40, a41, a42) {
    const o80 = {
        "g": v33,
        "e": v38,
        o(a44, a45, a46, a47) {
            const v48 = a42 & v33;
            var g = v48;
            let v49 = 9223372036854775807n;
            v49 &= 536870888n;
            for (let v52 = 0; v52 < 5; v52++) {
                for (let v53 = 0; v53 < 5; v53++) {
                }
            }
            function f55(a56, a57) {
                const o61 = {
                    [a57](a59, a60) {
                    },
                };
                return o61;
            }
            Object.defineProperty(f55(255, 257), 257, { enumerable: true, get: f55 });
            for (let v63 = 0; v63 < 5; v63++) {
                eval();
                for (let i = 0; i < 5; i++) {
                }
            }
            try { v33.toString(v34, a44, a40, v48, v48); } catch (e) {}
            return f29;
        },
        "a": v33,
        [v37](a68, a69, a70) {
            a68[F1.iterator];
            new Array(3);
            return -184134270n;
        },
    };
    return a42;
}
f39(v36, v35, v33);
f39(v38, f39(v36, v36, v34), Date);
[-2,-1029756820,58821,1615154097,4,-4294967295,4096,-2147483647,60281,-8277];
[46082,2147483647,-2147483647,9007199254740991];
[-536870912,-750003124,-2040046637,-85691047,-2147483649,5,-41184,-2147483649,1073741824];
class C90 {
    o(a92, a93) {
        const t101 = a92 instanceof a92;
        t101[7] = "m";
        var c = a92;
        try {
            super.m();
        } catch(e96) {
        }
        return -6356;
    }
    static 4 = v5;
    4294967296;
}
let v97 = new C90();
const v98 = new f39();
new C90();
const v101 = new Set();
const v102 = [19167,-1653864233,4];
[-14,-9223372036854775808,268435456,1007853335,257,54873,536870912,257];
const v104 = [8,-34566,-1073741824];
v101 == v102 ? v101 : v102;
C90.d = v104;
let v107;
try { v107 = v97(); } catch (e) {}
v101[v107] /= -376497935;
v102[v104] &= -6356;
v97 = v98;
("m").length;
const o109 = {
};
new Proxy(v34, o109);
