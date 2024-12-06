const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v0;
    this.d = v0;
}
const v3 = new F1(v0, F1, v0);
new F1();
const v5 = new F1();
class C6 {
    constructor(a8) {
        super.b;
        const o10 = {
        };
        new Proxy(v0, o10);
    }
    static m(a14, a15) {
        let v16;
        try { v16 = this.valueOf(this, v3, a14, this); } catch (e) {}
        let v17;
        try { v17 = new C6(v0, a15, C6, C6, v3); } catch (e) {}
        v17 >> this;
        this.__proto__;
        v16 = v0;
        function f20() {
            return v5;
        }
        return a15;
    }
}
const v21 = new C6(C6);
const v22 = new C6(v5);
const v23 = new C6(v5);
[v23,v23,v0];
[[v23,v21,v22],v5,v3];
function f31() {
    for (let i34 = 0, i35 = 10; i34 !== i35, true;) {
    }
    return f31;
}
