function Calculate_Length() {
    let s1 = document.getElementById("s1").value;
    let s2 = document.getElementById("s2").value;
    let s3 = document.getElementById("s3").value;

    let largest ='';
    if (s1.length > s2.length && s1.length > s3.length) 
    {
       largest += s1;
    }
    else if (s2.length > s3.length && s2.length > s1.length)
     {
      largest += s2;
    }

    else 
    {
     largest += s3;
    }
 
    document.getElementById("solution").innerHTML = largest;

}