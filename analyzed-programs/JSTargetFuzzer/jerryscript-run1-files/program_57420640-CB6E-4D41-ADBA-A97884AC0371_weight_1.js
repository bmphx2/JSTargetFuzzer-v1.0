const o6 = {
    get b() {
        return [arguments];
    },
};
function f7(a8, a9) {
    a8[4] = a8;
    return f7;
}
new Promise(f7);
function F22(a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    const v28 = new Date();
    Reflect.get(v28.toUTCString);
}
new F22();
