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
const v32 = new C6(1052);
new Uint8ClampedArray(13);
new Uint8ClampedArray(v32);
function F42(a44, a45, a46, a47) {
    if (!new.target) { throw 'must be called with new'; }
}
const v48 = new F42(0.0, 1.966736164545426e+307, 0.3085697849422683, 0.3085697849422683);
class C49 {
    static [0.0] = v48;
    static 2 = 1.966736164545426e+307;
    static 3224 = 1.966736164545426e+307;
    905;
    d;
    static 4096 = F42;
}
