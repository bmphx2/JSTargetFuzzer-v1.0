new Date();
const v2 = [-1000.0,-9.500281798657292,-0.19607348631270405,1.7976931348623157e+308];
const v3 = [8.882452125317371,Infinity,NaN,1.0,Infinity,1.7976931348623157e+308,NaN,NaN,-1000000000000.0];
const v4 = [7.101537857797592e+307,-2.0,-5.0,-1000000000.0,1.0,834506.8571214173,-1.0,-1.7976931348623157e+308,5.0,-2.645659147300165];
function f5() {
    const v7 = new Int16Array();
    const o8 = {
    };
    async function f9(a10, a11, a12) {
        Object.defineProperty(o8, "a", { writable: true, configurable: true, get: v7 });
        return a10;
    }
    f9(Int16Array, Int16Array, f9);
    return f5;
}
const v14 = [2036046200,-9223372036854775807,-61646];
v14[6] = f5;
try { v14.sort(Symbol); } catch (e) {}
function f17(a18) {
    const o27 = {
        get f() {
            let v19 = this;
            Object.defineProperty(Date, v4, { writable: true, value: v2 });
            a18.c = v3;
            v19 **= a18;
            const o22 = {
                "maxByteLength": 257,
            };
            const v24 = new SharedArrayBuffer(257, o22);
            new Int8Array(v24);
            return a18;
        },
    };
    return o27;
}
f17(v2);
f17(v4);
f17(v4);
const v38 = new Set();
class C39 {
    constructor(a41) {
        try { a41(Set, Set, ...a41); } catch (e) {}
    }
}
new C39(v38);
