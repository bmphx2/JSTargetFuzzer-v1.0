new Set();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 9007199254740992n;
}
new F6(-52166n, 9007199254740992n);
new F6(9007199254740992n, -52166n);
new F6(-52166n, -52166n);
new Array(9007199254740992n);
new Date(34405, Math.min(-15));
