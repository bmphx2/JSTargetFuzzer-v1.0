function f0() {
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
        function f4(a5) {
            try { new a5(); } catch (e) {}
            return a5;
        }
        f4(F2);
    }
    new F2();
    const o16 = {
        ["undefined"](a12) {
            return typeof this === "boolean";
        },
        __proto__: "undefined",
        "e": "undefined",
        "a": 1.1776614111184717e+308,
        ..."unscopables",
        2147483648: 1.1776614111184717e+308,
        "g": "undefined",
    };
    return o16;
}
f0();
f0();
f0();
new Uint16Array(127);
new Int16Array(127);
new Uint8Array(178);
const v35 = /d/i;
let v36 = 1073741824n;
++v36;
const v39 = (-11n).toString;
try { v39(); } catch (e) {}
v35 * /(ab|cde)+/gyu;
