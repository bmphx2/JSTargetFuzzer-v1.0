class C6 {
    static [10000];
    ["-65535"];
    get g() {
        function F8(a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            this.c = a11;
            this.b = this;
        }
        const v12 = new F8("h", F8);
        const v13 = new F8("h", v12);
        new F8("h", v12);
        return v13;
    }
}
const v15 = typeof "-65535";
v15 === "bigint";
[];
v15 & C6;
new C6();
new C6();
new C6();
(["string","string","string","string"]).length >= "string";
