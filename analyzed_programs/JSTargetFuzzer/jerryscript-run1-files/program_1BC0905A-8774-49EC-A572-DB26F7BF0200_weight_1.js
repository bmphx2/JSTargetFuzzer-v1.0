const v1 = new WeakMap();
function f7(a8, a9, a10) {
    new Map(a10);
    new Uint16Array(1272, 1272, []);
    function F18(a20, a21, a22) {
        if (!new.target) { throw 'must be called with new'; }
        F18();
    }
    class C24 extends F18 {
        constructor(a26, a27, a28) {
            super();
        }
    }
    arguments[1] = arguments.callee;
    return a8;
}
f7();
function F32(a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v1;
}
new F32(10n, 10n);
new F32(10n, 98510691n);
new F32(64n, 98510691n);
const v42 = (a43, a44, a45, a46) => {
    function F47(a49, a50, a51) {
        if (!new.target) { throw 'must be called with new'; }
        a44.b = a45;
    }
    return v42;
};
