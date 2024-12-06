function f0() {
}
function F14() {
    if (!new.target) { throw 'must be called with new'; }
    const t4 = -27041;
    t4.b = -9;
}
const v17 = new F14();
const o19 = {
    ...v17,
    get b() {
        return f0;
    },
};
