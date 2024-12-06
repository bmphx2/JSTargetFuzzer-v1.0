const v2 = new Int32Array(3852);
const v5 = new Float32Array(244);
const v8 = new Int32Array(6);
const v9 = v8;
Object.defineProperty(v2, "b", { writable: true, configurable: true, enumerable: true, value: v5 });
const v11 = Symbol.iterator;
const o20 = {
    __proto__: v11,
    "f": Symbol,
    "g": Symbol,
    "d": v5,
    ...v11,
    [v11]() {
        let v13 = 10;
        const o19 = {
            next() {
                v13--;
                const v17 = v13 == 0;
                const o18 = {
                    "done": v17,
                    "value": v13,
                };
                return o18;
            },
        };
        return o19;
    },
};
function f24(a25, a26) {
    const o69 = {
        "a": 4096,
        "c": 3852,
        set g(a28) {
            delete v9[16];
            try { o20.toString(o20, v5, f24); } catch (e) {}
        },
        ...a25,
        ...a26,
        "f": a26,
        "h": a25,
        10: v8,
        "g": 2,
        "e": 7,
        o(a32, a33, a34, a35) {
            `a`;
            return a35;
        },
        "f": a25,
        268435440: a25,
        "e": 3852,
        "d": f24,
        [a25]: 7,
        "c": a25,
        o(a38, a39, a40) {
            let v41 = 0;
            do {
                v8.toString = a40;
                for (let i44 = 0, i45 = 10; i44 < i45; i44++) {
                    continue;
                }
                try { v8.toLocaleString(a39, a25); } catch (e) {}
                const v55 = 3 % 3;
                Math.asinh(3);
                let v57;
                try { v57 = a38(this, a38); } catch (e) {}
                super.a;
                Object.defineProperty(Math, v57, { writable: true, enumerable: true, value: a25 });
                try { a25(v55, a39, a26, 2); } catch (e) {}
                Math.asinh(3);
                v41++;
            } while (v41 < 9)
            Promise.resolve(Promise);
            return Promise;
            Math.trunc(a26);
            return a40;
        },
    };
    return o69;
}
const v70 = f24(244, 4096);
f24(f24, 6);
f24(v70, 244);
const v73 = [9007199254740990];
v73.length = 13;
v73.lastIndexOf();
