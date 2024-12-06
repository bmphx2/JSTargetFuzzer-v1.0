function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = f0;
    this.e = f0;
}
new F1();
new F1();
new F1();
function f9() {
    const o15 = {
        __proto__: "-536870912",
        ..."-536870912",
        get f() {
            let [v13,v14] = this.n();
            return v13;
        },
    };
    return F1;
}
f9();
const v17 = f9();
class C18 extends f9 {
    constructor(a20, a21, a22, a23) {
        super();
        const o24 = {
            "construct": f9,
        };
        new Proxy(v17, o24);
    }
}
let {"b":v27,"d":v28,} = C18;
new Int8Array(84);
const v34 = new Int16Array(2866);
new BigUint64Array(2);
function f38() {
    const o59 = {
        __proto__: "-536870912",
        "d": "-536870912",
        "g": "-536870912",
        ..."-536870912",
        "c": 1.7976931348623157e+308,
        9: -24152,
        "h": -24152,
        "e": v27,
        "f": v34,
        "a": f0,
        "b": v17,
        ...v27,
        get f() {
            this[7] = -24152;
            let v43;
            try { v43 = this.n(this); } catch (e) {}
            let [v44,v45] = v43;
            const v48 = new Int8Array(3);
            v48 ** v17;
            v43 = Int8Array;
            new Int8Array(8);
            new Int8Array(3692);
            return 1.7976931348623157e+308;
        },
    };
    return o59;
}
const v60 = f38();
const v61 = f38();
const v62 = f38();
class C69 extends f38 {
    constructor(a71, a72, a73, a74) {
        super();
        const o81 = {
            "call": f38,
            "construct": f38,
            "defineProperty": f38,
            "get": f38,
            "getOwnPropertyDescriptor": f38,
            get b() {
                return this;
            },
            toString(a77) {
                let v78;
                try { v78 = f9(); } catch (e) {}
                ~v78;
                function f80() {
                    return -341266709;
                }
                return C69;
            },
            "has": f38,
            "isExtensible": f38,
            "set": f38,
            "setPrototypeOf": f38,
        };
        new Proxy(this, o81);
    }
}
const v84 = new C69(-19870386, -341266709, v61, 9007199254740990);
let v85 = new C69(v84, -1957950668, v84, 9007199254740990);
let v86 = new C69(v62, 9007199254740990, v60, -341266709);
if (v61 <= v86) {
    v86 = C69;
} else {
    let {"b":v89,"d":v90,} = C69;
    C69[-4096] += -4096;
}
v85 <<= v84;
9007199254740990 <= v60 ? 9007199254740990 : v60;
