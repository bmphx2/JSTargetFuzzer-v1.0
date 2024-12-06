function f3() {
    return -12922n;
}
const v4 = [-876696719n,-12922n,-12922n];
const v5 = [f3,-12922n];
const v6 = [-12922n,-12922n,-12922n];
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v6;
}
new F7(v6, -12922n, 62995n, v5);
new F7(v5, -12922n, -12922n, v4);
new F7(v6, -876696719n, -12922n, v4);
v6[f3];
const o20 = {
    "construct": f3,
    "deleteProperty": f3,
    "get": f3,
    "preventExtensions": f3,
};
new Proxy(v4, o20);
try { v6.flatMap(f3, v5); } catch (e) {}
