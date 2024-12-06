const v5 = new Uint8ClampedArray(9);
const v8 = new Uint32Array(300);
const o22 = {
    get h() {
        return this;
    },
    m(a13) {
        const v14 = super.a;
        for (const v15 in v8) {
            let {"buffer":v16,"g":v17,"length":v18,...v19} = v5;
            super.a;
            try { v14(v14, v16, Uint32Array); } catch (e) {}
        }
        return this;
    },
};
new Uint8Array(6);
const t17 = [-128];
t17[0] **= 2;
