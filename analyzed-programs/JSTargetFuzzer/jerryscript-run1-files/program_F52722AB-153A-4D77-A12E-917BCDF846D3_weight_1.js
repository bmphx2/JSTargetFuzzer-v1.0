function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = this;
}
new F0();
const o10 = {
    p(a5, a6, a7, a8) {
        for (let v9 = 0; v9 < 5; v9++) {
            break;
            break;
        }
        return a8;
    },
};
new F0();
const v12 = new F0();
function f13() {
    return v12;
}
new WeakMap();
async function* f19(a20, a21, a22) {
    for (let [i26, i27] = (() => {
            const o24 = {
            };
            return [0, 10];
        })();
        i26 < i27;
        ) {
    }
    return f19;
}
