class C3 {
    static [8] = 8;
    p(a5) {
        try { a5(8, this, a5, this); } catch (e) {}
        this[Symbol.species] = this;
        a5 = 39428;
        let v10 = 2043107574;
        const v13 = Math.sign(v10--);
        let v14 = --a5;
        --v14;
        return v13;
    }
}
new C3();
new C3();
new C3();
new Date();
const v29 = Symbol.toPrimitive;
const o34 = {
    [v29]() {
        try { Date.now(); } catch (e) {}
        try {
            super.valueOf();
        } catch(e33) {
        }
        return 1.162462580965844e+308;
    },
};
