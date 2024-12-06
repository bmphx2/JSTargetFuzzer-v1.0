function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 65535;
    this.e = 65535;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [-7,16];
const v7 = [0,-3,4294967295,536870889,31493,-7];
const v8 = [42726,-2,7,4,-128,-9];
[v5,v4,v5];
const v10 = [v5];
[v10,v10,v7,v8,v10];
const v12 = [-5,8,755437274,-268435456,1748508040];
[2147483647,61930,-1073741824];
[22858];
try { v6(...v6, ...v12, v3, ...v10, v3); } catch (e) {}
for (let v16 = 0; v16 < 32; v16++) {
    v5["p" + v16] = v16;
}
