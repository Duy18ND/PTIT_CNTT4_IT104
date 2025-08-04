function filter(arr){
  let obj = {};
    for (let i = 0; i < arr.length; i++) {
      //Lay tung phan tu arr ra
      //Sắp xếp từng phân tử theo bảng chữ cái (A-Z)
      let word = arr[i].split("").sort().join(""); 
      if(!obj[word]){
      obj[word] = []; 
    }
      obj[word].push(arr[i]); 
  }
  console.log("obj: ",Object.values(obj));
}

filter(["eat", "tea", "tan", "ate", "nat", "bat"]);