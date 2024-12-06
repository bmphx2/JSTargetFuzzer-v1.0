class C3 {
    static 10 = -1000.0;
    static b = -1e-15;
    o(a5, a6) {
        const v7 = -1000.0 >>> -1000.0;
        for (const v8 in a5) {
            a6 = 2.2250738585072014e-308;
        }
        const v9 = this[v7];
        function F10(a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            this.g = a13;
            this.e = a12;
            this.a = v9;
            a12[Symbol.replace];
            a12 /= -1e-15;
            function f17() {
                return this;
            }
        }
        new F10(v9, a5);
        new F10(2.2250738585072014e-308, v7);
        new F10(-1000.0, 2.2250738585072014e-308);
        return this;
    }
}
new C3();
let v22 = new C3();
new C3();
v22 = C3;
let v26;
try { v26 = C3["parse"](2.2250738585072014e-308, -1000.0, 2.2250738585072014e-308); } catch (e) {}
function F27(a29, a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v26;
    this.e = v22;
}
new F27(-1e-15, -1000.0, -1000.0);
new F27(2.2250738585072014e-308, -1e-15, -1000.0);
new F27(-1e-15, 2.2250738585072014e-308, -1000.0);
const v39 = Symbol.iterator;
const o48 = {
    [v39]() {
        let v41 = 10;
        const o47 = {
            next() {
                v41--;
                const v45 = v41 == 0;
                const o46 = {
                    "done": v45,
                    "value": v41,
                };
                return o46;
            },
        };
        return o47;
    },
};
let v52 = 9n;
v52 -= 9223372036854775807n;
v52--;
