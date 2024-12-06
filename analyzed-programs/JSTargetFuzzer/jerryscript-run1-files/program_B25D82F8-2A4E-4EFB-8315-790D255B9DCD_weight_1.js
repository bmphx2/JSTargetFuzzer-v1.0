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
const v33 = new Date();
v0[v0] = -3n;
f7();
const o35 = {
    "apply": f7,
    "call": f7,
    "defineProperty": f7,
    "deleteProperty": f7,
    "get": f7,
    "getPrototypeOf": Date,
    "isExtensible": f7,
    "ownKeys": f7,
};
let v37 = new Proxy(v0, o35);
const v38 = f7();
f7();
f7();
new Uint16Array(16);
v37 = v0;
v33.toString = f7;
const v45 = v38[255];
try { v45(); } catch (e) {}
new BigInt64Array(483);
const v52 = new Int8Array(1024);
new Int16Array(256);
new BigInt64Array(2);
new Uint8Array(128);
function F62(a64) {
    if (!new.target) { throw 'must be called with new'; }
}
try {
    ("symbol")["slice"](16).hypot([-Infinity]);
    -3n % F62;
} catch(e71) {
} finally {
}
v38["valueOf"](Uint8Array, v38[2], Uint16Array, "valueOf", "valueOf");
const v76 = Symbol.iterator;
const o91 = {
    [f7](a78, a79) {
        return v52;
    },
    [v76]() {
        let v84 = 10;
        const o90 = {
            next() {
                v84--;
                const v88 = v84 == 0;
                const o89 = {
                    "done": v88,
                    "value": v84,
                };
                return o89;
            },
        };
        return o90;
    },
};
