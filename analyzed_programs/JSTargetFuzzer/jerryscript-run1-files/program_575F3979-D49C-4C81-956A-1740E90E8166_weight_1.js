function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 1073741823;
}
const v3 = new F0();
const v4 = new F0();
const v6 = new Date();
const v8 = v6 !== v4 ? v6 : v4;
let v9;
try { v9 = v8.setUTCDate(v8); } catch (e) {}
try { Date.parse(v9); } catch (e) {}
let v12 = 42624;
++v12;
-v8;
!v3 - v4;
Math.asin(v3 / v4);
v12 / v3;
[v6];
function f22() {
    return f22;
}
const o23 = {
    ...f22,
    ...f22,
};
const v24 = new F0();
function f25(a26, a27) {
    const o32 = {
        [a26](a29, a30) {
            function f31() {
                return a30;
            }
            return a30;
        },
        __proto__: a27,
        "a": v24,
        ...a27,
        ...v3,
    };
    return o32;
}
const v33 = f25(F0, v24);
f25(v33, v4);
const v35 = f25(v33, v24);
const o41 = {
    "call": f25,
    "defineProperty": f22,
    "deleteProperty": Date,
    "has": f25,
    "preventExtensions": f22,
    "set": f25,
    "setPrototypeOf": f22,
};
new Proxy(v35, o41);
const v50 = -14;
const v51 = ~-1423981769n;
try { Date.UTC(268435439, -14, 14, -14, v50, -14, v51); } catch (e) {}
