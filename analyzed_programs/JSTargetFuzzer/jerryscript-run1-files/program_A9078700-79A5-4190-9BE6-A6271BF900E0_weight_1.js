const v0 = [-536870912,-4096,6,11250,-12,5398,1,-1024,-9007199254740991];
const v1 = [129];
const v2 = [2147483648];
class C3 {
    static a = v1;
    static valueOf(a5) {
        function f6() {
            return this;
        }
        v2.valueOf = f6;
        const o7 = {
            "construct": f6,
            "defineProperty": f6,
            "get": f6,
            "getPrototypeOf": f6,
            "preventExtensions": f6,
            "setPrototypeOf": f6,
        };
        const v9 = new Proxy(v0, o7);
        return v9;
    }
}
new C3();
const v11 = new C3();
const v12 = new C3(v11);
function f13() {
    return v12;
}
[f13,f13];
[v1,v12];
[v1];
const v22 = new Int16Array(255);
const v25 = new Uint8Array(5);
new Uint8ClampedArray(257);
function f29(a30, a31) {
    const o44 = {
        174: a30,
        "c": v25,
        65536: a30,
        "e": v25,
        set f(a33) {
            try { a33(Int16Array, a33, a33, this); } catch (e) {}
            new Uint8ClampedArray(2);
            new Uint16Array(-17945977);
            new Int16Array(16);
        },
    };
    return o44;
}
f29(5, 255);
const v46 = f29(255, 257);
f29(257, 255);
const v48 = new Uint8Array(257, 257, 255);
let v49;
try { v49 = v48.includes(v48); } catch (e) {}
Object.defineProperty(v46, 257, { enumerable: true, get: f29 });
for (let v50 = 0; v50 < 32; v50++) {
    v25["p" + v50] = v50;
}
v25[3];
try { v49["function"](Int16Array, v25, v22); } catch (e) {}
