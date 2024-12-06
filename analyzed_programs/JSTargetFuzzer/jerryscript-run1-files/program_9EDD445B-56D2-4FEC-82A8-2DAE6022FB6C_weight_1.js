function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 9;
    this.c = 9;
}
new F3(9, -2);
new F3(257, -2);
new F3(257, 257);
function f13() {
    return 257;
}
new Uint16Array(64);
new Float32Array(3);
new Uint16Array(2);
[-3.0,Infinity,1000000.0,-1000000.0,4.0,-1e-15,1e-15,0.5485140613969286];
[-1.6612761144408032e+308,105.82369459765891,0.5667025687134166,4.0,5.696284556850282,-3.0,-972087.1197173307,6.796828444625653];
[NaN,-4.0,-0.0];
([]).filter(eval);
