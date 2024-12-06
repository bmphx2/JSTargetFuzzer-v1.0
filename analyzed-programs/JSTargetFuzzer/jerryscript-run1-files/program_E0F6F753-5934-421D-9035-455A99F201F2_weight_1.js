function f3() {
    return -11;
}
const v4 = [-1073741824,413349497];
const v5 = [4294967296,-515757403,-65537,-1650721279,-11,-9];
const v6 = [819256321,-19695,1000,10,8,26719,1024,-63709];
function f7(a8, a9, a10) {
    const o20 = {
        set c(a12) {
        },
        set b(a17) {
            a8 * this;
            const o19 = {
                __proto__: v5,
                64: v4,
                "c": v6,
            };
        },
    };
    return o20;
}
f7(10, v4, -579240409);
f7(-579240409, v6, -579240409);
f7(10, v5, 10);
[65535,43584,255];
const v25 = [-1137562803,-13,9,1024];
[0];
let v27 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v29 = Symbol.iterator;
const o38 = {
    [v29]() {
        let v31 = 10;
        const o37 = {
            next() {
                v31--;
                const v35 = v31 == 0;
                const o36 = {
                    "done": v35,
                    "value": v31,
                };
                return o36;
            },
        };
        return o37;
    },
};
const v39 = [6,17590];
[-65536];
let v45 = BigUint64Array;
const v46 = new v45(12);
try { o38.p(v25); } catch (e) {}
v27[9] = -36862;
const v53 = new Uint32Array(v39);
new Uint8Array(16);
let v58;
try { v58 = v27(-4294967295); } catch (e) {}
({"buffer":v27,"d":v45,"g":v58,...v58} = v46);
const o59 = {
};
new Proxy(v53, o59);
const v65 = Symbol.toPrimitive;
const o69 = {
    [v65]() {
        try {
            super.getUint16();
        } catch(e68) {
        }
        return this;
    },
};
function F76(a78, a79, a80, a81) {
    if (!new.target) { throw 'must be called with new'; }
    a80.d = a81;
    this.f = a78;
}
const v82 = new F76(v53, 5n, "-16", "-16");
new F76(-1, -7n, "-16", "global");
const v84 = new F76(-4294967296, 5n, "global", "global");
"-16" == v84;
if (-1) {
} else {
    function F89(a91, a92, a93) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a93;
    }
    const v94 = new F89(F89, v82, "function");
    const t86 = -1;
    new t86(v94, "global", "function");
    new F89(v94, "global", "function");
}
