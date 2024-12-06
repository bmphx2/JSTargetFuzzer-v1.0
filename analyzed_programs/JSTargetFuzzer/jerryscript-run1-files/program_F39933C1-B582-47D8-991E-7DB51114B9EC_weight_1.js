function f0() {
    let v2 = 10;
    let v3 = 9007199254740992;
    const o6 = {
        [v2]: "65537",
        "g": "65537",
        p(a5) {
            let v4 = this;
            ({"c":v2,"g":a5,"h":v4,...v3} = v4);
            a5.__proto__ = v2;
            super.a = "65537";
            const t11 = "65537";
            t11[v3] = v2;
            return "65537";
        },
        "c": "65537",
        __proto__: v3,
    };
    return o6;
}
f0();
f0();
const v9 = f0();
const v17 = [];
class C18 {
    valueOf(a20, a21) {
        const v22 = `
            const o27 = {
                m(a24, a25, a26) {
                    return v22;
                },
            };
            v17.__proto__;
            delete o27?.d;
        `;
        eval(v22);
    }
}
const v32 = new C18();
async function f33(a34, a35) {
    a34 /= v9;
    return C18;
}
f33(v32);
