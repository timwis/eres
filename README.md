# eres
Use async/await with `[err, result]` instead of try/catch.

## usage
Instead of:
```javascript
let result
try {
  result = await fetch('https://...')
} catch (err) {
  console.error('no workie')
}
render(result)
```

You can now:
```javascript
const [err, result] = await eres(fetch('https://...'))
if (err) return console.error('no workie')
render(result)
```

Don't spend all the vertical space you get back in one place.

## installation
```bash
npm install eres
```

## related
- [0x00A/asde](https://www.npmjs.com/package/asde)
