const v1 = new WeakMap();
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v1;
}
new F8(10n, 10n);
new F8(10n, 98510691n);
const v14 = new F8(64n, 98510691n);
const v18 = (a19, a20, a21, a22) => {
    function F23(a25, a26, a27) {
        if (!new.target) { throw 'must be called with new'; }
        v14.b = a21;
    }
    return v18;
};
