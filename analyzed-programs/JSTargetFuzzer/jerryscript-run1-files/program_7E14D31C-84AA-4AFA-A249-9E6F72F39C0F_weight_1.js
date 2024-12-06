const v0 = [];
function f1() {
    const o13 = {
        __proto__: v0,
        "b": v0,
        n() {
            let v3 = 0;
            do {
                Object.defineProperty(v0, 1, { configurable: true, set: f1 });
                const v4 = new f1();
                v4.h >>>= this;
                v0 >> v4;
                v0[227];
                v3++;
            } while (v3 < 4)
            return v3;
        },
    };
    return o13;
}
const v14 = f1();
let v15 = 0;
while (v15 < 3) {
    f1();
    v14.__proto__ = v0;
    v15++;
}
f1();
f1();
const v32 = (a33, a34, a35, a36) => {
    a35 > 127;
    return a35;
};
