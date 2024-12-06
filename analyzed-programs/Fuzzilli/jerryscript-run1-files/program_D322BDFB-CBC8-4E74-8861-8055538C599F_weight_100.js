class C3 {
    #h;
    [64];
    constructor(a5) {
        function f6() {
            return a5;
        }
        try {
            a5.#h = -12;
        } catch(e7) {
        }
    }
}
const v8 = new C3(2.0);
const v9 = new C3(C3);
const v10 = new C3(v8);
const v12 = new Date();
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v8;
    this.b = a15;
    this.a = a18;
}
const v19 = new F13(v10, v8, v10, Date);
const v20 = new F13(v19, v12, v12, Date);
new F13(v19, C3, v9, v10);
const o22 = {
};
new Proxy(C3, o22);
if (Proxy >= -12) {
    try { v20.toString(v19, v19, 64, -12); } catch (e) {}
} else {
    v19.__proto__;
}
