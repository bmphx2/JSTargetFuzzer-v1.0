function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 0;
    this.b = 0;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o31 = {
        [F0](a9, a10) {
            const v11 = this;
            let v12;
            try { v12 = v5(a7, this, F0, v11); } catch (e) {}
            try {
                function F13(a15) {
                    if (!new.target) { throw 'must be called with new'; }
                    Symbol();
                }
                new F13(F13);
                v5.length = 209;
                this[65535] = 209;
                v11[v4] = a9;
                Math.log10(-61756);
                -9007199254740992 >>> 209;
                Math.min(-209);
                !-9007199254740992;
                !-61756;
                super.m(a10, F0, a9, v12);
            } catch(e30) {
            }
            return F0;
        },
        [v4]: v5,
        5: v3,
        __proto__: a7,
    };
    return o31;
}
f6(v5);
f6(v5);
f6(v5);
("description")["repeat"]();
const v44 = [];
new WeakSet([[v44,v44],v44]);
