function f3(a4, a5) {
    const o25 = {
        set f(a7) {
            let {"c":v8,"h":v9,...v10} = a7;
            for (let v11 = 0; v11 < 32; v11++) {
                a4["p" + v11] = v11;
            }
            const v14 = delete this[a7];
            if (a7) {
                try {
                    super.o(v14, v8, -3.0, a5);
                } catch(e16) {
                }
            } else {
                try { a5.flatMap(); } catch (e) {}
            }
            for (let v22 = 0; v22 < 32; v22++) {
                a7["p" + v22] = v22;
            }
        },
        "e": a4,
        ...417.8810713329742,
        __proto__: a4,
        "c": a5,
    };
    return o25;
}
f3(-3.0, 240.84085316413461);
const v27 = f3(-3.0, 240.84085316413461);
const v28 = f3(240.84085316413461, 417.8810713329742);
v27[240.84085316413461];
let v34;
try { v34 = v28.n(536870887); } catch (e) {}
const t33 = 417.8810713329742;
t33[5] = v34;
const t35 = 3;
t35[2] = 536870887;
new Set();
([[]]).includes();
