class C3 {
    constructor(a5) {
        const o6 = {
        };
        new Proxy(this, o6);
    }
    static 8 = "sin";
    static c;
    static [-1000000.0] = "sin";
    static g;
}
const v9 = new C3(C3);
const v10 = new C3(v9);
const v11 = new C3(v10, v9, v10, "sin");
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a15;
}
const v18 = new F12(v10, v11, C3, "sin");
const v19 = new F12(v11, "sin", v18, v18);
new F12(v19, v10, v10, C3);
("1")["lastIndexOf"]();
