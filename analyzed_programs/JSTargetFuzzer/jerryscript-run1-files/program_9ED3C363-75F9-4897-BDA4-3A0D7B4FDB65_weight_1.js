function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = "sticky";
    this.b = a5;
    this.d = this;
}
const v6 = new F3("sticky");
const v7 = new F3("bigint");
const v8 = new F3("wx");
function f9(a10, a11, a12) {
    const o23 = {
        [a12]: a12,
        ...v8,
        "d": "sticky",
        get h() {
            function F14(a16, a17, a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = this;
                this.f = v7;
                this.c = a10;
            }
            new F14(v7, a12, a10, a11);
            const v21 = new F14(this, "wx", "bigint", a12);
            const v22 = new F14(v6, a11, v21, "wx");
            return v22;
        },
    };
    return o23;
}
f9("bigint", "bigint", "sticky");
f9("bigint", "bigint", "wx");
f9("sticky", "bigint", f9);
const o33 = {
    set b(a32) {
        with (undefined) {
        }
    },
};
