const v0 = [-9,11,536870888,1353396460,16];
const v1 = [65536];
const v2 = [-30308,-1157515249,4];
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.source = a5;
}
const v7 = new F3(v1, v2);
const v8 = new F3(v1, v0, v7);
const v9 = new F3(v0, v0);
function F13() {
    if (!new.target) { throw 'must be called with new'; }
}
const v15 = new F13();
try { v9(...v0, 536870888, v15, v8); } catch (e) {}
for (let v17 = 0; v17 < 32; v17++) {
    v2["p" + v17] = v17;
}
const v22 = new Uint8ClampedArray();
const v23 = v22.h;
let v24;
try { v24 = v15.o(); } catch (e) {}
try { RegExp.call(v24, v15, v23, v9, v23, v23, v0, v24, 1073741824); } catch (e) {}
