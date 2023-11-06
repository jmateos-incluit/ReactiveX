import { interval } from 'rxjs'

const obs = interval(1000)

obs.subscribe((x)=>{
    console.log(x)
})