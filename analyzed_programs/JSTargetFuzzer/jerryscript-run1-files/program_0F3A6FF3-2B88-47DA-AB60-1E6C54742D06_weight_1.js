new Uint8Array(0);
const o9 = {
    get h() {
        return this;
    },
    toString(a8) {
        super.h = 8549;
        return 8549;
    },
};
o9["toString"]();
new Int8Array(4);
new Uint32Array(256);
const v19 = [];
class C20 {
    valueOf(a22, a23) {
        const v24 = `
            const o29 = {
                m(a26, a27, a28) {
                    return v24;
                },
            };
            const t22 = v19.__proto__;
            delete t22?.d;
        `;
        eval(v24);
    }
}
const v34 = new C20();
async function f35(a36, a37) {
    a36 /= C20;
    return C20;
}
const v38 = f35(v34);
v38.valueOf = f35;
for (let v39 = 0; v39 < 32; v39++) {
    v38["p" + v39] = v39;
}
