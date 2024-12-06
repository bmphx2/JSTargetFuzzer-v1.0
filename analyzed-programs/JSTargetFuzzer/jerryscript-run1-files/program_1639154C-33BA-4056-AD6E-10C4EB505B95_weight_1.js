new Date();
class C9 {
    constructor(a11) {
        return arguments;
    }
}
const v13 = new C9(C9);
const v14 = new C9(C9);
v14.d = v13;
const v18 = Symbol.iterator;
const o27 = {
    [v18]() {
        let v20 = 10;
        const o26 = {
            next() {
                v20--;
                const v24 = v20 == 0;
                const o25 = {
                    "done": v24,
                    "value": v20,
                };
                return o25;
            },
        };
        return o26;
    },
};
const o29 = {
    ...null,
};
