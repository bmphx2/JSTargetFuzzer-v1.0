const v3 = ["arguments","getTime"];
const v4 = ["getTime",v3,v3];
const v5 = ["ignoreCase",v3,v4,"arguments",v4];
const v6 = [v3];
const v7 = ["arguments"];
const v8 = [v3,v7,"ignoreCase",v7,"getTime"];
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = "ignoreCase";
    this.g = v7;
    this.h = v5;
}
new F9(v4, "arguments", v7, v6, F9);
new F9(v6, "getTime", v3, v7);
new F9(v7, "getTime", v8, v5);
([]).lastIndexOf();
