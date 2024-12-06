function f3(a4, a5) {
    const o17 = {
        get c() {
            f3 % this;
            let v8;
            try { v8 = new a5(-2.220446049250313e-16); } catch (e) {}
            function F9(a11, a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                this.b = -5.0;
                this.h = v8;
            }
            const v14 = new F9(v8, a5, a5);
            new F9(632302.5594223938, F9, v14);
            new F9(-2.220446049250313e-16, v8, a5);
            return -2.220446049250313e-16;
        },
    };
    return o17;
}
const v18 = f3(-2.220446049250313e-16, -5.0);
const v20 = f3(-5.0, f3(632302.5594223938, f3));
const v21 = [f3];
const v22 = [v20];
const v23 = [v18];
class C24 {
    constructor(a26, a27, a28, a29) {
        v21[65535] = a27;
        function f30() {
            return a27;
        }
    }
    o(a32, a33, a34, a35) {
        const o39 = {
        };
        const t34 = -4294967295;
        new t34(this, o39);
        return 65535;
    }
}
const v42 = new C24(632302.5594223938, -5.0, v22, -2.220446049250313e-16);
new C24(v42, 632302.5594223938, v23, 632302.5594223938);
new C24(v21, -2.220446049250313e-16, v42, 632302.5594223938);
try { Float64Array(); } catch (e) {}
