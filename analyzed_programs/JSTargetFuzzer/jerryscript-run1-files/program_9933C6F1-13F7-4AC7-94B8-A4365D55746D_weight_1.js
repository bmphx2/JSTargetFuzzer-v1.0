function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -1455426663;
    this.c = -1455426663;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6() {
    return v4;
}
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a10;
    this.a = a10;
    this.e = v5;
}
class C11 {
    [-1] = v3;
}
new C11();
new C11();
new C11();
new F7(v4, v4);
new F7(v5, v3);
new F7(v4, v3);
let v18 = -4096;
function f21() {
    function F22() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v24 = new F22();
    let v26 = RegExp.bind(RegExp, F22, RegExp);
    const v28 = new Int32Array();
    v26.__proto__ = v24;
    v26 /= v28;
    return v18;
}
const v32 = [64,16,10,4096,7,0,-25197];
function f33() {
    return v32;
}
class C34 extends f33 {
    constructor(a36, a37, a38, a39) {
        super();
        super.toString();
    }
    /*
    constructor(a42, a43, a44) {
        super();
    }
    */
    /*
    constructor(a46, a47) {
        a47 % -9007199254740992;
        v18 = -9007199254740992;
        f6 = a46;
    }
    */
}
new C34(v32, f33, C34, f33);
