function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = "-2";
    this.c = "-2";
    this.f = "bigint";
}
const v12 = new F6(11027, 5, 5, "bigint");
const v13 = new F6(11027, 5, 11027, v12);
new F6(5, 5, 11027, v13);
const v20 = new Uint8Array();
const v22 = new Uint16Array(16);
delete v20[v22];
