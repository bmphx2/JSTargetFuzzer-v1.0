function f0() {
    const o8 = {
        [8]: 8,
        "e": 8,
        ..."global",
        "b": 8,
        4: 8,
        0: 1,
        ..."global",
        "c": 1,
        m(a5, a6, a7) {
            return 8;
        },
        "d": "global",
        122: 1,
        ["global"]: 1,
    };
    return o8;
}
const v9 = f0();
const v10 = f0();
const v11 = f0();
const v13 = new Date();
class C14 extends Date {
    static 1708729531 = v13;
    static [v11];
    constructor(a16, a17) {
        super(v10);
        this.f = v9;
        let v18 = 0;
        const v19 = v18++;
        function F20() {
            if (!new.target) { throw 'must be called with new'; }
        }
        class C22 extends F20 {
            static [v19] = v19;
            constructor(a24, a25, a26, a27) {
            }
        }
        new Uint8ClampedArray(C22);
        a17[257] = v10;
    }
    6;
    [v10] = f0;
    static [v13];
    10;
}
const o34 = {
    n(a31, a32) {
        for (const v33 of a31) {
        }
        return this;
    },
};
const v35 = new C14(v9, v13);
const v36 = new C14(v35, v13);
new C14(v11, v36);
let v40 = -4028n;
v40 += v40;
class C41 extends f0 {
}
new C41();
0 < 7;
const v52 = new Float64Array(231);
3650 * v52;
-1679320101 === 1341;
