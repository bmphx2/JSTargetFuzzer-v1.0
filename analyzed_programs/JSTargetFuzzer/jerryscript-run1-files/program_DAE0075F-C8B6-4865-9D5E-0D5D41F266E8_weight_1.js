function f11(a12, a13) {
    try { a12(a12, a12); } catch (e) {}
    Object.defineProperty(a13, a13, { configurable: true, set: f11 });
    return f11;
}
f11(f11, f11, -2147483648, -2147483648, -1073741824);
