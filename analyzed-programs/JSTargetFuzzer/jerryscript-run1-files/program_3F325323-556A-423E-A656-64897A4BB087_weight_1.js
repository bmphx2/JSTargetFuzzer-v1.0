const v0 = [];
class C1 {
    static set c(a3) {
        let v2 = this;
        for (let v4 = 0; v4 < 25; v4++) {
        }
        v2 = a3;
        function F6(a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            this.b = v0;
        }
        new F6(v0, v2);
        new F6(v2, a3, F6);
        new F6(v0, F6);
    }
    static [v0];
}
const v13 = new C1();
new C1(v13, v13, v13);
new C1();
new WeakSet();
function f25(a26) {
    const o27 = {
        ...a26,
    };
    return arguments;
}
f25(f25(), v13, -7n, f25);
