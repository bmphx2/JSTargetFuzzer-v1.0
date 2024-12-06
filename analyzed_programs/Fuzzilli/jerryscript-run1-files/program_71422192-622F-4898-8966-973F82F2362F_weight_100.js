function f6(a7, a8, a9) {
    const o24 = {
        n(a11, a12) {
            const v14 = Symbol.iterator;
            const o23 = {
                [v14]() {
                    let v16 = 10;
                    const o22 = {
                        next() {
                            v16--;
                            const v20 = v16 == 0;
                            const o21 = {
                                "done": v20,
                                "value": v16,
                            };
                            return o21;
                        },
                    };
                    return o22;
                },
            };
            return -8n;
        },
    };
    return o24;
}
f6(-8n, 65536n, 2);
const v26 = f6(-8n, 65536n, -58768);
f6(-20525n, -20525n, -58768);
try { new f6(-20525n, ...-58768, v26, 4096, f6); } catch (e) {}
/i/ymd;
/JB/vym;
const v31 = /TV+/vgsi;
let v32 = 10;
for (; v32--;) {
    v31.flags;
}
