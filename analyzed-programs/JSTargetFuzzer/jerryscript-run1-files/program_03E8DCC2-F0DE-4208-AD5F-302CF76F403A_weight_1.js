class C3 {
    static get h() {
        const v5 = this[129];
        function F6(a8) {
            if (!new.target) { throw 'must be called with new'; }
            this.e = a8;
            this.a = v5;
            this.h = this;
        }
        new F6(v5);
        const v10 = new F6(v5);
        new F6(v10);
        return v10;
    }
    [-3];
}
new C3();
new C3();
new C3();
function f21() {
}
function F26() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -9;
}
const v29 = new F26();
const o31 = {
    ...v29,
    get b() {
        return this;
    },
};
new Uint8Array(0);
[-8,4294967295,148900462];
let v41 = RegExp.bind("2147483647", 7);
const v43 = new Int32Array(127);
v41 /= v43;
new WeakSet();
new Function(2);
([5]).reverse();
