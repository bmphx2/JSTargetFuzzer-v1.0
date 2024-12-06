const v0 = [11950,2,41155];
const v1 = [-7,65536,0,2147483649,7];
const v2 = [1073741824,1312732029,-4294967297,512,-838443273,-1569759465,5];
function f3() {
    return v1;
}
let v6 = "s";
function f7(a8, a9, a10, a11) {
    const o24 = {
        "f": v2,
        2147483649: a11,
        __proto__: "-4480",
        get d() {
            Object.defineProperty(a10, 5, { configurable: true, set: placeholder });
            a10 >>> a11;
            function F15(a17, a18, a19, a20) {
                if (!new.target) { throw 'must be called with new'; }
                this.c = "-4480";
                this.a = this;
                this.g = a11;
            }
            new F15(v6, v6, "-4480", v1);
            new F15(v6, a8, a8, v2);
            const v23 = new F15("-4480", a8, v6, a10);
            return v23;
        },
    };
    return o24;
}
f7("o", v0, v2, v2);
f7(v6, v1, v1, v0);
const v27 = f7("o", v0, v0, v1);
new Int32Array(1627);
const v33 = new Int8Array(3);
const v36 = new Float64Array(2899);
v33[203] %= 1627;
v36.__proto__ = v1;
v6 = "-4480";
v1[1] = 536870887n;
delete v27?.f;
v1.length;
try { v1.reduce(f3); } catch (e) {}
