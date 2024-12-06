function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -33702;
    const v3 = [2147483648];
    function F4(a6) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v7 = new F4(v3);
    class C8 extends F4 {
        n(a10, a11, a12, a13) {
            super.f;
        }
        constructor(a16, a17, a18) {
            super(a17);
            Math.log(v3);
            Math.sqrt();
        }
    }
    const v22 = new C8();
    function f23(a24, a25) {
        const o32 = {
            __proto__: v3,
            [a25](a27, a28, a29) {
                try {
                    super.entries(f23);
                } catch(e31) {
                }
                v22.__proto__ = a29;
            },
        };
        return o32;
    }
    f23(v7, f23(v7, v22));
    typeof C8 === "object";
    const t32 = "object";
    t32.length *= v22["n"]();
}
new F0();
new F0();
new F0();
new Map();
new WeakMap();
for (; !10;) {
}
