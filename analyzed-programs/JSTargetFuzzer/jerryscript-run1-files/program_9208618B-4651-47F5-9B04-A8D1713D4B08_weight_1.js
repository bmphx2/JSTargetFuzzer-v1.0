function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 64;
    this.b = 64;
    this.e = 64;
}
new F0();
new F0();
const v5 = new F0();
new Array(256);
[F0,v5];
[v5];
[Array,v5,0.0,0.0];
([]).flat();
