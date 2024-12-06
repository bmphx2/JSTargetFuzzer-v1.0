class C3 {
    9 = -1921957275;
    static f;
    constructor(a5) {
        function f6() {
            return -1921957275;
        }
    }
    o(a8) {
        function f9() {
            return this;
        }
        return a8;
    }
}
const v10 = new C3(C3);
new C3(v10);
new C3(C3);
const v20 = Symbol.iterator;
const o29 = {
    [v20]() {
        let v22 = 10;
        const o28 = {
            next() {
                v22--;
                const v26 = v22 == 0;
                const o27 = {
                    "done": v26,
                    "value": v22,
                };
                return o27;
            },
        };
        return o28;
    },
};
