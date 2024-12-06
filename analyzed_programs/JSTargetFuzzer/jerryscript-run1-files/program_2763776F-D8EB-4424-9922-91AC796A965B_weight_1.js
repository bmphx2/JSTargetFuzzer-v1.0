const v2 = new BigInt64Array(3107);
const v5 = new Int16Array(257);
const v8 = new Uint8Array(512);
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a12;
    this.a = a13;
}
const v14 = new F9(v5, 257, Uint8Array);
new F9(v5, 512, Int16Array);
const v16 = new F9(v14, 3107, v14);
function F26(a28, a29, a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a31;
    this.f = -4294967296;
}
new F26(-4294967296, 5n, "global", "-16");
new F26(-4294967296, -7n, "-16", "global");
const v34 = new F26(-4294967296, 5n, "global", "global");
const v35 = "function" == v34;
if (v35) {
    function F38(a40, a41) {
        if (!new.target) { throw 'must be called with new'; }
        this.f = -65535;
        this.g = v14;
    }
    new F38(5n, v14);
    new F38(5n, v14);
    new F38(8n, v14);
} else {
    function F46(a48, a49, a50) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a50;
    }
    const v51 = new F46(F46, "global", "function");
    new F46(v51, "global", "function");
    new F46(v51, "global", "function");
}
v2.reverse(...v5, v16, v35, -1, 8n, v14);
("global").__proto__;
v8.__proto__;
257 ** 257;
3107 & 3107;
