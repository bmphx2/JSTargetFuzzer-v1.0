function f3(a4, a5) {
    const o10 = {
        [65535n]: 536870889n,
        valueOf(a7) {
            const v8 = a5 || 255n;
            if (a4) {
                try { a4(a7, a5, 255n, a5, v8); } catch (e) {}
            } else {
                a5.__proto__ = this;
            }
            return v8;
        },
        __proto__: 65535n,
        "b": 65535n,
        [a5]: 65535n,
        [a4]: a4,
    };
    return a4;
}
const v11 = f3(255n, 536870889n);
f3(536870889n, 65535n);
f3(v11, 65535n);
new Uint32Array(1833);
new Int8Array(241);
new Uint32Array(175);
let v25;
try {
const t0 = 1;
v25 = t0();
} catch (e) {}
(1833).toString(v25);
