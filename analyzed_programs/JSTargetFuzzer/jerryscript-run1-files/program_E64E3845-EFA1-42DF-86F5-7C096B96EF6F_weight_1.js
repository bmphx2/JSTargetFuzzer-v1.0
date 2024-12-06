function f0() {
    let v2 = 10;
    let v3 = 9007199254740992;
    const o6 = {
        [v2]: "65537",
        "g": "65537",
        __proto__: "65537",
        "e": v2,
        "d": "65537",
        "f": f0,
        10: f0,
        p(a5) {
            let v4 = this;
            ({"c":v2,"g":a5,"h":v4,...v3} = v4);
            a5.__proto__ = v2;
            super.a = "65537";
            const t16 = "65537";
            t16[v3] = v2;
            return "65537";
        },
        "c": "65537",
        "b": v2,
        "a": "65537",
        "h": "65537",
        [f0]: f0,
        ["65537"]: v2,
        /*
        __proto__: v3,
        */
    };
    return o6;
}
const v7 = f0();
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
            if (delete o27?.d) {
                try { v9.p(v7, a21, 127, o27, 1073741823); } catch (e) {}
            } else {
                this.e = 2;
                o27[3];
            }
        `;
        eval(v22);
    }
}
const v34 = new C18();
async function f35(a36, a37) {
    a36 /= v9;
    return C18;
}
f35(v34);
