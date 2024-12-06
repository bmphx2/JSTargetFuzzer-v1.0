function f3(a4, a5) {
    const o13 = {
        1000: a5,
        [a5](a7) {
            const v9 = Symbol.toPrimitive;
            const o12 = {
                [v9]() {
                    this[536870888] = this.f;
                    return a7;
                },
            };
            return a4;
        },
        __proto__: a5,
        ...a5,
    };
    return o13;
}
f3(-15786, f3);
f3(-15786, f3(33335, -15786));
new Int8Array(7);
new Float64Array(2086);
new Uint8ClampedArray(38);
const v26 = [];
class C27 {
    valueOf(a29, a30) {
        const v31 = `
            const t27 = v26.__proto__;
            delete t27?.d;
        `;
        eval(v31);
    }
}
const v36 = new C27();
async function f37(a38, a39) {
    a38 /= C27;
    return v26;
}
f37(v36);
