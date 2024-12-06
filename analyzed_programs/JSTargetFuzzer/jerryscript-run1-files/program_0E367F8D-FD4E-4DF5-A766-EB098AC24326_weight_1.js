function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -9036;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o18 = {
        [a7](a10, a11) {
            const v15 = this & 3;
            this ^ -35769;
            return Math.acos(v15);
        },
        [F0]: a7,
        __proto__: a7,
        7: v4,
        "h": F0,
        2446740901: a8,
    };
    o18[2147483647] += a8;
    const t21 = [o18,[[a7,a8,v4,v5],a7,v4],v4,a8];
    t21.length <<= a8;
    return o18;
}
f6(v3, v5);
f6(v4, v5);
f6(v4, f6);
let v31 = 10;
for (;
    (() => {
        const v32 = v31--;
        class C33 {
        }
        return v32;
    })();
    ) {
    function f34() {
        for (let i46 = (() => {
                function f35() {
                }
                const v38 = new Uint8ClampedArray(1518);
                v38.findIndex(f35);
                delete v5[1518];
                const o42 = {
                    "defineProperty": f6,
                    "deleteProperty": f35,
                    "ownKeys": f34,
                };
                new Proxy(v5, o42);
                return 0;
            })();
            (() => {
                const o47 = {
                };
                return i46 < 7;
            })();
            ) {
        }
        return v31;
    }
}
