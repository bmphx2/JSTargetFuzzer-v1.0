function f3(a4) {
    const o10 = {
        "d": a4,
        "c": -4096,
        __proto__: -4096,
        [a4]: a4,
        valueOf(a6, a7) {
            this < this ? this : this;
            return a4;
        },
        "e": -4096,
    };
    return o10;
}
f3(-2);
f3(-2);
f3(-4096);
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
