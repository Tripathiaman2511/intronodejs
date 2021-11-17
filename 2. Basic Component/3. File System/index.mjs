//fileSystem
import { WSAEREMOTE } from 'constants'
import {readFile,writeFile} from 'fs/promises'

//await: stops the js at line 24 till it done
let template = await readFile(new URL('template.html',import.meta.url),'utf-8') // path to the file: import.meta.url;
const data = {
    title:"learn nodejs",
    body:"hey every body"
}
//Object.entries will return an array of key and value pair 
for(const[k,v] of Object.entries(data)){
    template=template.replace(`{${k}}`,v) //whenever there is a { key } replace it with value
}
console.log(template)

//to write the changes 
await writeFile(new URL('index.html',import.meta.url),template)