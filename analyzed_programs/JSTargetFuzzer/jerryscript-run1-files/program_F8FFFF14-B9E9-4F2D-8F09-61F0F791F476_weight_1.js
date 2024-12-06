function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 0;
    this.b = 0;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o15 = {
        [F0](a9, a10) {
            const v11 = this;
            let v12;
            try { v12 = v5(a7, this, F0, v11); } catch (e) {}
            try {
                super.m(a10, F0, a9, v12);
            } catch(e14) {
            }
            return F0;
        },
        [v4]: v5,
        5: v3,
        __proto__: a7,
    };
    return o15;
}
f6(v5);
f6(v5);
f6(v5);
("description")["repeat"]();
const v28 = [];
new WeakSet([[v28,v28],v28]);
