const v1 = new Map();
function f2() {
    return v1;
}
function f3(a4, a5) {
    const o18 = {
        ...v1,
        ...a4,
        [f2]: a5,
        "c": Map,
        "h": a4,
        "g": v1,
        5: f2,
        "a": Map,
        "b": f2,
        get f() {
            super.e = a5;
            return this;
        },
        [a5]() {
            this === this;
            a5 = this;
            this[this] = a4;
            Object.defineProperty(a5, Map, { configurable: true, value: a4 });
            try {
                function f10() {
                }
            } catch(e11) {
            }
        },
        valueOf(a13, a14) {
            return a14;
        },
        ...f2,
        "isExtensible": a4,
        set g(a17) {
        },
        [a4]: Map,
    };
    return o18;
}
const v19 = f3(f2, Map);
f3(f3(f2, v19), v19);
function F25() {
    if (!new.target) { throw 'must be called with new'; }
    const v28 = new Int16Array();
    v28.fill(this, v28, Int16Array) != 5n;
}
function f35() {
    return -9n;
}
const v37 = ([])[-1];
Object.defineProperty([0.3963332363617482], "h", { enumerable: true, get: v37 });
