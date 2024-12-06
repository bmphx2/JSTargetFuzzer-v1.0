let v2 = 4294967295;
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = null;
    this.c = null;
}
const v7 = new F4(F4);
const v8 = new F4(257);
const v9 = new F4(v2);
function f13(a14, a15, a16) {
    const o63 = {
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
            let v33 = 0;
            do {
                v2 = v33;
                +3n;
                v33++;
            } while (v33 < 8)
            const v41 = new F20(255, 3n);
            let v42;
            try { v42 = a15(a14, null, null, a15); } catch (e) {}
            v42[3n] **= a19;
            Object.defineProperty(v7, "f", { writable: true, configurable: true, enumerable: true, get: f13 });
            new BigInt64Array(4096);
            new BigInt64Array(v42);
            new BigInt64Array(256);
            v7.g;
            for (let v57 = 0; v57 < 32; v57++) {
                const t48 = "h";
                t48["p" + v57] = v57;
            }
            v41[Symbol.species];
            const v62 = new F20(257, a18);
            return v62;
        },
    };
    return o63;
}
const v64 = f13(-9223372036854775807n, v7, f13);
const v65 = f13(3n, v7, -1002784101n);
async function* f66(a67, a68, a69) {
    Object.defineProperty(f66, 65535, { enumerable: true, get: f13 });
    await v8;
    yield a67;
    return v7;
}
f66(v64, -9223372036854775807n, -1002784101n);
const v74 = f13(-9223372036854775807n, v65, v8).c;
v7[257] = v64;
const v77 = Symbol.iterator;
const o89 = {
    [v74]() {
        let v79 = 10;
        const o88 = {
            next() {
                null % this;
                f66 in this;
                v9.a = f66;
                try { new v74(v65); } catch (e) {}
                Symbol[v77] = v79;
                v79--;
                const v86 = v79 == 0;
                const o87 = {
                    "done": v86,
                    "value": v79,
                };
                return o87;
            },
        };
        return o88;
    },
};
("451")[1439];
