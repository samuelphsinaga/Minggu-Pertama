//soal1
function deretBilangan(num){
  var res= []
  var jwb=[]
  var r=3
  for(var i=0;i<num;i++){

   res.push(r*(i+1))
  }
  for(var j=0;j<res.length;j++){
    if(res[j]%5===0 && res[j]%6===0){
      jwb.push("KASKUS")
    }
    else if(res[j]%5===0){
      jwb.push("KAS")
    }
    else if(res[j]%6===0){
      jwb.push("KUS")
    }
    else{
      jwb.push(res[j])
    }

 }
 return jwb
}
console.log(deretBilangan(10))

//soal2
// function solvePola(str){
//   var tampung =[]
//   var x= str.split(' = ')
//   var z= x[0].split(' * ')
//   var satu = z[0]
//   var dua = z[1]
//   var hasil = x[1]
//   var tes2= 1
//   var tes=[1,2,3,4,5,6,7,8,9]
//   var hasilHitung=[]
//   var jwb=[]
//   for(var i=0;i<tes.length;i++){
//       hasilHitung.push(Number(satu.replace('#',tes[i]) * dua ) )
//   }
//   for(var j=0;j<tes.length;j++){
//     for(var k=0;k<hasilHitung.length;k++){
//       if(Number(hasil.replace('#',tes[j]))=== Number(hasilHitung[k])){
//         jwb.push(k+1)
//         jwb.push(tes[j])
//       }
//     }
//   }
// return jwb
// }
// console.log(solvePola("42#3 * 188 = 80#204"))
// console.log(solvePola("8#61 * 895 = 78410#5"))

// soal3
// function polaSpiral(array,tamp1=[]){
//   if (array.length===0){
//     return tamp1
//   }
//   else if(array.length===1){

//    tamp1.push(array[0][0])
//     return tamp1
//   }
//   else if(array.length>1 ){

// for(var k=0;k<array[0].length;k++){
//    tamp1.push(array[0][k])
//  }
//  array.shift()
//  for(var i=0;i<array.length;i++){
//    tamp1.push(array[i][array.length])
//    array[i].pop()
//  }
//  for(var j=array[array.length-1].length-1;j>=0;j--){
//    tamp1.push(array[array.length-1][j])
//  }
//  array.pop()
//  for(var t=array.length-1;t>=0;t--){
//    tamp1.push(array[t][0])
//    array[t].shift()
//  }
//  return polaSpiral(array,tamp1)
//  }
// }

// let arr1= [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
// let arr2 =[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]
// let arr3 =[[1,2,3,4,5,6],[6,7,8,9,10,11],[11,12,13,14,15,16],[16,17,18,19,20,21],[21,22,23,24,25,26],[1,2,3,4,5,6]]
// let arr4 =[[1,2,3,4,5,6,7],[6,7,8,9,10,11,7],[11,12,13,14,15,16,7],[16,17,18,19,20,21,7],[21,22,23,24,25,26,7],[1,2,3,4,5,6,7],[1,2,3,4,5,6,7]]

// console.log(polaSpiral(arr1))
// console.log(polaSpiral(arr2))
// console.log(polaSpiral(arr3))
// console.log(polaSpiral(arr4))