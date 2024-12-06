const v1 = new WeakSet();
class C7 extends v1.constructor {
    h = WeakSet;
    static [WeakSet];
}
new C7();
const v11 = Symbol.iterator;
const o20 = {
    [v11]() {
        let v13 = 10;
        const o19 = {
            next() {
                v13--;
                const v17 = v13 == 0;
                const o18 = {
                    "done": v17,
                    "value": v13,
                };
                return o18;
            },
            "e": this,
            "f": Symbol,
            [v11]: v11,
            "b": WeakSet,
            254: Symbol,
        };
        return o19;
    },
};
new Set();
isFinite(isFinite);
