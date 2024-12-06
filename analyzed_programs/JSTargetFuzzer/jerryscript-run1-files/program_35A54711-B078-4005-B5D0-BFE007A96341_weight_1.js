const v0 = [];
function f1() {
    return v0;
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a5;
    this.g = v0;
}
new F2(f1, F2);
new f1(F2, v0);
new F2(F2, F2);
for (let v18 = 0; v18 < 5; v18++) {
    const v19 = `
        function F20(a22, a23) {
            if (!new.target) { throw 'must be called with new'; }
        }
    `;
    eval(v19);
}
