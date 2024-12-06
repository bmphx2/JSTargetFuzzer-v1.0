function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1073741824;
    this.d = 1073741824;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    F6.g = v4;
}
const v9 = new F6(v4);
const v10 = new F6(v5);
const v11 = new F6(v10);
function f15(a16, a17) {
    const o30 = {
        1858: v9,
        "c": a16,
        "e": v11,
        "b": v3,
        get f() {
            const v20 = Symbol.iterator;
            const o29 = {
                [v20]() {
                    let v22 = 10;
                    const o28 = {
                        next() {
                            v22--;
                            v22 == 0;
                            const o27 = {
                                "done": v9,
                                "value": v22,
                            };
                            return o27;
                        },
                    };
                    return o28;
                },
            };
            return this;
        },
    };
    return o30;
}
f15(f15, "yuNY1");
f15(f15(v5, "yuNY1"), "object");
const v37 = new ArrayBuffer(10);
new Int8Array(v37, 9);
