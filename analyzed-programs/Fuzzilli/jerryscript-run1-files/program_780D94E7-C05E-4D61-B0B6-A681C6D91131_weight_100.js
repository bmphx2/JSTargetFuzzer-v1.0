function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a12;
}
const v13 = new F9(-1.3671354772485975e+308, 65536);
const v14 = new F9(-1.3671354772485975e+308, -65537);
const v15 = new F9(0.0, 65536);
v14[v15] = v13;
[[1000000000.0,0.0]];
const v18 = [-1.1935542779769904e+308];
v18.length = 65536;
delete v18[1];
v18[-2];
