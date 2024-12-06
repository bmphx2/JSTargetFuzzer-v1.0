let v1 = 512n;
const v3 = [65536n,v1,v1,256n,65536n];
const v4 = [v3,v3];
const v5 = [v4];
function f6(a7, a8, a9, a10) {
    const o28 = {
        [v5](a12, a13) {
            [[a9,65536n]];
            return [a10,a13,a9,65536n];
        },
        [a10](a18, a19, a20, a21) {
            function f22(a23, a24, a25) {
                try { new a19(a25); } catch (e) {}
                return a20;
            }
            f22(v4, a19, a21);
            return v3;
        },
    };
    return o28;
}
const v29 = f6(v3, 65536n, v4, v4);
const v30 = f6(v5, v1, v4, v3);
f6(v30, 256n, v30, v4);
const v37 = new Array(3381);
try { v37.find(Array, v29); } catch (e) {}
for (let v39 of v5) {
    let v40 = 0;
    do {
        Object.defineProperty(v37, 194, { writable: true, enumerable: true, get: f6 });
        ({"d":v39,"g":v1,"length":v40,} = v4);
        v40++;
    } while (v40 < 3)
}
