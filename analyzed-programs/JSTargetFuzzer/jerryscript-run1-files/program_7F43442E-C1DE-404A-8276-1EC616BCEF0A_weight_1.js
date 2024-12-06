let v2 = 65535n;
function f3(a4, a5) {
    const o10 = {
        [v2]: 536870889n,
        valueOf(a7) {
            const v8 = a5 || 255n;
            if (a4) {
                try { a4(a7, a5, 255n, a5, v8); } catch (e) {}
            } else {
                a5.__proto__ = this;
            }
            return v8;
        },
        __proto__: v2,
        "b": v2,
        "h": a5,
        ...a5,
        [536870889n]: f3,
        "a": a4,
        "d": 536870889n,
        [a5]: v2,
        "c": a4,
        "g": a4,
        7: 255n,
        "e": 255n,
        ...a5,
        [a4]: a4,
    };
    return a4;
}
const v11 = f3(255n, 536870889n);
f3(536870889n, v2);
f3(v11, v2);
new Uint32Array(1833);
new Int8Array(241);
const v22 = new Uint32Array(175);
let v25;
try {
const t0 = 1;
v25 = t0();
} catch (e) {}
v2 = 536870889n;
v22[v11] = v25;
(1833).toString(v25);
