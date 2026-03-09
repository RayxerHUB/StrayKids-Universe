/* DARK MODE TOGGLE */

const toggle=document.createElement("button")

toggle.innerText="🌙"

toggle.style.position="fixed"
toggle.style.bottom="20px"
toggle.style.right="20px"
toggle.style.zIndex="9999"
toggle.style.padding="12px 15px"
toggle.style.borderRadius="50%"
toggle.style.border="none"
toggle.style.cursor="pointer"
toggle.style.background="#2196f3"
toggle.style.color="white"
toggle.style.fontSize="18px"

document.body.appendChild(toggle)

toggle.onclick=()=>{

document.body.classList.toggle("dark-mode")

}