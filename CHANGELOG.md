# CHANGELOG

## 0.3.0

### Improvements

- Fixed shadowing for non-ns component var generated in dev-only code [4458ee](https://github.com/pitch-io/uix/commit/4458ee7c31aa87e98961140ba0fa2807f57d2de9)

### New

- Basic SSR on JVM [4a10c9](https://github.com/pitch-io/uix/commit/4a10c9b9282fadb2c58029d0786ceba77f4487f4)

## 0.2.0

### Improvements

- Improved missing deps check to account for vars shadowing [#73](https://github.com/pitch-io/uix/pull/73)

### New

- Added `^:lint-deps` meta for deps vector in hooks to opt-in for missing deps check [1dbb7d9](https://github.com/pitch-io/uix/commit/1dbb7d93d17941e3066e5d5a3029d0642868c8c0)
- Documented hooks linting [baa7b9](https://github.com/pitch-io/uix/commit/baa7b90850378102d89c4fa15022569d769c1bef)
