function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 12;
    this.f = 12;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v12 = Symbol.iterator;
const o19 = {
    [v12]() {
        let v14 = 10;
        const o18 = {
            next() {
                const v16 = v14--;
                this == v16;
                return v16;
            },
        };
    },
};
const v21 = [v5,-5.602420217862476];
[-3n,-5.602420217862476,v4];
[v21,F0,v5,v3,v5];
const v30 = [65535n,0n,964329252n];
let v31 = [964329252n,964329252n,v30,v30];
const v32 = [v31,v31,v30,964329252n,0n];
const v33 = [65535n,v31];
[v32,0n];
const v35 = [v31];
const v39 = new Uint16Array();
const v40 = v39.toLocaleString();
for (let v41 = 0; v41 < 5; v41++) {
    v40 ** v41;
}
Symbol.iterator;
v5.valueOf();
Date.parse(-256);
const t35 = "fdNr";
t35[0] = -4.0;
let v52;
try {
const t0 = "localeCompare";
v52 = new t0(v30, v35, v35, 58270);
} catch (e) {}
async function* f53(a54, a55, a56) {
    ({"length":a54,...v31} = a55);
    yield v30;
    await a54;
    yield "fdNr";
    return a54;
}
f53(58270, v33, v52);
