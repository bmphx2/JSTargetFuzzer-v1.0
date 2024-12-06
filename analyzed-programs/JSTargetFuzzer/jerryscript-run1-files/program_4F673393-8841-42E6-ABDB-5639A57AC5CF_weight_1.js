function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a5;
    this.e = a5;
    this.a = a5;
}
const v6 = new F3("string");
const v7 = new F3("getUTCMilliseconds");
new F3("string");
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = "g";
    this.f = a13;
    this.a = F3;
}
const v14 = new F9("g", v6, "getUTCMilliseconds");
new F9("string", v6, "string");
new F9("g", v7, "g");
for (let v20 = 0; v20 < 32; v20++) {
    v14["p" + v20] = v20;
}
