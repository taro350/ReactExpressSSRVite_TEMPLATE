export default function Env() {
  let msg = 'Env page'
  
  try {
    msg = process.env.MY_CUSTOM_SECRET || msg
  } catch {}
  return <h1>{msg}</h1>
}
