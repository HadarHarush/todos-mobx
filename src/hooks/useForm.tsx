import { useEffect, useState } from 'react'

export function useForm(
  initialState: any,
  cb: (fields: any) => any = function () {}
) {
  const [fields, setFields] = useState(initialState)

  useEffect(() => {
    cb(fields)
  }, [fields])

  return [
    fields,
    function ({ target }: { target: any }) {
      const field = target.name
      const value = isNumeric(target.value) ? +target.value : target.value
      setFields({ ...fields, [field]: value })
    },
    setFields,
  ]
}

function isNumeric(str: any) {
  if (typeof str != 'string') return false // we only process strings!
  return (
    //@ts-ignore
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ) // ...and ensure strings of whitespace fail
}
