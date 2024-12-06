const v0 = [];
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
}
try {
    -3n % F2;
} catch(e6) {
} finally {
}
function f7() {
    const o31 = {
        "e": v0,
        valueOf() {
            new f7();
            const v10 = f7();
            const o11 = {
            };
            new Proxy(v10, o11);
            for (let [i19, i20] = (() => {
                    for (let v15 = 0; v15 < 32; v15++) {
                        v10["p" + v15] = v15;
                    }
                    return [0, 10];
                })();
                i19 < i20;
                i19++, i20--) {
            }
            return v0;
        },
    };
    return o31;
}
const v32 = f7();
f7();
f7();
new Uint16Array(16);
new BigInt64Array(2);
new Uint8Array(128);
function F45(a47) {
    if (!new.target) { throw 'must be called with new'; }
}
try {
    ("symbol")["slice"](16).hypot([-Infinity]);
    -3n % F45;
} catch(e54) {
} finally {
}
v32["valueOf"](Uint8Array, v32[2], Uint16Array, "valueOf", "valueOf");
const v59 = Symbol.iterator;
const o68 = {
    [v59]() {
        let v61 = 10;
        const o67 = {
            next() {
                v61--;
                const v65 = v61 == 0;
                const o66 = {
                    "done": v65,
                    "value": v61,
                };
                return o66;
            },
        };
        return o67;
    },
};
