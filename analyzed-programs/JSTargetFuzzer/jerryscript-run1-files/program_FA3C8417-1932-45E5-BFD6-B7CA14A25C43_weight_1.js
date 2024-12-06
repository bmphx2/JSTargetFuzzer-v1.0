function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -4294967295;
}
new F0();
const v4 = new F0();
const v5 = new F0();
[F0,F0];
[v5];
[null,null,v4];
new Int32Array(1112);
new BigUint64Array(2);
new Uint8Array(6);
BigUint64Array == (1299275085 === [-65537,-29829,1073741824,11,-422315430,1024]);
