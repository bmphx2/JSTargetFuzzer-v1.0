function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 15079;
    this.d = 15079;
    this.d = 15079;
}
const v3 = new F0();
const v4 = new F0();
let v5 = new F0();
function f6() {
    return v3;
}
function f9(a10, a11) {
    const o12 = {
        __proto__: v4,
        "g": F0,
    };
    return o12;
}
f9(v3, v5);
f9(v4, v4);
f9(v3, v5);
function F17(a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = "multiline";
    this.h = a19;
    this.d = a19;
    if (a19 === v3) {
    } else {
        "multiline" >= v4 ? "multiline" : v4;
    }
}
const v28 = new F17("multiline", "h", v3);
const v29 = new F17("callee", v28, v4);
const v30 = new F17(v29, "multiline", v5);
class C31 extends F0 {
    static p(a33, a34) {
        v5 = a34;
        function F35(a37, a38, a39) {
            if (!new.target) { throw 'must be called with new'; }
            this.b = a33;
            this.h = this;
            this.g = a38;
        }
        new F35("callee", a33, f6);
        new F35("multiline", v30, f6);
        new F35("callee", v29, f6);
        return "multiline";
    }
    static 7 = v4;
    static f = v4;
    3 = v5;
}
[127,-9007199254740992,-2147483647,-52173,-2147483649,9471,65535,-1136265304,-12,57512];
[181005065,-66186093,-16,-9223372036854775808,499363136];
[-1,693850018,-1073741824,65535,7,-7,-256,4294967295,-9870];
f6();
~v3;
new C31();
new C31();
new C31();
class C51 {
}
for (let i = 0; i < 5; i++) {
    function f52() {
        return f52;
    }
}
