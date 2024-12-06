function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a5;
    this.b = a5;
    this.d = this;
    function F6() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v8 = new F6();
    Reflect.apply(([-645679.1757705609,NaN,596.3498861933385,1000000000.0,-5.0,3.452199136921493]).pop, v8);
}
const v13 = new F3("sticky");
const v14 = new F3("bigint");
new F3("wx");
function f16(a17, a18, a19) {
    const o30 = {
        [a19]: a19,
        ...a17,
        "d": "bigint",
        get h() {
            function F21(a23, a24, a25, a26) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = this;
                this.f = v14;
                this.c = a26;
            }
            new F21(v14, a19, a17, a18);
            const v28 = new F21(this, "wx", "bigint", a19);
            const v29 = new F21(v13, a18, v28, "wx");
            return v29;
        },
    };
    return o30;
}
f16("bigint", "bigint", "sticky");
f16("bigint", "bigint", "wx");
f16("sticky", "bigint", f16);
const o40 = {
    set b(a39) {
        with (undefined) {
        }
    },
};
