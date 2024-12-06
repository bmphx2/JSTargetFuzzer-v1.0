const v3 = [-1142559470,-731419029,-54237,0,10,992920688,9,-9007199254740990,3,-56525];
const v4 = [-4096,-20346,-256];
const v5 = [1073741825,5];
class C6 {
    g;
    257 = 42111;
    a = 42111;
    static #h;
    p(a8, a9, a10) {
        return -3.978945001876342;
    }
    static #c;
    #f = v3;
    1073741825 = 2147483647;
    static #b;
}
const v14 = new C6();
const v15 = new C6();
const v16 = new C6();
class C17 {
    static 9;
    constructor(a19, a20, a21, a22) {
        C6.__proto__ = a19;
        ++a22;
    }
    static #b = v14;
    set c(a25) {
        v14.a = this;
        const v27 = Symbol.iterator;
        const o36 = {
            [v27]() {
                let v29 = 10;
                const o35 = {
                    next() {
                        v29--;
                        const v33 = v29 == 0;
                        const o34 = {
                            "done": v33,
                            "value": v29,
                        };
                        return o34;
                    },
                };
                return o35;
            },
        };
    }
}
const v37 = new C17(v3, v4, v14, 51266);
const v38 = new C17(v5, v5, v15, 42111);
const v39 = new C17(v5, v3, v16, 51266);
v14[6];
v37[0] = v39;
class C42 extends v15.constructor {
    static [v16] = C6;
    [v38] = v15;
}
const v43 = new C42();
v43 * C17;
v37.__proto__ = v43;
