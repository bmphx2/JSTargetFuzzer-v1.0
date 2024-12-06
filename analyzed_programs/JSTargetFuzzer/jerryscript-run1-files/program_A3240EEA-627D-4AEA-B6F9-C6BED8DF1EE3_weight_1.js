function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 536870889;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    2;
    static [v4] = v5;
    constructor(a8, a9) {
        super();
    }
    static o(a14) {
        for (const v15 in this) {
            const v17 = Symbol.iterator;
            const o26 = {
                [v17]() {
                    let v19 = 10;
                    const o25 = {
                        next() {
                            const v23 = v19 == v19--;
                            const o24 = {
                                "done": v23,
                                "value": v19,
                            };
                            return o24;
                        },
                    };
                    return v15;
                },
            };
        }
        return a14;
    }
}
new C6(v3, C6);
const v28 = new C6(v3, v3);
new C6(v28, v4);
for (let v30 = 0; v30 < 5; v30++) {
    const v31 = `
        let v33 = +-65537;
        v33++;
    `;
    eval(v31);
}
const v39 = new C6(1052);
new Uint8ClampedArray(13);
new Uint8ClampedArray(v39);
function F49(a51, a52, a53, a54) {
    if (!new.target) { throw 'must be called with new'; }
}
const v55 = new F49(0.0, 1.966736164545426e+307, 0.3085697849422683, 0.3085697849422683);
class C56 {
    static [0.0] = v55;
    static 2 = 1.966736164545426e+307;
    static 3224 = 1.966736164545426e+307;
    905;
    d;
    static 4096 = F49;
}
