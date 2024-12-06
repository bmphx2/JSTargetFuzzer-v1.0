class C3 {
    static get b() {
        this[this] = this;
        function F5(a7) {
            if (!new.target) { throw 'must be called with new'; }
            a7.a = this;
        }
        const v8 = new F5(545251.1446214111, 1000000000000.0, C3);
        const v9 = new F5(v8, 1000000000000.0);
        new F5(v9);
        return 1000000000000.0;
    }
    ["boolean"] = 545251.1446214111;
    g;
    static 16 = 1000000000000.0;
}
new C3();
const v12 = new C3();
const v13 = new C3();
function F14(a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a16;
    this.b = v13;
}
const v18 = new F14(v12, 1000000000000.0);
const v19 = new F14("boolean", v12);
const v20 = new F14(F14, v12);
const v21 = [v13,v20,F14,v18,v20];
[v19,[F14,v20,v18,v21,v21]];
Math.hypot();
Math.imul(Math);
Float32Array.toLocaleString();
