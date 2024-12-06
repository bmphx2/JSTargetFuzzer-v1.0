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
new Float64Array(2086, -15786);
new Uint8ClampedArray(38);
("1073741824").match();
const v28 = [];
class C29 {
    valueOf(a31, a32) {
        const v33 = `
            const t28 = v28.__proto__;
            delete t28?.d;
        `;
        eval(v33);
    }
}
const v38 = new C29();
async function f39(a40, a41) {
    a40 /= C29;
    return v28;
}
f39(v38);
