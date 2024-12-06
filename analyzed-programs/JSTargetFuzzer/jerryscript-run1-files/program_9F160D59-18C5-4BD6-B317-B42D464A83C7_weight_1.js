function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a5.d = a6;
    a5.b = F3;
}
const v7 = new F3(536870887, -1024);
const v8 = new F3(v7, -1024);
new F3(v8, 536870887);
-Infinity;
const v19 = [64,16,10,4096,7,0,-25197];
function f20() {
    return v19;
}
class C21 extends f20 {
    constructor(a23, a24, a25, a26) {
        super();
        super.toString();
    }
}
new C21(v19, f20, C21, f20);
