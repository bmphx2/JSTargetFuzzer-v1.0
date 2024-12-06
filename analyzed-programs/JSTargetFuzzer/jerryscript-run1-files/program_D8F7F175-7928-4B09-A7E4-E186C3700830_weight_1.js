class C3 {
    static o(a5) {
        const v7 = Symbol.iterator;
        const o16 = {
            [v7]() {
                let v9 = 10;
                const o15 = {
                    next() {
                        v9--;
                        const v13 = v9 == 0;
                        const o14 = {
                            "done": v13,
                            "value": v9,
                        };
                        return o14;
                    },
                };
                return o15;
            },
        };
        return this;
    }
}
new C3();
new C3();
new C3();
new Map();
const v30 = new Uint32Array(181);
let v32 = BigUint64Array;
let v33 = new v32(1);
let v34 = 253;
[v34,,v32,v33] = v30;
for (let v36 = 0; v36 < 5; v36++) {
    continue;
}
let v37 = 10;
for (;
    (() => {
        new Int8Array(3558);
        return v37--;
    })();
    (() => {
        RangeError();
        function f44() {
            return f44;
        }
    })()) {
}
try { v32["abs"](181, v34, v32); } catch (e) {}
new Uint16Array(v34);
for (let i56 = 0; i56 < 2; i56++) {
    const v62 = new Function("x");
    v62.name;
}
Function();
