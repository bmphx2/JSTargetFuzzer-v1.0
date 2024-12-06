function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.buffer = a5;
}
new F3(-62835, 0);
new F3(0, -62835);
new F3(-62835, -62835);
const v13 = [0];
[15,268435456,36016,-4096,-22760,2,11957];
[17091,-2];
const v16 = [1024,-536870912,-7939];
const v17 = [-10,48336,-47248,-38101,-25931,208658095,50124,1502174405];
const v18 = [1262143293,15,46313,5,2147483649];
const v20 = Symbol.iterator;
const o29 = {
    [v20]() {
        let v22 = 10;
        const o28 = {
            next() {
                v22--;
                const v26 = v22 == 0;
                const o27 = {
                    "done": v26,
                    "b": v22,
                };
                return o27;
            },
        };
        return o28;
    },
};
function f30() {
    return v18;
}
const v31 = [f30,f30,v17];
const v33 = [v18,[v31,v16,f30,v31]];
new Float64Array(v31, o29, 1073741824, v17);
const v39 = new Uint32Array(1);
new f30(2);
const v46 = [65535n,0n,-685564174n];
let v47 = [-685564174n,-685564174n,v46,v46];
const v48 = [v47,v47,v46,-685564174n,0n];
const v49 = [65535n,v47,v33,2];
[v48,0n];
const v51 = [v47];
const o55 = {
    __proto__: v13,
    ...v13,
};
const t49 = "fdNr";
t49[0] = 65535n;
let v62;
try {
const t0 = "localeCompare";
v62 = new t0(v46, v51, -685564174n, 58270);
} catch (e) {}
async function* f63(a64, a65, a66) {
    ({"length":a64,...v47} = v39);
    await (yield v46);
    yield "fdNr";
    return a64;
}
f63(58270, v49, v62);
