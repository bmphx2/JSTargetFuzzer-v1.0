const v0 = [0.6692240164337011,419012.0246499621,5.0];
const v1 = [1.7976931348623157e+308,-0.0];
const v2 = [1000000.0,1000000000.0,4.0,289.3444488630878,1.7976931348623157e+308,8.027548255630752,1000000000.0];
function f3(a4, a5) {
    v1.length = 52824;
    v0[490] = 52824;
    const o24 = {
        3787: a5,
        get a() {
            this.__proto__;
            return this;
        },
        set d(a12) {
        },
        "c": a5,
        [v1](a17, a18, a19, a20) {
            return a5;
        },
        237: a5,
    };
    return o24;
}
const v25 = f3(v2, v0);
const v26 = f3(v1, v1);
const v27 = f3(v1, v1);
class C28 extends f3 {
    set d(a30) {
        v27.length = 2;
        const t28 = 2;
        t28[2] = v1;
    }
    p(a33, a34) {
        v25[11] = a33;
        try { new a33(); } catch (e) {}
        return 1.7976931348623157e+308;
    }
}
new C28();
new C28();
new C28();
const v44 = -Infinity;
const v45 = [-22199,4,4];
[65535,268435440,-755656218,2,53228,92503475,2055168845,-2,12,-10];
const v47 = [1024,52179,536870889,-32208,65536,-1999666121,-2147483649,-9007199254740992];
const v49 = new Date();
class C50 {
    n(a52) {
        const v53 = `
            Date(v53);
        `;
        eval(v53);
        return v45;
    }
    static m(a58, a59) {
        delete Date[this];
        a59[v45] = v49;
        function f61() {
            return v49;
        }
        return this;
    }
}
const v62 = new C50();
const v63 = new C50();
const v64 = new C50();
function f65(a66, a67, a68, a69) {
    const o70 = {
        ...Date,
        "e": v47,
        __proto__: C50,
        "d": v63,
        "b": v47,
        "c": a69,
        "a": v26,
        "h": v44,
        "g": a67,
        "f": a66,
        "c": Date,
        "g": v45,
        "f": a67,
        [a69]: v63,
        "h": v45,
        "a": v62,
        45: v49,
        ...a69,
        [v64]: v62,
    };
    return o70;
}
[-1024n];
function F74(a76, a77) {
    if (!new.target) { throw 'must be called with new'; }
}
const v78 = new F74(1073741823n);
const o85 = {
    set b(a81) {
        this[undefined];
        v78 != this ? v78 : this;
    },
    "b": undefined,
};
const v88 = new ArrayBuffer(3);
new Int8Array(v88);
const v91 = f65(v49, f65, v63, v45);
f65(C50, v49, f65(C50, v91, v63, v47), v47);
function f95(a96) {
    return v91;
}
class C97 extends f95 {
    static set d(a99) {
        const v100 = f65(v45, a99, v62, a99);
        try {
            super.delete(v64, this, v49, v45, v100);
        } catch(e102) {
        }
    }
}
