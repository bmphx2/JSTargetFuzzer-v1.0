let v2 = 4294967295;
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = null;
    this.c = null;
}
const v7 = new F4(257);
const v8 = new F4(257);
const v9 = new F4(v2);
function f13(a14, a15, a16) {
    const o54 = {
        "e": a15,
        ...v8,
        "c": v7,
        "g": v9,
        [v8]: F4,
        n(a18, a19) {
            function F20(a22, a23) {
                if (!new.target) { throw 'must be called with new'; }
                this.b = F4;
                let v24 = 0;
                do {
                    const v25 = [a23,f13];
                    const v26 = [v25,v8,v25,v25,v2];
                    [v26,v26];
                    v24++;
                } while (v24 < 0)
                this.g = a19;
            }
            new F20(v2, a18);
            a15 * a14;
            v2 = 257;
            const v36 = new F20(255, 3n);
            let v37;
            try { v37 = a15(a14, null, null, F20); } catch (e) {}
            v37[3n] **= a19;
            Object.defineProperty(v7, "f", { writable: true, configurable: true, enumerable: true, get: f13 });
            new BigInt64Array(4096);
            new BigInt64Array(9);
            new BigInt64Array(256);
            v36[Symbol.species];
            const v53 = new F20(257, a18);
            return v53;
        },
    };
    return o54;
}
const v55 = f13(-9223372036854775807n, v7, f13);
const v56 = f13(3n, v7, -1002784101n);
async function* f57(a58, a59, a60) {
    Object.defineProperty(v8, 65535, { enumerable: true, get: f13 });
    await v8;
    yield a58;
    return v7;
}
f57(v55, -9223372036854775807n, -1002784101n);
f13(-9223372036854775807n, v56, v8).c;
v7[257] = v55;
const v68 = Symbol.iterator;
const o77 = {
    [v68]() {
        let v70 = 10;
        const o76 = {
            next() {
                v70--;
                const v74 = v70 == 0;
                const o75 = {
                    "done": v74,
                    "value": v70,
                };
                return o75;
            },
        };
        return o76;
    },
};
("451")[1439];
