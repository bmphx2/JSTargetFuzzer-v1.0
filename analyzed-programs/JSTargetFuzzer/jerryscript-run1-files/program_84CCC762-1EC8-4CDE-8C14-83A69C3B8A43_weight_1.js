class C3 {
    static get constructor() {
        const o5 = {
        };
        new Proxy(this, o5);
        return "undefined";
    }
    7 = "undefined";
    ["undefined"] = "1";
    65 = "1";
}
new C3();
const v9 = new C3();
new C3("undefined", v9);
resourceName();
