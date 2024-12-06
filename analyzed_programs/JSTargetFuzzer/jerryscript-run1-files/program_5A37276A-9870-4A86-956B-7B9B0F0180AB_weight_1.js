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
const v10 = new C3();
const v11 = new C3();
const v12 = new C3(v11);
function f13() {
    return v12;
}
[f13,f13];
[v1,v12];
[v1];
const v22 = new Int16Array(255);
let v23 = 5;
const v25 = new Uint8Array(v23);
new Uint8ClampedArray(257);
function f29(a30, a31) {
    const o47 = {
        174: a30,
        "c": v25,
        65536: a30,
        "e": v25,
        set f(a33) {
            let v34;
            try { v34 = a33(Int16Array, a33, a33, this); } catch (e) {}
            const v37 = new Uint8ClampedArray(2);
            v23 = 2;
            try { a33(3.0, -710.3580473898265, v37, v10, v37); } catch (e) {}
            Object.defineProperty(v12, a31, { enumerable: true, get: f13, set: f29 });
            v34 || v37;
            v25[2];
            new Uint16Array(-17945977);
            new Int16Array(16);
        },
    };
    return o47;
}
f29(v23, 255);
const v49 = f29(255, 257);
f29(257, 255);
const v51 = new Uint8Array(257, 257, 255);
let v52;
try { v52 = v51.includes(v51); } catch (e) {}
Object.defineProperty(v49, 257, { enumerable: true, get: f29 });
for (let v53 = 0; v53 < 32; v53++) {
    v25["p" + v53] = v53;
}
v25[3];
try { v52["function"](Int16Array, v25, v22); } catch (e) {}
