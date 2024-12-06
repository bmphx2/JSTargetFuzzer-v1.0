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
    const o42 = {
        "e": a15,
        ...a15,
        "c": v9,
        "g": v9,
        [v8]: F4,
        n(a18, a19) {
            function F20(a22, a23) {
                if (!new.target) { throw 'must be called with new'; }
                this.b = F4;
                let v24 = 0;
                do {
                    const v25 = [a23,f13];
                    const v26 = [a19,v8,v25,v25,v2];
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
            v36[Symbol.species];
            const v41 = new F20(257, a18);
            return v41;
        },
    };
    return o42;
}
f13(-9223372036854775807n, v9, f13);
const v44 = f13(3n, v7, -1002784101n);
f13(-9223372036854775807n, v44, v44);
("451")[1439];
