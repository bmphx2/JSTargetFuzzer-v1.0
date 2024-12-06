function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a5;
    this.b = -1;
    this.h = a5;
}
const v6 = new F3(-1);
const v7 = new F3(-1);
const v8 = new F3(1);
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 536870912;
}
const v18 = new F12(v6, 536870912, -1, v8);
new F12(v6, 11, -1073741824, v18);
new F12(v7, 536870912, F3, v8);
new Float32Array(959);
new Uint16Array(64);
new Float32Array(2989);
