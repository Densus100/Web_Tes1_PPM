//integer ke biner
$(".int2bin").click(function(){
  $(".out_biner").text("");
  var nilai_int = $(".in_int").val(); //nilai integer masukan
  var array_bin = []; //array dari biner 
  while (nilai_int >= 1)
  {
    var bit  = nilai_int%2;  // modulo, atau sisa bagi dua 
    nilai_int = Math.floor(nilai_int/2);  //pembulatan ke bawah
    array_bin.push(bit);
  }
  //print array binary
  array_bin.reverse(); //di reverse, baca dari kanan
  $(".out_biner").text(array_bin.join(''));
});

//biner ke integer 
$(".bin2int").click(function(){
	var nilai_bin = $(".in_bin").val(); //nilai binary masukan 
  var array_bin = nilai_bin.split("");
  var nilai_int = 0; //initial value 
  var digit = array_bin.length // banyaknya biner
  for(var i=0; i<digit; i++){
    nilai_int = nilai_int + array_bin[digit-i-1]*Math.pow(2,i);
  }
  $(".out_int").text(nilai_int); //print doang 
});


