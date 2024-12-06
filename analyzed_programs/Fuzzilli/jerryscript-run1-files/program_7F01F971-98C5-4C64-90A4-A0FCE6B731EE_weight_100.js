function f0() {
    const o14 = {
        o(a5) {
            this[1000] = a5;
            ("10")["trimEnd"](a5, 1e-15, a5, ..."10");
            return 602776676;
        },
        get e() {
            const t8 = "10";
            Object.defineProperty("10", this, { writable: true, configurable: true, enumerable: true, value: delete t8[1e-15] });
            return this;
        },
    };
    return o14;
}
const v15 = f0();
const v16 = f0();
const v17 = f0();
const v18 = [v17,v17,f0];
let v20 = [v15,[v18,v16,f0],f0,v16,v15];
class C24 extends f0 {
    toString(a26, a27, a28, a29) {
        let v30;
        try { v30 = a28(); } catch (e) {}
        try { v30(v18, v17); } catch (e) {}
        const v34 = Symbol.iterator;
        const o43 = {
            [v34]() {
                let v36 = 10;
                const o42 = {
                    next() {
                        v36--;
                        const v40 = v36 == 0;
                        const o41 = {
                            "done": v40,
                            "value": v36,
                        };
                        return o41;
                    },
                };
                return o42;
            },
        };
        ({"e":v20,} = this);
        const v45 = Symbol.iterator;
        const o54 = {
            [v45]() {
                let v47 = 10;
                const o53 = {
                    next() {
                        v47--;
                        const v51 = v47 == 0;
                        const o52 = {
                            "done": v51,
                            "value": v47,
                        };
                        return o52;
                    },
                };
                return o53;
            },
        };
        return -65537;
    }
}
const v55 = new C24();
new C24();
new C24();
new Uint32Array(2);
const v63 = new Uint32Array(3);
new Int8Array(6);
let v68 = 0;
while (v68 < 0) {
    const v72 = [v63,6,C24,v63,v20];
    Reflect.apply(v17.o, v18, v72);
    v68++;
}
const v76 = new Uint16Array(Uint16Array, Uint16Array);
const v77 = v76 instanceof Uint16Array;
if (v77) {
    try { new Int8Array(v16, 2, ...v77, Uint32Array, v55, ...v76); } catch (e) {}
} else {
    v55.length = 512;
}
