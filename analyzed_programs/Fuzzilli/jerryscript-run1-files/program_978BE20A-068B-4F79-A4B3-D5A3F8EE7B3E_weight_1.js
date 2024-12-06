const v6 = [23038,786607593,-65535];
let v7 = [512,-15,7,-1];
const v8 = [-8045,-42522,781854303,-23876,7084,-27406,1073741824,-1250696986,1024];
class C9 {
    #g = 69027287;
    3481442468 = 69027287;
    #b = v6;
    static #a;
    #h;
    static #m(a11, a12, a13, a14) {
        this[a12];
        const v16 = this.g;
        for (let v17 = 0; v17 < 32; v17++) {
            v16["p" + v17] = v17;
        }
        return v16;
    }
}
new C9();
const v21 = new C9();
const v22 = new C9();
v7 = v22;
function f23(a24, a25) {
    const o26 = {
        2362: a24,
        ...C9,
        "b": v6,
    };
    return o26;
}
const v27 = f23(C9, v8);
f23(v21, C9);
f23(v27, v21);
