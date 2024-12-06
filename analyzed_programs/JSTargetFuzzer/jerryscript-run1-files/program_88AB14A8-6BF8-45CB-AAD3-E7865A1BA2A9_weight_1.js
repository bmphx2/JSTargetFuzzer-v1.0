function f0() {
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a6;
    this.h = f0;
    this.f = a6;
}
const v7 = new F4(f0);
new F4("object");
new F4("isSealed");
const v10 = ["bigint","isSealed","bigint"];
const v11 = [v7,v10,v10];
[v11,"bigint",F4,v11,"bigint",v7,v11,v7];
class C13 {
}
function f14() {
    return v10;
}
new C13();
class C16 extends f14 {
    constructor(a18, a19, a20, a21) {
        try {
            return this;
        } catch(e22) {
        }
    }
}
new f14();
