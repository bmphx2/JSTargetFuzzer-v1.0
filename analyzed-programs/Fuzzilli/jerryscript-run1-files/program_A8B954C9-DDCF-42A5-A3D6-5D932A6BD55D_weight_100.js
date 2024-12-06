class C3 {
    #n(a5, a6) {
        if (a5) {
            try { a5.trimStart(); } catch (e) {}
        } else {
            for (let v8 = 0; v8 < 32; v8++) {
                this["p" + v8] = v8;
            }
        }
        return this;
    }
    static ["3"];
}
const v11 = new C3();
const v12 = new C3();
const v13 = new C3();
const v14 = [v12];
const v16 = [v13,v14,[v13,v11,v14]];
b = -536870912;
function F24(a26, a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v16;
}
new F24("TK", "3", "TK");
new F24("3", "TK", Float32Array);
new F24(v11, "3", -308487977);
