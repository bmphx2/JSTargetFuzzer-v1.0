const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = Symbol.iterator;
    const o13 = {
        [v4]() {
            let v6 = 10;
            const o12 = {
                next() {
                    v6--;
                    const v10 = v6 == 0;
                    const o11 = {
                        "done": v10,
                        "value": v6,
                    };
                    return o11;
                },
            };
            return o12;
        },
    };
    this.g = v0;
    this.h = v0;
    this.d = v0;
}
new F1();
new F1();
new F1();
const v26 = [65535n,0n,964329252n];
let v27 = [964329252n,964329252n,v26,v26];
const v28 = [v27,v27,v26,964329252n,0n];
const v29 = [65535n,v27];
[v28,0n];
const v31 = [v27];
const t34 = "fdNr";
t34[0] = 65535n;
let v38;
try {
const t0 = "localeCompare";
v38 = new t0(v26, v31, v31, 58270);
} catch (e) {}
async function* f39(a40, a41, a42) {
    ({"length":a40,...v27} = a41);
    yield v26;
    await a40;
    yield "fdNr";
    return a40;
}
f39(58270, v29, v38);
