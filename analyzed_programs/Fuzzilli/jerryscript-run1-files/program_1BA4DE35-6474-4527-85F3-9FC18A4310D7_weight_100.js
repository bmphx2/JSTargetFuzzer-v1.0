function f3() {
    return 15n;
}
new Int16Array(2, f3);
new Uint8Array(257, -4294967295n, 2);
new Uint8Array(f3);
const t6 = -4294967295n;
t6.matchAll = 4;
