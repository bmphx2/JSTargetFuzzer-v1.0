function f0() {
}
const v1 = [f0,f0,f0];
const v2 = [f0,v1,f0,v1,f0];
const v3 = [v1,v1,v1,v2];
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 9007199254740991n;
}
new F10(v2, v3);
new F10(v1, v2);
new F10(v1, v1);
function F17(a19) {
    if (!new.target) { throw 'must be called with new'; }
}
class C20 extends F17 {
    constructor(a22, a23, a24) {
    }
    /*
    constructor(a26, a27, a28) {
        a27 * this;
    }
    */
}
