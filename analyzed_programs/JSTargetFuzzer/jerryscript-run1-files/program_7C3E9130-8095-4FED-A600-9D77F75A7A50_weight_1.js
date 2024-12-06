function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -2147483648;
    this.e = -2147483648;
    this.b = -2147483648;
}
const v3 = new F0();
let v4 = new F0();
const v5 = new F0();
const v7 = new WeakSet();
function f9(a10, a11, a12) {
    const o15 = {
        "h": a10,
        get f() {
            v7[this] = this;
            const v14 = super.c;
            this.__proto__ = v14;
            v4 = v14;
            return a10;
        },
        536870889: false,
        [a10]: v5,
        129: WeakSet,
        "d": v3,
        "c": false,
        ...a11,
    };
    return o15;
}
const v16 = f9(v4, v4, v3);
const v17 = f9(v5, v7, v3);
const v18 = f9(v5, v5, v4);
function f19(a20, a21, a22, a23) {
    const o43 = {
        get e() {
            return -37216;
        },
        "f": a23,
        "h": a22,
        [v5](a29, a30, a31) {
            f9 / a22;
            function F34(a36, a37, a38, a39) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a38;
            }
            const v40 = new F34(v16, a21, a22, a21);
            new F34(a31, v18, undefined, a30);
            new F34(a30, a21, v40, a23);
            return F0;
        },
    };
    return o43;
}
f19(v4, v16, v5, v16);
f19(v18, v17, f19(v18, v18, f19, v4), v18);
let v48 = 5918n;
const v49 = [8,-488260115,4294967297];
const v50 = [-1604425008,2147483649,16];
[-13,4294967297,-12737845,2147483648,-10,4096];
function f52() {
    return v49;
}
function f53() {
}
switch (v48) {
    default:
        v50[65535n] = -2.0;
        break;
    case v48:
        v48 = 65535n;
        function f55() {
            return v48;
        }
        break;
}
