function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 15;
    this.f = 15;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v3,v3];
const v7 = [v6,v5,v6,v4,v4];
const v8 = [v4];
const v10 = [v7,F0,v3,[v7,v8,v4]];
[v7,v10,v5];
[v10,v8,v10,[4294967296,9007199254740990,41994,1024,9007199254740991]];
[F0,[v5],v5];
[0,65536,-2147483648,-1913222516,65537];
[-256,9007199254740990,-9];
function f27(a28, a29) {
    const o37 = {
        ...a29,
        "c": a29,
        "b": 1073741824,
        "e": a29,
        __proto__: a29,
        [3](a31, a32, a33) {
            try {
                super.m(a29, a31, a33, a31);
            } catch(e35) {
            }
            this[8];
            a28 **= -33749;
            return a31;
        },
    };
    return o37;
}
f27(10000, 512);
f27(-33749, f27);
f27(3, f27);
function F41(a43, a44) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a44;
}
new F41(10000, 3);
const v46 = new F41(512, 22165);
new F41(1073741824, 3);
delete v46[1509295508];
Math.sinh(F41);
Math.sinh(10000);
const v58 = 127 * 3;
10000 >> -1000000000.0;
Math.atan(v58);
