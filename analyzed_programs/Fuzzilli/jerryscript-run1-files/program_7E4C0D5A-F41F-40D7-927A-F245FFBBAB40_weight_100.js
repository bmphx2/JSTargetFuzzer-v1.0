const v1 = new WeakSet();
function f2() {
    return v1;
}
function f3(a4, a5) {
    const o6 = {
        ...a4,
        "h": v1,
        ...a5,
        ...v1,
        [a4]: v1,
        8: WeakSet,
        "e": WeakSet,
        "c": WeakSet,
        [v1]: WeakSet,
        "g": v1,
        [WeakSet]: f2,
    };
    return o6;
}
f3(v1, f3(f2, WeakSet));
const v9 = f3(v1, f2);
const v13 = /a(?=b)/s;
const v14 = /(?:a?)?(?:ab)/vgsd;
const v15 = /J\u{12345}Xj+/ugsd;
v13[2113424724] = v15;
v1.g;
v15.dotAll ^= 268435440;
Object.defineProperty(v13, 10, { value: v14 });
v9 ^ v14;
v9.__proto__ = v15;
const v19 = Symbol.iterator;
const o28 = {
    [v19]() {
        let v21 = 10;
        const o27 = {
            next() {
                v21--;
                const v25 = v21 == 0;
                const o26 = {
                    "done": v25,
                    "value": v21,
                };
                return o26;
            },
        };
        return o27;
    },
};
