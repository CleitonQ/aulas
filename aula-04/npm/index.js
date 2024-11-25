import { z } from "zod"

const mySchema = z.string()

console.log(mySchema.parse("Cleiton"))

alert("Olá, mundo!")