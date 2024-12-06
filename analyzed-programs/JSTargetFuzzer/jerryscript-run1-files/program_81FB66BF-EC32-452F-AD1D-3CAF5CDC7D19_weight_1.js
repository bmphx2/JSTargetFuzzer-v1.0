function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 9007199254740991;
    this.d = 9007199254740991;
    this.h = 9007199254740991;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [-14,-9007199254740990,1073741824,-65535,8,16];
const v7 = [35416,1073741824,943152641,65536,256,1024];
const v8 = [1586];
class C9 extends F0 {
    set e(a11) {
    }
    constructor(a16, a17) {
        super();
        function F18(a20, a21, a22) {
            if (!new.target) { throw 'must be called with new'; }
            this.g = a21;
            this.h = a17;
        }
        const v23 = new F18(a17, this, this);
        new F18(v7, v4, v3);
        new F18(a17, v23, this);
    }
}
const v26 = new C9(v7, v5);
const v27 = new C9(v8, v6);
const v28 = new C9(v7, v6);
const v30 = -Infinity;
v26[F0] = v28;
function f32() {
    return v30;
}
function F33(a35, a36, a37, a38) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a37;
}
const v39 = new F33(1000.0, v30, C9, v7);
const v40 = new f32(C9, 2.220446049250313e-16, v26, v39);
new F33(2.220446049250313e-16, 2.220446049250313e-16, v27, v40);
const v44 = new BigUint64Array(11);
function f45() {
    return F0;
}
const v46 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
v46.copyWithin(11, 11, v46);
v44["every"](f45, ("1073741824").match(v4));
