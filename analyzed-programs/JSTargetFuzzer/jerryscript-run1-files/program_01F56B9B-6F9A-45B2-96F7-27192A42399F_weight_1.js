function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a9;
    this.g = "function";
    this.h = a8;
}
function F10() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -10;
    this.c = -10;
}
const v13 = new F6(662244047n, "function");
const v14 = new F6(2n, "boolean");
new Date(Date);
function f17() {
    const o23 = {
        __proto__: "-536870912",
        ..."-536870912",
        get f() {
            let [v21,v22] = this.n();
            return v21;
        },
    };
    return o23;
}
const v24 = f17();
class C25 extends f17 {
    constructor(a27, a28, a29, a30) {
        super();
        const o31 = {
            "construct": f17,
        };
        new Proxy(this, o31);
    }
}
const v34 = new C25();
v24 <= v34;
const v36 = new F6(-4n, "3");
const v41 = [];
let v43;
try { v43 = Float64Array(); } catch (e) {}
function F44() {
    if (!new.target) { throw 'must be called with new'; }
    Symbol.for();
}
new F44();
const v49 = v13.g;
try {
    v43 + 3296n;
} catch(e52) {
}
function f55() {
    return 62781;
}
const v58 = new BigUint64Array(3681);
3681 + v58;
function f60(a61) {
    const o69 = {
        get a() {
            function F63(a65, a66) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const t62 = F63(F63, a61);
            t62(a61);
            return F63;
        },
    };
    return a61;
}
let v71 = ("3")["search"](v49);
v71 = 10;
const o72 = {
    "e": -4n,
    ...v36,
    4294967295: v13,
    "d": f55,
    "f": v41,
    "construct": f55,
    ...v14,
    "c": F6,
    __proto__: v13,
    "g": -50054,
    ["search"]: "function",
    "defineProperty": f55,
    "deleteProperty": f55,
    "getPrototypeOf": f55,
    "has": f55,
    "preventExtensions": f55,
};
new Proxy(v14, o72);
v14.h = v41;
const v76 = Symbol.iterator;
const o87 = {
    [v76]() {
        let v78 = 10;
        const o86 = {
            get f() {
                delete this[this];
                return this;
            },
            next() {
                v78--;
                const v84 = v78 == 0;
                const o85 = {
                    "done": v84,
                    "value": v78,
                };
                return o85;
            },
        };
        return o86;
    },
};
function f89(a90, a91) {
    throw 4.0;
    return a91;
}
new Promise(f89);
