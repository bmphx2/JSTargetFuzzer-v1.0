class C3 {
    static {
        const v5 = this[1246];
        for (let [v6,v7] of v5) {
            v6?.[6];
        }
        const v10 = new WeakSet();
        try {
            super.setSeconds(v5, v10, WeakSet, "w");
        } catch(e12) {
        }
    }
    static #e = NaN;
}
const v13 = new C3();
let v14 = new C3();
new C3();
const o22 = {
};
new Proxy(v13, o22);
const o25 = {
};
const v27 = new Proxy(v13, o25);
v14 = v27;
v27[4] = C3;
