# Turbopack: wrong module evaluation order with scope hoisting

```
npm install
npm run build
npm start
```

Expected: modules log `c a b` and `/` shows `order: c a b`.
Actual (Turbopack production build): `c b a`. `next dev`, `--webpack` and `turbopackScopeHoisting: false` give `c a b`.
