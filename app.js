let btn1=document.getElementById("myButton");
        let btn2=document.getElementById("myButton2");
        let copyDiv=document.querySelector(".copyCode");

        const hexValues=()=>{
            let myValues="0123456789abcdef";
            let change="#";
            for(let i=0;i<6;i++)
            {
              change=change+myValues[Math.floor(Math.random()*16)];
             
            }
            return change;
        };
       let rgb1="#00473";
       let rgb2="#54d542";
         
        const handleButton1=()=>{
             rgb1=hexValues();
            console.log(rgb1);
            btn1.innerHTML=rgb1;
            document.body.style.backgroundImage= `linear-gradient(to right,${rgb1},${rgb2})`;
            copyDiv.innerHTML=`background-image: linear-gradient(to right,${rgb1},${rgb2})`;


        };

        const handleButton2=()=>{
             rgb2=hexValues();
            console.log(rgb2);
            btn2.innerHTML=rgb2;
            document.body.style.backgroundImage= `linear-gradient(to right,${rgb1},${rgb2})`;
            copyDiv.innerHTML=`background-image: linear-gradient(to right,${rgb1},${rgb2})`;
        };

        btn1.addEventListener('click',handleButton1);
        btn2.addEventListener('click',handleButton2);
        copyDiv.addEventListener('click',()=>{
            navigator.clipboard.writeText(copyDiv.innerText);
            alert("content copied");
        })