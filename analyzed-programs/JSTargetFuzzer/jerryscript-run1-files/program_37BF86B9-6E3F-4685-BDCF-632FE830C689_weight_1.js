const v1 = new Error();
function f2() {
    return Error;
}
{
    v1.valueOf = f2;
    Object.defineProperty(Error, "b", { set: Error });
    f2 !== 2147483648n;
}
function f13(a14, a15, a16, a17) {
    512 == 1073741825n;
    return a14;
}
f13(1073741825n, 11, 512, 11, 512);
v1.h = 512;
let v27 = -18699;
new WeakMap();
2n > v27++;
