function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 1024n;
}
const v12 = new F6(51205n, 343062133, 318314392n, -434533022);
new F6(51205n, -434533022, F6, 10);
new F6(318314392n, 51205n, v12, 10);
function f18(a19, a20) {
    return a19();
}
new Promise(f18);
