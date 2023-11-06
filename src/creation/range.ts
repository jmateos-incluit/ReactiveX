import { range } from 'rxjs'

const obs = range(1,10)

obs.subscribe((x)=>{
    console.log(x)
})

obs.subscribe((x)=>{
    console.log("sus 2: " + x)
})
