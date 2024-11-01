let subjectmarks = [
  {subject:"urdu", marks:470},
  {subject:"english", marks:490},
  {subject:"math", marks:500}
]
let fullmarks = 500*subjectmarks.length
let totalmarks = 0

for(let i = 0 ; i<subjectmarks.length ; i++ ){
  totalmarks += subjectmarks[i].marks 
}
let percentage = Math.floor(totalmarks/fullmarks*100)
console.log(`Percentage: ${percentage}%`)


// let sum = subjectmarks.map((x)=>x.marks).reduce((acc,curr)=>{
//   return acc + curr
// })
// console.log(sum)


// another way to do above code 

let add = subjectmarks.reduce((acc,curr)=>{
  return acc + curr.marks
}, 0)
console.log(`Total marks: ${fullmarks}`)
console.log(`Obtain marks: ${add}`)
