var r=document.querySelector(".range-slider"),a=document.querySelector(".range__field--min"),o=document.querySelector(".range__field--max"),i=[a,o],c=()=>{if(r){noUiSlider.create(r,{start:[0,900],connect:!0,step:1,range:{min:[0],max:[980]}}),r.noUiSlider.on("update",(n,e)=>{i[e].value=Math.round(n[e])||""});let l=(n,e)=>{let t=[null,null];t[n]=e,r.noUiSlider.set(t)};i.forEach((n,e)=>{n.addEventListener("change",t=>{l(e,t.currentTarget.value)})})}};export{c as initializeRangeSlider};
