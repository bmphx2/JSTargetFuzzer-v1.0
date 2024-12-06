const v0 = -Infinity;
class C3 {
    static {
        (this & v0) >> "unscopables";
        this.h = "unscopables";
    }
    16;
    static {
        let v9;
        try { v9 = this["n"]("n", this, "unscopables"); } catch (e) {}
        try { v9("n", v0); } catch (e) {}
        const o11 = {
        };
        new Proxy(this, o11);
    }
}
let v14 = new C3();
const v15 = new C3();
const v16 = new C3();
class C17 extends C3 {
    n(a19, a20) {
        let v18 = this;
        v14 |= a20;
        super.e;
        v18 *= a19;
        const v24 = 65535 << v15;
        const v25 = !v24;
        const v26 = 65535 ** v24;
        Math.acos(v26 + +v25);
        return 268435441;
    }
}
const v30 = new C17();
new C17();
new C17();
const v34 = Symbol.match;
v30[v34] = v34;
let v35;
try { v35 = C3.n(C17, v15, v16); } catch (e) {}
typeof v35 === "object";
new Array(6);
