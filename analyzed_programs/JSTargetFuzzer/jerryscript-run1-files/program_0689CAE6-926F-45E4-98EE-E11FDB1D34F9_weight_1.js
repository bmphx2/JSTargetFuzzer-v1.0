function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a17;
    this.c = a15;
    this.h = a14;
}
new F12(-1024, "object", "stack", -37474);
new F12(-37474, "stack", "object", -37474, -4096, 23966);
new F12(16, "object", "object", "stack");
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
resourceName(129);
