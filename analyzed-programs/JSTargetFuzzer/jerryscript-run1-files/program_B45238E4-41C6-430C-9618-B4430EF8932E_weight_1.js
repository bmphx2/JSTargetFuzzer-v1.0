class C3 {
    constructor(a5, a6) {
        function f7(a8, a9, a10, a11) {
            const o18 = {
                p(a13, a14) {
                    const v15 = this + a11;
                    try {
                        super.create(a11, a6, f7, v15);
                    } catch(e17) {
                    }
                    return this;
                },
                "g": a8,
            };
            function F22(a24, a25) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = a6;
            }
            const v26 = new F22(127, F22);
            new F22(6, v26);
            new F22(127, v26);
            return o18;
        }
        const v29 = f7("g", f7, a6, f7);
        f7(f7, f7, a6, a5);
        const o31 = {
            __proto__: v29,
            "h": a5,
        };
        o31[-2];
        f7(v29, f7, 127, "g");
    }
}
new C3(127, "g");
const v35 = new C3("12", C3);
new C3(v35, 127);
Math.abs(Math) ** (-9.44001634896165e+306 * -9.44001634896165e+306);
