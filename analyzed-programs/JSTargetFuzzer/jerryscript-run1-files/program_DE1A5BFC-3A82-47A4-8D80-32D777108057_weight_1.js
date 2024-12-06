const v0 = [];
function f1() {
    return f1;
}
function f2() {
    const o5 = {
        "b": f1,
        "e": f2,
        p() {
            for (const v4 in this) {
                break;
            }
            return f1;
        },
    };
    return o5;
}
const v8 = f2().p();
Object.defineProperty(v8, v8, { writable: true, value: 512 });
function F9() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v0;
}
new F9();
const v12 = new F9();
const v13 = new F9();
for (const v21 of v0) {
    const v22 = [v21,v21,v21,F9];
    const v23 = [-1077135716n,Date];
    [98907330,v23,v23,v22,3];
}
const v25 = new Date();
Date(v25 << F9);
try { v12.seal(); } catch (e) {}
const v29 = v13 == 98907330;
16 >= v29 ? 16 : v29;
v25["toISOString"]();
