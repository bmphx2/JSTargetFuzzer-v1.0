class C3 {
    static get constructor() {
        const o7 = {
            __proto__: C3,
            get f() {
                return this;
            },
            get h() {
                return this;
            },
        };
        new Proxy(this, o7);
        return "undefined";
    }
    7 = "undefined";
    ["undefined"] = "1";
    65 = "1";
}
new C3();
const v11 = new C3();
new C3("undefined", v11);
class C14 {
}
Date.parse(3584);
do {
} while (false)
new Uint32Array(3769);
resourceName();
