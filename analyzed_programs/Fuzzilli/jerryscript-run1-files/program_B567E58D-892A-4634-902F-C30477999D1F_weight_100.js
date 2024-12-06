class C3 {
    valueOf(a5, a6) {
        function F7(a9, a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            this.c = a9;
            this.d = a10;
        }
        const v12 = new F7(a5, F7, "boolean");
        const v13 = new F7(v12, a6, a5);
        const v14 = new F7(a6, v13, v12);
        return v14;
    }
    static ["boolean"] = "boolean";
}
const v15 = new C3();
const v16 = new C3();
const v17 = new C3();
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a20;
    this.g = "boolean";
    this.d = v16;
}
const v22 = new F18(v16, v15);
const v23 = new F18(v22, v17);
new F18(v17, v17);
v15.__proto__ = v23;
const v25 = "boolean" == 2.2250738585072014e-308;
d = -65537;
[2.2250738585072014e-308,v16,v17,v16,v22];
[v25,v23,v23,"boolean"];
[-65537];
C3.__proto__;
