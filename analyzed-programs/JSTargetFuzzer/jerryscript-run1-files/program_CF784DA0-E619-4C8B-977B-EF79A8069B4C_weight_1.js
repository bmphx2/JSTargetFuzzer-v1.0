const v1 = new Date();
const v2 = [-1000.0,-9.500281798657292,-0.19607348631270405,1.7976931348623157e+308];
const v3 = [8.882452125317371,Infinity,NaN,1.0,Infinity,1.7976931348623157e+308,NaN,NaN,-1000000000000.0];
const v4 = [7.101537857797592e+307,-2.0,-5.0,-1000000000.0,1.0,834506.8571214173,-1.0,-1.7976931348623157e+308,5.0,-2.645659147300165];
function f5() {
    const v7 = new Int16Array();
    const o8 = {
    };
    async function f9(a10, a11, a12) {
        if (v1 === a12) {
        } else {
            v4[o8] = a12;
        }
        Object.defineProperty(o8, "a", { writable: true, configurable: true, get: v7 });
        return a10;
    }
    f9(Int16Array, Int16Array, f9);
    return f5;
}
const v18 = [2036046200,-9223372036854775807,-61646];
v18[6] = f5;
try { v18.sort(Symbol); } catch (e) {}
function f21(a22) {
    const o38 = {
        get f() {
            let v23 = this;
            Object.defineProperty(Date, v4, { writable: true, value: v2 });
            a22.c = v3;
            v23 **= a22;
            let v26 = 0;
            while (v26 < 2) {
                v26++;
            }
            const o33 = {
                "maxByteLength": 257,
            };
            const v35 = new SharedArrayBuffer(257, o33);
            new Int8Array(v35);
            return a22;
        },
    };
    return o38;
}
f21(v2);
f21(v4);
f21(v4);
const v49 = new Set();
class C50 {
    constructor(a52) {
        try { a52(Set, Set, ...a52); } catch (e) {}
    }
}
new C50(v49);
