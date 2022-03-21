import variables from 'less-plugin-dls/variables.json'

export function evaluate(value) {
  if (!value) {
    return value
  }
  if (typeof value === 'boolean') {
    return value
  }
  if (Array.isArray(value)) {
    return value.map(evaluate)
  }
  if (typeof value === 'object') {
    return Object.keys(value).reduce((acc, cur) => {
      acc[cur] = evaluate(value[cur])
      return acc
    }, {})
  }
  if (typeof value === 'string') {
    return value.replace(/@(\w+(?:-\w+)*)/g, (_, key) => variables[key]?.value)
  }
  return value
}

export function multiplyLength(length, multiplier) {
  let [matched, value, unit] = length.match(/^(\d+)(\w+)$/) || []

  if (!matched) {
    return length
  }

  return Number(value) * multiplier + unit
}
