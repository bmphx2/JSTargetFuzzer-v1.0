const v0 = [];
function f1() {
    return v0;
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a5;
    this.g = v0;
}
new F2(f1, F2);
new f1(F2, v0);
new F2(F2, F2);
new Int16Array(2);
new Float32Array(129);
new Int32Array(7);
for (let v27 = 0; v27 < 5; v27++) {
    const v28 = `
        function F29(a31, a32) {
            if (!new.target) { throw 'must be called with new'; }
        }
    `;
    eval(v28);
}
